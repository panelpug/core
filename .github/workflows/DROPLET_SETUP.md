# Droplet Setup for Story Pug

Everything runs as `root` on a dedicated droplet.

## Repo

Clone with sparse checkout so only `apps/story-pug` is synced:

```bash
git clone --no-checkout https://github.com/your-org/core.git ~/core
cd ~/core
git sparse-checkout init --cone
git sparse-checkout set apps/story-pug
git checkout main
```

> If story-pug ever depends on shared `packages/`, add them: `git sparse-checkout set apps/story-pug packages/some-package`

## OpenClaw

Install openclaw:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Configure openclaw, then install the gateway as a systemd service:

```bash
openclaw gateway install
systemctl start openclaw
```

Point the workspace at the cloned repo in `openclaw.json`:

```json
"workspace": "/root/core/apps/story-pug/workspace"
```

## GitHub Secrets

Add these to the repo secrets:

| Secret | Value |
|---|---|
| `DROPLET_HOST` | Droplet IP or hostname |
| `DROPLET_USER` | `root` |
| `DROPLET_SSH_KEY` | Private SSH key for root |
