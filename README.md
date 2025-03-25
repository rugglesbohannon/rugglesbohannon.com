# Ruggles Bohannon Personal Website

A personal landing page for Ruggles Bohannon built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Easy to customize information
- Contact information section
- Social media links (LinkedIn, GitHub, Art portfolio)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or newer

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rugglesbohannon.git
cd rugglesbohannon
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

## Customization

### Update Personal Information

Edit the following files to customize your information:

- `src/app/page.tsx`: Update the main content, including your name, bio, and social media links
- `src/components/ContactForm.tsx`: Update your contact email

### Update Profile Image

Replace the placeholder image at `public/profile-placeholder.jpg` with your own image.

## Deployment

### Connecting to Your Domain (rugglesbohannon.com)

1. Build your site for production:
```bash
npm run build
```

2. Choose a hosting provider (Vercel, Netlify, etc.)

3. Deploy your site to the hosting provider

4. Configure your GoDaddy domain to point to your hosting provider:
   - Go to your GoDaddy account
   - Navigate to your domain (rugglesbohannon.com)
   - Update the DNS settings to point to your hosting provider

### Recommended Hosting Providers

- **Vercel**: Optimal for Next.js projects
- **Netlify**: Easy to use with continuous deployment
- **GitHub Pages**: Free hosting for static sites

## License

This project is licensed under the MIT License - see the LICENSE file for details. 