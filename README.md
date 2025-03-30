# Personal Website

A modern, content-focused personal website built with Next.js and Keystatic CMS. This website serves as my digital garden where I share my writings, thoughts, and experiences.

## Features

- **Content Management**: Powered by Keystatic CMS with GitHub integration
- **Modern Tech Stack**:
  - Next.js 14 with App Router
  - TypeScript
  - Tailwind CSS with Typography plugin
  - Radix UI components
  - Shiki for code highlighting
- **Content Types**:
  - Writings (blog posts/articles)
  - Authors
  - Tags
- **UI/UX Features**:
  - Dark/Light mode support
  - Responsive design
  - Modern typography with Geist font
  - Beautiful code highlighting
  - Dynamic OG images

## Project Structure

```
src/
├── app/          # Next.js app router pages and layouts
├── components/   # Reusable UI components
├── content/      # Content managed by Keystatic
│   ├── authors/  # Author information
│   ├── tags/     # Content tags
│   └── writings/ # Blog posts and articles
├── lib/          # Utility functions and shared logic
└── assets/       # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   ```bash
   KEYSTATIC_GITHUB_CLIENT_ID=your_client_id
   KEYSTATIC_GITHUB_CLIENT_SECRET=your_client_secret
   KEYSTATIC_SECRET=your_secret
   APP_URL=http://localhost:3000
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Content Management

Content is managed through Keystatic CMS, which integrates with GitHub. The CMS supports:

- Rich text editing
- Image uploads
- Draft mode
- External URL redirects
- Custom layouts for content

## Deployment

The website is deployed on Vercel. Make sure to set up the required environment variables in your Vercel project settings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
