# Parallel Search MCP

The **Parallel Search MCP** allows using Parallel Search API from within any MCP-compatible LLM client. It is meant for daily use for everyday smaller web-search tasks. Please read [our MCP docs here](https://docs.parallel.ai/integrations/mcp/getting-started) for more details.

## Installation

The official installation instructions can be found [here](https://docs.parallel.ai/integrations/mcp/installation).

```json Search MCP
{
  "mcpServers": {
    "Parallel Search MCP": {
      "url": "https://search-mcp.parallel.ai/mcp"
    }
  }
}
```

## Running locally

<details><summary>Running locally</summary>

This is a Search MCP proxy server (https://search-mcp.parallel.ai) that proxies `/mcp` to https://mcp.parallel.ai/v1beta/search_mcp and adds minimally needed additions to make it work with oauth.

MCP address: https://search-mcp.parallel.ai/mcp

[![Install Parallel Search MCP](https://img.shields.io/badge/Install_MCP-Parallel%20Search%20MCP-black?style=for-the-badge)](https://installthismcp.com/Parallel%20Search%20MCP?url=https%3A%2F%2Fsearch-mcp.parallel.ai%2Fmcp)

</details>
