# Afripay Frontend Assessment

A Frontend Engineer assessment for AfriPay.

## Project Setup

The project follows a modular structure with clear separation of concerns:

```
afripay-assessment/
├── public/             # Static assets
├── app/                # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (dashboard)/    # Dashboard routes
│   └── (public)/       # Public routes
├── components/         # Reusable UI components
├── constants/          # Constant variables
├── utils/              # Folder for helper functions
├── lib/                # Utility functions and libraries
├── hooks/              # Custom React hooks
├── context/            # Minimal global state
└── next.config.ts      # Next.js configuration
```

Zustand was used along with localStorage as a way to easily manage data across different components and also persist and retrieve data from `localStorage`.

## Component Structure

Components are built with the [ATOMIC design system](https://atomicdesign.bradfrost.com/chapter-2/) in mind to make them reusable across the entire application. You can find all the components within the `/components` folder at the root of the project. The base components are created within `/components/ui` folder. The components used for the home page are located within `/components/home`. Other major components live directly within the components folder.

## Design Decisions

Without having a design to work with, i decided to opt for a traditional monochrome look and feel. I also grabbed the Afripay logo from the internet to make the dashboard standout. When you open up the page, you see 3 major parts - sidebar, header and home page. The design decisions i made for the homepage were minimalistic but intuitive. The cards at the top clearly indicate what they represent.

The table at the bottom shows the transactions with `credit` and `debit` rightly in their accurate color codes. Exporting as CSV works smoothly and doesn't work if there's no data present. Adding a new transaction is seamless. Just fill the form and hit the submit button, the system automatically generates id and date for that transaction.

Lastly, the entire app is responsive across all screen sizes.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key Features

- **Next.js App Router**: Utilizing the latest Next.js features
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS library
- **Zustand**: Lightweight state management library
- **Motion**: Animation library

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
