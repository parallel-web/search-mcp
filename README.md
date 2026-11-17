<img src="https://assets.parallel.ai/dark-parallel-avatar-270.svg" alt="Parallel" width="48" />

# Parallel Search MCP

**Free web search for your coding agent.**

Find current documentation, check facts, and read web pages without leaving your agent. No account or API key needed to get started.

## Ask your agent to install

Copy this into your coding agent:

```text
Install Parallel's free Search MCP in the coding agent I'm using now.
Identify your client and use its native MCP setup instructions:
https://docs.parallel.ai/integrations/mcp/quickstart

Server name: parallel-search
Server URL: https://mcp.parallel.ai/mcp
Transport: Streamable HTTP
Authentication: none. No account, API key, or Parallel CLI is needed.

Reuse an anonymous connection to the bare URL above if it uses default
settings. Otherwise, migrate a legacy anonymous Parallel Search connection
with default settings by updating its URL and keeping its name. If adding a
new entry and `parallel-search` is taken, choose an unused name. Preserve
authenticated connections, custom configurations, and unrelated settings.
Tell me if a restart or approval is required.

Once connected, check that web_search and web_fetch are available.
Use Parallel to find the official FastAPI response-model documentation
and return a source link. Report anything you couldn't verify.
```

For an existing Parallel Search connection, follow the [upgrade instructions](#upgrade-an-existing-install) before using an install link.

[Install in Cursor](https://cursor.com/en/install-mcp?name=Parallel%20Search%20MCP&config=eyJ1cmwiOiJodHRwczovL21jcC5wYXJhbGxlbC5haS9tY3AifQ==) · [Install in VS Code](https://insiders.vscode.dev/redirect/mcp/install?name=Parallel%20Search%20MCP&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.parallel.ai%2Fmcp%22%7D) · [Manual setup](#manual-setup) · [Documentation](https://docs.parallel.ai/integrations/mcp/quickstart)

## Manual setup

Choose your client. If you already use Parallel Search, follow the [upgrade instructions](#upgrade-an-existing-install). When adding a new manual entry, use an unused server name if the example name is taken.

### Codex

```bash
codex mcp add parallel-search --url https://mcp.parallel.ai/mcp
```

Start a new Codex session and run `/mcp` to check the connection. See the [Codex MCP guide](https://developers.openai.com/codex/mcp/) for configuration options.

### Gemini CLI

```bash
gemini extensions install https://github.com/parallel-web/search-mcp
```

Restart Gemini CLI and run `/mcp` to check that `parallel-search` is connected. The extension uses Streamable HTTP and requires no Parallel account or API key. If you already configured `parallel-search` manually, that configuration takes precedence over the extension. See the [extension guide](https://geminicli.com/docs/extensions/) for installation and update options.

### Hermes Agent

Hermes already includes Parallel in its native web providers. Choose **Parallel Free (keyless)** in `hermes tools` to use that integration.

This optional package adds a direct connection to Parallel's MCP tools and the bundled setup skill. It leaves Hermes's native web-provider selection unchanged. It's available in the [Hermes plugin catalog](https://hermes-agent.nousresearch.com/docs/plugins/parallel-search). Install and enable it with:

```bash
hermes plugins install parallel-search
hermes plugins enable parallel-search
```

Start a new session so Hermes loads the enabled package. Ask Hermes to use the Parallel MCP `web_search` tool to find official documentation, then `web_fetch` to read a page. Use `skills_list` to discover the namespaced `parallel-search-setup` skill. No Parallel account, API key, or CLI is required.

Use either this package or a manually configured connection to `https://mcp.parallel.ai/mcp` to avoid duplicate MCP tools. Disable or remove the package with `hermes plugins disable parallel-search` or `hermes plugins remove parallel-search`. Update through `hermes plugins update parallel-search`; catalog updates use reviewed commit pins.

### OpenCode

Merge this into your project's `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "parallel-search": {
      "type": "remote",
      "url": "https://mcp.parallel.ai/mcp",
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
https://mcp.parallel.ai/mcp
```

Select HTTP or Streamable HTTP if your client asks for a transport. Follow the [client-specific instructions](https://docs.parallel.ai/integrations/mcp/installation) for the right settings file and format.

## Upgrade an existing install

Update the package in your client and start a fresh session to refresh the tool list. For a manual install using default anonymous settings, keep the existing server name. If it still uses the old Search MCP URL, update that entry's URL to `https://mcp.parallel.ai/mcp`. Preserve connections with credentials or custom settings. To migrate one of those connections, follow the [migration guide](https://docs.parallel.ai/integrations/mcp/quickstart#migration-from-the-search-mcp-and-task-mcp).

## Try it

Ask your agent:

> Use Parallel to find the official FastAPI docs for response models. Show me a small example and link to the source.

Or try:

> Use Parallel to check the latest stable Node.js release and its release notes. Cite the official sources.

> Use Parallel to read https://modelcontextprotocol.io/introduction and explain how MCP connects an agent to tools.

Start with these two tools:

| Tool | What it does |
| --- | --- |
| `web_search` | Searches the web and returns relevant excerpts with source links. |
| `web_fetch` | Reads specific URLs and returns page content for your agent to use. |

Search results often contain enough information to answer. Your agent can fetch a page when it needs more detail.
The server also offers Decisions and other tools on the [default tool list](https://docs.parallel.ai/integrations/mcp/quickstart#tool-selection).

## Free access and higher limits

This plugin connects without an account, API key, or login. The free tier is rate limited and is intended for personal agents, hobby projects, and exploration.

For higher limits, Research, or [custom settings](https://docs.parallel.ai/integrations/mcp/quickstart#configuration), create an account at [platform.parallel.ai](https://platform.parallel.ai) and add a separate connection under an unused server name. Follow the [OAuth or API key instructions](https://docs.parallel.ai/integrations/mcp/quickstart#authentication) and use the [installation guide](https://docs.parallel.ai/integrations/mcp/installation) for your client's configuration format. Authenticated usage is billed to your Parallel account after any included usage. Once the new connection works, disable the anonymous package if your client lists duplicate tools.

## Privacy and terms

Parallel hosts the service. Parallel receives the inputs your agent sends in tool calls, such as search queries and URLs, under the [Customer Terms](https://parallel.ai/customer-terms) and [Privacy Policy](https://parallel.ai/privacy-policy).

## Troubleshooting

- **Tools aren't showing up:** start a new agent session and check its MCP connection list. Confirm the URL is `https://mcp.parallel.ai/mcp`.
- **Asked to log in to Parallel:** check that the package connects to the bare `/mcp` URL. The `?login` option is for authenticated connections. Approving an MCP connection in your client is separate from logging in to Parallel.
- **Hit a rate limit:** wait before retrying, or sign in for higher limits.
- **Still stuck:** check the [setup guide](https://docs.parallel.ai/integrations/mcp/installation) or [open an issue](https://github.com/parallel-web/search-mcp/issues). Include your client, version, and error message. Leave out API keys and other credentials.

## Support and security

- **Questions and bugs:** [open an issue](https://github.com/parallel-web/search-mcp/issues) with your client, version, and error message (leave out API keys and other credentials), or see the [documentation](https://docs.parallel.ai/integrations/mcp/quickstart).
- **Product support:** contact Parallel at [support@parallel.ai](mailto:support@parallel.ai).
- **Security concerns:** report privately to [support@parallel.ai](mailto:support@parallel.ai) — see [SECURITY.md](SECURITY.md). Please don't file security reports as public issues.

## About this repo

This is the official GitHub home for Parallel's hosted Search MCP. It contains this guide and Codex, Cursor, Gemini CLI, and Hermes packages. Codex and Cursor share `.mcp.json`; Hermes uses the portable Agent Plugins v1 `plugin.json` and `mcp.json` files and loads the setup skill ([skills/parallel-search-setup/SKILL.md](skills/parallel-search-setup/SKILL.md)) on demand for connection checks, usage guidance, troubleshooting, and higher-limit options. You can suggest documentation fixes and examples here. The search service runs on Parallel's infrastructure; cloning this repo gives you the documentation and configuration files.

For CLI-based search, research, and enrichment, see the separate [Parallel CLI skills plugin](https://github.com/parallel-web/parallel-agent-skills).

The files in this repo are [MIT licensed](LICENSE). Hosted service usage is covered by the Customer Terms linked above.
