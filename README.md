<<<<<<< HEAD
<div class="flex flex-col itemscenter">
<img src="public/logo.png" alt="Workout.cool Logo" width="120" height="120">
<h1>LeanX</h1>
<h3><em>Modern fitness coaching platform with comprehensive exercise database</em></h3>
<p>
## Team Members
- Arpita N Sheelvanth – Full Stack Development
- <Teammate Shravani> – UI / Backend / Documentation


## About

A comprehensive fitness coaching platform that allows create workout plans for you, track progress, and access a vast exercise database with
detailed instructions and video demonstrations.

## 🎯 Project Origin & Motivation

This project is a final year project

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v8+)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Snouzy/workout-cool.git
   cd workout-cool
   ```

2. **Choose your installation method:**

<details>
<summary><b>🐳 With Docker</b></summary>

### Docker Installation

1. **Copy environment variables**

   ```bash
   cp .env.example .env
   ```

2. **Start everything for development:**

   ```sh
   make dev
   ```

   - This will start the database in Docker, run migrations, seed the DB, and start the Next.js dev server.
   - To stop services run `make down`

3. **Open your browser** Navigate to [http://localhost:3000](http://localhost:3000)

</details>

<details>
<summary><b>💻 Without Docker</b></summary>

### Manual Installation

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Copy environment variables**

   ```bash
   cp .env.example .env
   ```

3. **Set up PostgreSQL database**

   - If you don't already have it, install PostgreSQL locally
   - Create a database named `workout_cool` : `createdb -h localhost -p 5432 -U postgres workout_cool`

4. **Run database migrations**

   ```bash
   npx prisma migrate dev
   ```

5. **Seed the database (optional)**

See the - [Exercise database import section](#exercise-database-import)

6. **Start the development server**

   ```bash
   pnpm dev
   ```

7. **Open your browser** Navigate to [http://localhost:3000](http://localhost:3000)

</details>

## Exercise Database Import

The project includes a comprehensive exercise database. To import a sample of exercises:

### Prerequisites for Import

1. **Prepare your CSV file**

Your CSV should have these columns:

```
id,name,name_en,description,description_en,full_video_url,full_video_image_url,introduction,introduction_en,slug,slug_en,attribute_name,attribute_value
```

You can use the provided example.

### Import Commands

```bash
# Import exercises from a CSV file
pnpm run import:exercises-full /path/to/your/exercises.csv

# Example with the provided sample data
pnpm run import:exercises-full ./data/sample-exercises.csv
```

### CSV Format Example

```csv
id,name,name_en,description,description_en,full_video_url,full_video_image_url,introduction,introduction_en,slug,slug_en,attribute_name,attribute_value
157,"Fentes arrières à la barre","Barbell Reverse Lunges","<p>Stand upright...</p>","<p>Stand upright...</p>",https://youtube.com/...,https://img.youtube.com/...,slug-fr,slug-en,TYPE,STRENGTH
157,"Fentes arrières à la barre","Barbell Reverse Lunges","<p>Stand upright...</p>","<p>Stand upright...</p>",https://youtube.com/...,https://img.youtube.com/...,slug-fr,slug-en,PRIMARY_MUSCLE,QUADRICEPS
```

Want unlimited exercise for local development ?

Just ask chatGPT with the prompt from `./scripts/import-exercises-with-attributes.prompt.md`

## Project Architecture

This project follows **Feature-Sliced Design (FSD)** principles with Next.js App Router:

```
src/
├── app/ # Next.js pages, routes and layouts
├── processes/ # Business flows (multi-feature)
├── widgets/ # Composable UI with logic (Sidebar, Header)
├── features/ # Business units (auth, exercise-management)
├── entities/ # Domain entities (user, exercise, workout)
├── shared/ # Shared code (UI, lib, config, types)
└── styles/ # Global CSS, themes
```

### Architecture Principles

- **Feature-driven**: Each feature is independent and reusable
- **Clear domain isolation**: `shared` → `entities` → `features` → `widgets` → `app`
- **Consistency**: Between business logic, UI, and data layers

### Example Feature Structure

```
features/
└── exercise-management/
├── ui/ # UI components (ExerciseForm, ExerciseCard)
├── model/ # Hooks, state management (useExercises)
├── lib/ # Utilities (exercise-helpers)
└── api/ # Server actions or API calls
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Create an issue** for the feature/bug you want to work on. Say that you will work on it (or no)
2. Fork the repository
3. Create your feature|fix|chore|refactor branch (`git checkout -b feature/amazing-feature`)
4. Make your changes following our [code standards](#code-style)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request (one issue = one PR)

**📋 For complete contribution guidelines, see our [Contributing Guide](CONTRIBUTING.md)**

### Code Style

- Follow TypeScript best practices
- Use Feature-Sliced Design architecture
- Write meaningful commit messages




To seed the database with the sample exercises, set the `SEED_SAMPLE_DATA` env variable to `true`.

### Using Docker

```bash
# Build the Docker image
docker build -t yourusername/workout-cool .

# Run the container
docker run -p 3000:3000 --env-file .env.production yourusername/workout-cool
```

### Using Docker Compose

#### DATABASE_URL

Update the `host` to point to the `postgres` service instead of `localhost`
`DATABASE_URL=postgresql://username:password@postgres:5432/workout_cool`

```bash
docker compose up -d
```

### Manual Deployment

```bash
# Build the application
pnpm build

# Run database migrations
export DATABASE_URL="your-production-db-url"
npx prisma migrate deploy

# Start the production server
pnpm start
```

