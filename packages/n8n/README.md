# @outseta/n8n-nodes-outseta

[n8n](https://n8n.io) community node for the [Outseta](https://www.outseta.com) REST API. Manage CRM accounts, people, billing plans, subscriptions, and email lists directly from your n8n workflows.

## Install

In your n8n instance, go to **Settings > Community Nodes** and install:

```
@outseta/n8n-nodes-outseta
```

Or install manually:

```bash
cd ~/.n8n/nodes
npm install @outseta/n8n-nodes-outseta
```

## Credentials

The node requires an **Outseta API** credential with:

| Field | Description |
|-------|-------------|
| Subdomain | Your Outseta subdomain (e.g. `mycompany` from `mycompany.outseta.com`) |
| API Key | Your Outseta API key |
| API Secret | Your Outseta API secret |

You can find your API credentials in the Outseta dashboard under **Settings > API**.

## Resources & Operations

| Resource | Operations |
|----------|------------|
| **Account** | Get Many, Register, Add Person |
| **Person** | Get Many, Create |
| **Plan** | Get Many, Create |
| **Plan Family** | Get Many, Create |
| **Subscription** | Preview Change, Change |
| **Email List** | Get Many, Create, Get Subscribers, Subscribe Person |

All **Get Many** operations support filtering, pagination, field selection, and sorting.

## License

[MIT](LICENSE)
