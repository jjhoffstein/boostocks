# BooStocks - Investing for Young Adults

BooStocks is a modern web platform designed to make investing accessible, educational, and engaging for young adults with parental guidance. The platform aims to teach financial literacy and investing skills in a safe, controlled environment.

## Features

- Parent-approved investing for young adults (13+)
- Interactive learning modules about financial markets
- Virtual portfolios to practice investing skills
- Real investing with parental oversight and approval
- Gamified experience with achievements and milestones
- Community features for sharing insights and learning together

## Tech Stack

- Next.js 14+ (React framework)
- TypeScript
- Tailwind CSS for styling
- Responsive design for all devices

## Development

### Requirements

- Node.js version 18.18.0 or newer

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/boostocks.git
cd boostocks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Waitlist Backend

The project includes a serverless backend for the waitlist functionality built with Cloudflare Workers and D1 database.

### Setup Cloudflare Worker & D1 Database

1. Install Wrangler CLI (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Create a D1 database:
```bash
wrangler d1 create boostocks_waitlist
```

4. Update the `wrangler.toml` file with your database ID from the previous command.

5. Apply database migrations:
```bash
wrangler d1 execute boostocks_waitlist --file .wrangler/d1/migrations/0000_initial_schema.sql
```

### Local Development

Run the Cloudflare Worker locally:
```bash
npm run worker:dev
```

### Deployment

To deploy the Cloudflare Worker:
```bash
wrangler deploy
```

## Deployment to Cloudflare Pages

This application is configured for deployment with Cloudflare Pages.

1. Connect your GitHub repository to Cloudflare Pages
2. Use the following settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 18.18.0 or newer

## Project Structure

- `app/`: Main application code (Next.js)
  - `components/`: React components
  - `globals.css`: Global CSS styles
- `functions/`: Cloudflare Functions
  - `api/`: API endpoints
- `.wrangler/`: Cloudflare configuration
  - `d1/migrations/`: Database migrations

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries, please reach out to us at info@boostocks.com

---

Built with 💙 for the next generation of investors. 