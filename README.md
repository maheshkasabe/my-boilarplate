# DiligentInsight Landing Page

A modern, responsive landing page built with Next.js, TailwindCSS, and ShadCN UI.

## Features

- 🚀 Next.js 14 with App Router
- 💅 TailwindCSS for utility-first styling
- 🧩 ShadCN UI components based on Radix UI primitives
- ✨ Scroll animations and transitions
- 📱 Fully responsive for all device sizes
- 🎨 Beautiful gradients and modern design
- 🔍 SEO optimized
- 📧 Functional contact and request access forms

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/diligent-insight-landing.git
cd diligent-insight-landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Email Configuration

The contact and request access forms require email credentials to function properly. Follow these steps:

1. Create a `.env.local` file in the root directory
2. Add the following variables:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. For detailed setup instructions, see [ENV_SETUP.md](ENV_SETUP.md)

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
# Build the application
npm run build
# or
yarn build
# or
pnpm build

# Start production server
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

- `app/`: All pages using Next.js App Router
- `components/`: Reusable UI components
- `components/ui/`: ShadCN UI components
- `lib/`: Helper functions and utilities
- `public/`: Static assets
- `styles/`: Global styles
- `app/api/`: API routes for form handling

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemailer](https://nodemailer.com/) for email functionality

## License

MIT
# my-boilarplate
