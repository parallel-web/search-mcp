<img src="https://assets.parallel.ai/dark-parallel-avatar-270.svg" alt="Parallel" width="48" />

# Parallel Search MCP

**Free web search for your coding agent.**

Find current documentation, check facts, and read web pages without leaving your agent. No account or API key needed to get started.

## Ask your agent to install

Copy this into your coding agent:

```text
Install Parallel's free Search MCP in the coding agent I'm using now.
Identify your client and use its native MCP setup instructions:
https://docs.parallel.ai/integrations/mcp/search-mcp

Server name: parallel-search
Server URL: https://search.parallel.ai/mcp
Transport: Streamable HTTP
Authentication: none. No account, API key, or Parallel CLI is needed.

Preserve existing settings and reuse any connection to this endpoint.
Tell me if a restart or approval is required.

Once connected, check that web_search and web_fetch are available.
Use Parallel to find the official FastAPI response-model documentation
and return a source link. Report anything you couldn't verify.
```

[Install in Cursor](https://cursor.com/en/install-mcp?name=Parallel%20Search%20MCP&config=eyJ1cmwiOiJodHRwczovL3NlYXJjaC5wYXJhbGxlbC5haS9tY3AifQ==) · [Install in VS Code](https://insiders.vscode.dev/redirect/mcp/install?name=Parallel%20Search%20MCP&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsearch.parallel.ai%2Fmcp%22%7D) · [Manual setup](#manual-setup) · [Documentation](https://docs.parallel.ai/integrations/mcp/search-mcp)

## Manual setup

Choose your client. You only need one of these options.

### Claude Code

Run this in the project where you want to use Parallel:

```bash
claude mcp add --transport http --scope project parallel-search https://search.parallel.ai/mcp
```

Start a new Claude Code session, approve the MCP connection if prompted, and run `/mcp` to check that `parallel-search` is connected. The free endpoint does not require a Parallel login.

### Codex

```bash
codex mcp add parallel-search --url https://search.parallel.ai/mcp
```

Start a new Codex session and run `/mcp` to check the connection. See the [Codex MCP guide](https://developers.openai.com/codex/mcp/) for configuration options.

### OpenCode

Merge this into your project's `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "parallel-search": {
      "type": "remote",
      "url": "https://search.parallel.ai/mcp",
      "oauth": false
    }
  }
}
```

Restart OpenCode and run `opencode mcp list` to check the connection. See the [OpenCode MCP guide](https://opencode.ai/docs/en/mcp-servers) for details.

### OpenClaw

Follow the [OpenClaw setup guide](https://docs.openclaw.ai/tools/parallel-search) to install the Parallel plugin, then set `tools.web.search.provider` to `parallel-free`. No Parallel account or API key is needed.

### Cursor, VS Code, and other clients

Use this remote MCP server URL:

```text
https://search.parallel.ai/mcp
```

Select HTTP or Streamable HTTP if your client asks for a transport. Follow the [client-specific instructions](https://docs.parallel.ai/integrations/mcp/search-mcp#installation) for the right settings file and format.

## Try it

Ask your agent:

> Use Parallel to find the official FastAPI docs for response models. Show me a small example and link to the source.

Or try:

> Use Parallel to check the latest stable Node.js release and its release notes. Cite the official sources.

> Use Parallel to read https://modelcontextprotocol.io/introduction and explain how MCP connects an agent to tools.

Your agent can use two tools:

| Tool | What it does |
| --- | --- |
| `web_search` | Searches the web and returns relevant excerpts with source links. |
| `web_fetch` | Reads specific URLs and returns page content for your agent to use. |

Search results often contain enough information to answer. Your agent can fetch a page when it needs more detail.

## Free access and higher limits

The free endpoint is rate-limited. For higher limits, connect a Parallel account using an API key or OAuth. Authenticated usage follows your account's pricing and limits. See the [authentication instructions](https://docs.parallel.ai/integrations/mcp/search-mcp#installation).

Parallel hosts the service. Search queries and requested URLs are sent to Parallel under the [Customer Terms](https://parallel.ai/customer-terms) and [Privacy Policy](https://parallel.ai/privacy-policy).

## Troubleshooting

- **Tools aren't showing up:** start a new agent session and check its MCP connection list. Confirm the URL is `https://search.parallel.ai/mcp`.
- **Asked to log in to Parallel:** check the URL. `/mcp` supports free access; `/mcp-oauth` requires authentication. Approving an MCP connection in your client is separate from logging in to Parallel.
- **Hit a rate limit:** wait before retrying, or connect your Parallel account for higher limits.
- **Still stuck:** check the [setup guide](https://docs.parallel.ai/integrations/mcp/search-mcp#troubleshooting) or [open an issue](https://github.com/parallel-web/search-mcp/issues). Include your client, version, and error message. Leave out API keys and other credentials.

## About this repo

This is the official GitHub home for Parallel's hosted Search MCP. It contains this guide and Claude, Codex, and Cursor plugin configurations. All three use the same `.mcp.json`. You can suggest documentation fixes and examples here. The search service runs on Parallel's infrastructure; cloning this repo gives you the documentation and configuration files.

For CLI-based search, research, and enrichment, see the separate [Parallel CLI skills plugin](https://github.com/parallel-web/parallel-agent-skills).

To try the Claude plugin from a local checkout:

```bash
git clone https://github.com/parallel-web/search-mcp.git
claude --plugin-dir ./search-mcp
```

Use either the plugin or the direct MCP setup above to avoid adding the same server twice.

The files in this repo are [MIT licensed](LICENSE). Hosted service usage is covered by the Customer Terms linked above.
