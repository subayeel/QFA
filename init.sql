-- Initialize the database with proper extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create the database if it doesn't exist (this will be handled by Docker environment)
-- The database 'qfa_db' will be created automatically by the POSTGRES_DB environment variable
