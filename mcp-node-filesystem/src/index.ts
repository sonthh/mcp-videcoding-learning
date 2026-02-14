import { readdir } from "fs/promises";
import { resolve } from "path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Use stderr for logging so we don't corrupt JSON-RPC on stdout
const log = (msg: string) => console.error(`[mcp-node-filesystem] ${msg}`);

const server = new McpServer({
  name: "mcp-node-filesystem",
  version: "1.0.0",
});

server.registerTool(
  "ls",
  {
    description:
      "List files and folders under a directory. Returns names and types (file/directory).",
    inputSchema: {
      path: z
        .string()
        .optional()
        .default(".")
        .describe(
          "Directory path to list (absolute or relative). Defaults to current directory."
        ),
    },
  },
  async ({ path: dirPath }) => {
    try {
      const resolved = resolve(process.cwd(), dirPath ?? ".");
      const entries = await readdir(resolved, { withFileTypes: true });
      const lines = entries.map((e) =>
        e.isDirectory() ? `${e.name}/` : e.name
      );
      const text =
        lines.length === 0
          ? `(empty)\n${resolved}`
          : `${resolved}\n\n${lines.join("\n")}`;
      return {
        content: [{ type: "text" as const, text }],
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      log(`ls error: ${message}`);
      return {
        content: [
          {
            type: "text" as const,
            text: `Error listing "${dirPath}": ${message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  log("Running on stdio");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
