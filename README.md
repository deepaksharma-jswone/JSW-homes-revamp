# JSW Homes Revamp

Welcome to the **JSW Homes Revamp** repository! This project leverages the latest web technologies to deliver a high-performance, scalable, and visually appealing application. Built with **Next.js 15** and **Node.js 22.12.0**, this application is powered by **TypeScript**, **ShadCN**, and **Tailwind CSS**, and utilizes **Strapi** for its backend and API layer.

---

## 🚀 Features

### Frontend:
- **Next.js 15**: Cutting-edge version of Next.js for optimal performance and enhanced developer experience.
- **TypeScript**: Provides static typing for improved code quality and maintainability.
- **ShadCN**: Modern UI component library for building beautiful, accessible designs.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with custom styling.

### Backend:
- **Strapi**: A powerful, headless CMS used as the data source and API layer for this project.

### Other Highlights:
- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for optimal SEO and performance.
- **API Routes** for seamless integration with the backend.
- Fully responsive design optimized for all screen sizes.
- Accessible and lightweight UI components.
- Built-in **Internationalization (i18n)** support for multi-language capabilities.
- Extensive caching and performance optimizations.
- Adherence to **WCAG** standards for accessibility compliance.

---

## 🛠️ Tech Stack

| Technology       | Version      |
|------------------|--------------|
| Next.js          | 15.x         |
| Node.js          | 22.12.0      |
| TypeScript       | 5.x          |
| Tailwind CSS     | 3.x          |
| ShadCN           | Latest       |
| Strapi           | 5.x          |
| pnpm             | Latest       |

---

## 📂 Directory Structure

```
JSW-homes-revamp/src/
├── components/        # Reusable UI components
├── app/               # Application routes and views
├── ../public/         # Static assets
├── app/styles/        # Global and module-specific styles
├── lib/               # Utility functions and helpers
├── ../strapi/         # Backend and API setup (Need to integrate)
├── hooks/             # Custom React hooks
├── data/loaders.ts    # API calls and integrations
├── tsconfig.json      # TypeScript configuration
└── tailwind.config.js # Tailwind CSS configuration
```

---

## 💻 Getting Started

### Prerequisites:
- **Node.js 22.12.0** or later
- **pnpm** package manager

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/deepaksharma-jswone/JSW-homes-revamp.git
   cd JSW-homes-revamp
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the necessary environment variables for Strapi, Next.js, and other configurations.

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Access the application:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Scripts

| Command          | Description                             |
|------------------|-----------------------------------------|
| `pnpm dev`       | Starts the development server           |
| `pnpm build`     | Builds the application for production   |
| `pnpm start`     | Runs the production build               |
| `pnpm lint`      | Lints the codebase                      |
| `pnpm test`      | Runs the test suite                     |
| `pnpm format`    | Formats code with Prettier              |

---

## 🌐 Deployment

This application can be deployed to any platform that supports **Node.js**. Below are some recommendations:

### Deployment Platforms:
- **Vercel**: Optimized for Next.js applications with automatic builds and serverless capabilities.
- **AWS**: Utilize services like S3, CloudFront, and EC2 for scalable hosting.
- **Docker**: Containerize the application for consistent and portable deployments.

### Steps for Deployment:

1. Build the application:
   ```bash
   pnpm build
   ```

2. Export the environment variables needed for production in your hosting environment.
3. Deploy the `.next` folder and configure the backend Strapi instance for API integration.

---

## 📧 Contact

For any queries or suggestions, feel free to contact [Deepak Sharma](mailto:deepak.sharma2@jsw.in).

---

Happy coding! 🎉
