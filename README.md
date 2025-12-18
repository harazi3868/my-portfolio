# Abdirahim Ibrahim - Personal Portfolio

A modern, responsive, and high-performance personal portfolio website built with **Next.js** and **Tailwind CSS**. This project showcases professional experience, technical skills, projects, and includes a fully functional contact form.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Backend Logic:** Next.js API Routes (Serverless Functions)
- **Email Service:** [Nodemailer](https://nodemailer.com/) (SMTP)
- **Deployment:** Vercel (Recommended)

## 📂 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Dynamic Content:** Projects and experience data are separated for easy updates.
- **Contact Form:** Working server-side email sending capabilities.
- **Smooth Animations:** Interactive UI elements using Framer Motion.
- **Modern UI:** Glassmorphism effects, gradients, and clean typography.

---

## 🛠️ Getting Started

### 1. Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18.x or higher recommended)
- npm or yarn

### 2. Installation

Clone the repository (or extract the downloaded files) and install dependencies:

```bash
# Install dependencies
npm install
# or
yarn install
```

### 3. Environment Configuration (Crucial for Contact Form)

To make the contact form work, you need to set up environment variables.

1. Create a file named `.env.local` in the root directory of your project.
2. Add the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

**⚠️ Important for Gmail Users:**
Do **not** use your standard login password for `EMAIL_PASS`. You must generate an **App Password**:
1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Enable **2-Step Verification**.
3. Search for "App Passwords".
4. Create a new app password (name it "Portfolio") and paste the 16-character code into your `.env.local` file.

### 4. Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Project Structure

```
├── api/                # Backend API routes
│   └── contact.js      # Email sending logic
├── components/         # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── ...
├── data/               # Static data files
│   ├── constants.tsx   # Personal info, navigation, content
│   └── types.ts        # TypeScript interfaces
├── pages/              # Next.js pages
│   └── index.js        # Main entry point
├── public/             # Static assets (images, icons)
└── styles/             # Global styles (Tailwind directives)
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Sign up/Log in to Vercel.
3. Import your repository.
4. **Important:** In the Vercel Dashboard "Environment Variables" section, add your `EMAIL_USER` and `EMAIL_PASS` (the same values from your local setup).
5. Click **Deploy**.

## 🎨 Customization

To personalize this portfolio:
1. Open `data/constants.tsx`.
2. Update the `PERSONAL_INFO`, `PROJECTS`, `EXPERIENCE`, and `SKILL_CATEGORIES` objects.
3. Replace images in the `public/images/` folder (ensure filenames match your code).

## 📄 License

This project is open source and available for personal use and modification.
