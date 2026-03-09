# Droplet Setup for Story Pug

## User

Create a dedicated `deploy` user:

```bash
adduser deploy
```

## Repo

As `deploy`, clone with sparse checkout so only `apps/story-pug` is synced:

```bash
git clone --no-checkout https://github.com/your-org/core.git ~/core
cd ~/core
git sparse-checkout init --cone
git sparse-checkout set apps/story-pug
git checkout main
```

> If story-pug ever depends on shared `packages/`, add them: `git sparse-checkout set apps/story-pug packages/some-package`

## OpenClaw

As `root`, install openclaw (the install script needs sudo to update the package index):

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Configure openclaw, then install the gateway as a systemd service:

```bash
openclaw gateway install
```

`gateway install` doesn't support a `--user` flag, so manually edit the generated unit file to run as `deploy`:

```bash
nano /etc/systemd/system/openclaw.service
# Add under [Service]:
#   User=deploy
```

Then reload and start:

```bash
systemctl daemon-reload
systemctl start openclaw
```

Point the workspace at the cloned repo in `openclaw.json`:

```json
"workspace": "/home/deploy/core/apps/story-pug/workspace"
```

## Sudo

Once openclaw is installed and the service is running, restrict `deploy` to only restarting the service:

```bash
echo "deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart openclaw" > /etc/sudoers.d/deploy-openclaw
```

## GitHub Secrets

Add these to the repo secrets:

| Secret | Value |
|---|---|
| `DROPLET_HOST` | Droplet IP or hostname |
| `DROPLET_USER` | `deploy` |
| `DROPLET_SSH_KEY` | Private SSH key for the `deploy` user |
