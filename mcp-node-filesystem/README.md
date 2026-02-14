# mcp-node-filesystem

A simple [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that exposes a **`ls`** tool to list files and folders under a directory. Built with the [official MCP TypeScript SDK](https://modelcontextprotocol.io/docs/develop/build-server) and stdio transport.

## What it does

- **Tool: `ls`** — Lists entries in a folder. Accepts an optional `path` (default: current directory). Returns file and directory names (directories are suffixed with `/`). Useful for the Cursor agent to explore your project layout.

## Prerequisites

- **Node.js** 18 or higher
- **npm** (or pnpm/yarn)

## Quick start

```bash
# Install dependencies
npm install

# Build the server
npm run build

# Run the server (stdio; used when Cursor or Inspector launches it)
npm start
```

The server communicates over **stdio** (standard input/output). It is intended to be started by an MCP client (Cursor or MCP Inspector), not run interactively.

---

## Connect to Cursor

Cursor uses an MCP config file to know which servers to start. You can use either a **global** or **project-level** config.

### Option 1: Global config (all projects)

Edit the global MCP config:

- **macOS / Linux:** `~/.cursor/mcp.json`
- **Windows:** `%APPDATA%\Cursor\mcp.json`

Or in Cursor: **Settings → Tools & MCP → Edit config** (opens this file).

### Option 2: Project-level config (this repo only)

Create or edit `.cursor/mcp.json` in your project root (or in the folder where you want this server available).

### Config content

Add the `mcp-node-filesystem` server with **stdio** transport. Use the **absolute path** to the folder that contains `package.json` (and `build/index.js`).

**macOS / Linux example:**

```json
{
  "mcpServers": {
    "mcp-node-filesystem": {
      "command": "node",
      "args": ["/Users/son.tranhh/son/mcp-videcoding-learning/mcp-node-filesystem/build/index.js"]
    }
  }
}
```

**Windows example:** (adjust drive and path to your machine)

```json
{
  "mcpServers": {
    "mcp-node-filesystem": {
      "command": "node",
      "args": ["C:\\Users\\son.tranhh\\son\\mcp-videcoding-learning\\mcp-node-filesystem\\build\\index.js"]
    }
  }
}
```

Save the file, then **fully restart Cursor** (quit the app and reopen) so it picks up the new server.

---

## Use with Cursor agent

1. **Enable the server** in Cursor (Settings → Tools & MCP) and ensure `mcp-node-filesystem` is listed and enabled.
2. In the **Agent** (or Composer) chat, you can ask things like:
   - "List the files in the current project root."
   - "Use the ls tool to show what's in the `src` folder."
   - "What's in the parent directory?"
3. The agent will call the **`ls`** tool with the path you (or it) chose and show you the listing.

The working directory for `ls` is the directory from which the server process was started (typically your project root when Cursor starts the server with the above config).

---

## Debug with MCP Inspector

[MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) lets you test and debug MCP servers without Cursor: you see raw JSON-RPC and can invoke tools manually.

### 1. Install and launch Inspector

From any terminal:

```bash
npx @modelcontextprotocol/inspector
```

The UI usually runs at **http://localhost:6274** (proxy on 6277). Open the URL in your browser if it doesn't open automatically.

### 2. Connect to this server

In the Inspector **Server connection** pane:

- **Transport:** stdio
- **Command:** `node`
- **Arguments:** absolute path to the built server, e.g.  
  `/Users/son.tranhh/son/mcp-videcoding-learning/mcp-node-filesystem/build/index.js`  
  (on Windows use `C:\Users\son.tranhh\son\mcp-videcoding-learning\mcp-node-filesystem\build\index.js`)

Then start/connect the server.

### 3. Inspect and test the `ls` tool

- Open the **Tools** tab. You should see **`ls`** with its description and `path` argument.
- Run **`ls`** with:
  - no arguments (default path `.`), or
  - `{"path": "src"}`, `{"path": ".."}`, etc.
- Check the **Notifications** (or logs) pane for JSON-RPC messages and any errors.

### 4. Optional: one-line Inspector launch with this server

You can pass the server command and args directly to the Inspector:

```bash
npx @modelcontextprotocol/inspector node /Users/son.tranhh/son/mcp-videcoding-learning/mcp-node-filesystem/build/index.js
```

This starts the Inspector and runs your server so you can test **`ls`** right away.

### Why use Inspector?

- See **exact** requests and responses (no model in the middle).
- Verify **tool schema** and **errors** (e.g. invalid path, permission denied).
- Quickly iterate: change code → `npm run build` → reconnect in Inspector.

More detail: [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) and the [Debugging Guide](https://modelcontextprotocol.io/legacy/tools/debugging).

---

## Reference

- **Build an MCP server (official tutorial):**  
  [https://modelcontextprotocol.io/docs/develop/build-server](https://modelcontextprotocol.io/docs/develop/build-server)
- **MCP Inspector:**  
  [https://modelcontextprotocol.io/docs/tools/inspector](https://modelcontextprotocol.io/docs/tools/inspector)
- **Cursor MCP docs:**  
  [https://cursor.com/docs/context/mcp](https://cursor.com/docs/context/mcp)

---

## License

MIT
