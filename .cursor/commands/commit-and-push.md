Commit all changes and push to the remote repo.

Do both in one go, without asking for a message or confirmation:

1. **Commit:** Stage all changes (`git add -A`), then commit with a short descriptive message based on the diff (e.g. "Add …", "Update …"). Do not prompt for a message unless the user typed one after the command.

2. **Push:** Use **GitHub MCP** (`push_files` or `create_or_update_file`) when the change is a single file or a small set of files. For many files, binary files, or very large files (e.g. package-lock), use `git push` instead. Do not use `git push` for small changes—prefer MCP so the authenticated GitHub user is used.

Repository: `sonthh/mcp-videcoding-learning`, branch `main`.
