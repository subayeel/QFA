# Docker Setup for QFA Application

This guide will help you set up and run the QFA application with PostgreSQL database using Docker.

## Prerequisites

- Docker and Docker Compose installed on your system
- Node.js (for local development)

## Quick Start

### Option 1: Database Only (Recommended for Development)

If you want to run only the database in Docker and your Next.js app locally:

1. **Start the database:**

   ```bash
   docker-compose up -d postgres
   ```

2. **Set up your environment variables:**
   Copy `env.example` to `.env` and update the values:

   ```bash
   cp env.example .env
   ```

3. **Database URL for local development:**

   ```
   DATABASE_URL="postgresql://qfa_user:qfa_password@localhost:5432/qfa_db"
   ```

4. **Run database migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Start your Next.js application:**
   ```bash
   npm run dev
   ```

### Option 2: Full Application in Docker

To run both the database and the Next.js application in Docker:

1. **Start all services:**

   ```bash
   docker-compose -f docker-compose.full.yml up -d
   ```

2. **Run database migrations:**
   ```bash
   docker-compose -f docker-compose.full.yml exec app npx prisma migrate dev
   ```

## Database Configuration

### Database Credentials

- **Database Name:** `qfa_db`
- **Username:** `qfa_user`
- **Password:** `qfa_password`
- **Port:** `5432`

### Database URL

- **Local Development:** `postgresql://qfa_user:qfa_password@localhost:5432/qfa_db`
- **Docker Internal:** `postgresql://qfa_user:qfa_password@postgres:5432/qfa_db`

## Services

### PostgreSQL Database

- **Container:** `qfa-postgres`
- **Port:** `5432`
- **Data Persistence:** Yes (Docker volume)

### pgAdmin (Optional)

- **Container:** `qfa-pgadmin`
- **URL:** `http://localhost:8080`
- **Email:** `admin@qfa.com`
- **Password:** `admin123`

### Next.js Application (Full Docker setup)

- **Container:** `qfa-app`
- **URL:** `http://localhost:3000`

## Useful Commands

### Database Management

```bash
# Start database only
docker-compose up -d postgres

# Stop database
docker-compose down

# View database logs
docker-compose logs postgres

# Access database shell
docker-compose exec postgres psql -U qfa_user -d qfa_db
```

### Full Application Management

```bash
# Start all services
docker-compose -f docker-compose.full.yml up -d

# Stop all services
docker-compose -f docker-compose.full.yml down

# View all logs
docker-compose -f docker-compose.full.yml logs

# Rebuild application
docker-compose -f docker-compose.full.yml build app
```

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
```

## Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://qfa_user:qfa_password@localhost:5432/qfa_db"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Authentication Providers (configure as needed)
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""
# GITHUB_ID=""
# GITHUB_SECRET=""
```

## Troubleshooting

### Database Connection Issues

1. Ensure the database container is running: `docker-compose ps`
2. Check database logs: `docker-compose logs postgres`
3. Verify the DATABASE_URL in your `.env` file

### Port Conflicts

If you get port conflicts, you can modify the ports in `docker-compose.yml`:

```yaml
ports:
  - "5433:5432" # Change 5432 to 5433
```

### Data Persistence

Database data is stored in a Docker volume. To completely reset:

```bash
docker-compose down -v
docker-compose up -d postgres
```

## Security Notes

- Change default passwords in production
- Use environment variables for sensitive data
- Consider using Docker secrets for production deployments
- The current setup is for development purposes only
