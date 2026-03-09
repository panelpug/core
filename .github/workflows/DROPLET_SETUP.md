# Droplet Setup for Story Pug

## User

Create a dedicated `deploy` user:

```bash
adduser deploy
```

Grant passwordless sudo for the openclaw service restart only:

```bash
echo "deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart openclaw" > /etc/sudoers.d/deploy-openclaw
```

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

Install openclaw, configure it, then install the gateway as a systemd service:

```bash
openclaw gateway install
```

Point the workspace at the cloned repo in `openclaw.json`:

```json
"workspace": "/home/deploy/core/apps/story-pug/workspace"
```

## GitHub Secrets

Add these to the repo secrets:

| Secret | Value |
|---|---|
| `DROPLET_HOST` | Droplet IP or hostname |
| `DROPLET_USER` | `deploy` |
| `DROPLET_SSH_KEY` | Private SSH key for the `deploy` user |
