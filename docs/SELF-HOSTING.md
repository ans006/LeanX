🚀 Self-Hosting LeanX

Deploy LeanX on your own server using Docker.
This guide provides simple, step-by-step instructions for deploying the application for academic evaluation, testing, or demonstration purposes.

📑 Table of Contents

Prerequisites

Quick Start

Common Setup Steps

Option 1: Docker Compose (All-in-One)

Option 2: Docker Only (External Database)

Management Commands

Domain Mapping & HTTPS

Troubleshooting

📋 Prerequisites

Before deploying LeanX, ensure your system meets the following requirements:

Operating System: Linux server or VPS (Ubuntu 20.04+ recommended)

Docker: Installed and running

Docker Compose

Git

Basic CLI Knowledge

🚀 Quick Start
Common Setup Steps

These steps are required for both deployment options.

1. Connect to Your Server
ssh your-user@your-server-ip

2. Clone the Repository
mkdir -p ~/apps
cd ~/apps
git clone <your-repository-url>
cd leanx

3. Configure Environment Variables
cp .env.example .env
nano .env


Essential Variables

# Application Configuration
BETTER_AUTH_URL=http://your-server-ip:3000
BETTER_AUTH_SECRET=your-secret-key

# Optional
SEED_SAMPLE_DATA=true

🐳 Option 1: Docker Compose (All-in-One)

This option runs LeanX with a PostgreSQL database using Docker Compose.

Additional Environment Variables
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=leanx
DB_HOST=postgres
DB_PORT=5432

DATABASE_URL=postgresql://postgres:postgres@postgres:5432/leanx

Deploy
docker compose up -d

Access
http://your-server-ip:3000

🐳 Option 2: Docker Only (External Database)

Use this option if you already have a PostgreSQL database.

Environment Variable
DATABASE_URL=postgresql://username:password@your-db-host:5432/leanx

Deploy
docker build -t leanx .
docker run -d --name leanx -p 3000:3000 --env-file .env leanx

🌐 Domain Mapping & HTTPS

(Optional, for demo or production setups)

Using Caddy (Recommended)
sudo apt install caddy


Edit config:

sudo nano /etc/caddy/Caddyfile

yourdomain.com {
  reverse_proxy localhost:3000
}


Reload:

sudo systemctl reload caddy


Caddy automatically handles SSL certificates.

🛠️ Management Commands
Docker Compose
docker compose up -d
docker compose down
docker compose logs -f

Docker
docker start leanx
docker stop leanx
docker logs -f leanx

🐛 Troubleshooting
App Not Starting
docker logs leanx

Database Connection Issues
docker compose exec postgres psql -U postgres -d leanx -c "SELECT 1;"

Port Conflict
sudo lsof -i :3000


Change port mapping if needed.

📌 Notes

LeanX is developed as a final-year engineering project

This guide is intended for academic demonstration and evaluation

Production hardening (monitoring, backups, scaling) is out of scope

Last updated: December 2025