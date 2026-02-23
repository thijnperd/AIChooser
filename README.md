<div align="center">

# 🤖 AI Chooser

### *Find Your Perfect AI Tool in Seconds*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![AI Chooser Banner](https://via.placeholder.com/1200x400/1e293b/ffffff?text=AI+Chooser+%7C+Interactive+Decision+Tree)

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🛠️ Installation](#installation) • [🤝 Contributing](#contributing)

</div>

---

## ✨ Overview

**AI Chooser** is an intelligent, interactive web application that guides users through a decision tree to find the perfect AI tool for their specific needs. Whether you're looking for conversational AI, image generation, video creation, or research assistance, AI Chooser helps you navigate the complex landscape of AI tools with ease.

### 🎯 Why AI Chooser?

- 🔍 **Smart Recommendations** - Get personalized AI tool suggestions based on your needs
- 📊 **Comprehensive Database** - Compare 10+ popular AI tools including ChatGPT, Claude, Midjourney, and more
- 🎨 **Beautiful UI** - Stunning gradient designs with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

---

## 🎥 Demo

<div align="center">

### Watch AI Chooser in Action

![Demo GIF](https://via.placeholder.com/800x450/334155/ffffff?text=Demo+Coming+Soon)

*Navigate through questions → Get recommendations → Compare features → Make informed decisions*

</div>

---

## 🚀 Features

### 🧭 Intelligent Decision Tree
Navigate through carefully crafted questions that narrow down your needs:
- What's your primary use case?
- Do you need real-time information?
- Are you looking for creative or analytical capabilities?
- Do you prefer free or premium tools?

### 🤖 Comprehensive AI Tool Database

**Conversational AI:**
- 💬 **ChatGPT** - OpenAI's flagship conversational AI
- 🧠 **Claude** - Anthropic's advanced analytical assistant
- ✨ **Kimi K2** - Multi-mode AI with specialized capabilities
- ⚡ **Grok** - Real-time AI with X integration
- 🔍 **Perplexity** - AI-powered search with citations
- 🌐 **Gemini Pro** - Google's multimodal AI

**Image Generation:**
- 🎨 **Midjourney** - Artistic image generation
- 📸 **Higgsfield/Nano Banana Pro** - Photorealistic outputs

**Video Generation:**
- 🎬 **Sora & Sora 2** - OpenAI's text-to-video AI
- 🎥 **Kling** - High-quality video creation

### 📊 Detailed Comparisons

For each AI tool, get insights into:
- ✅ **Pros & Cons** - Honest assessment of strengths and weaknesses
- 💰 **Pricing Plans** - Free tiers and premium options
- 🎯 **Use Cases** - Best applications for each tool
- 🔗 **Direct Links** - Quick access to each platform

### 🎨 Premium UI/UX

- **Animated Gradient Backgrounds** - Eye-catching visual effects
- **Smooth Transitions** - Polished animations between screens
- **Progress Tracking** - Visual feedback on decision progress
- **Keyboard Navigation** - Full keyboard support (ESC to restart)
- **Responsive Design** - Optimized for all screen sizes

---

## 🛠️ Technology Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19.2, TypeScript 5.9 |
| **Build Tool** | Vite 7.2 |
| **Styling** | Tailwind CSS 3.4, CSS Animations |
| **UI Components** | shadcn/ui, Radix UI |
| **Icons** | Lucide React |
| **State Management** | React Hooks |
| **Code Quality** | ESLint, TypeScript ESLint |

</div>

---

## 📦 Installation

### Prerequisites

```bash
node --version  # v18.0.0 or higher
npm --version   # v9.0.0 or higher
```

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-chooser.git

# Navigate to project directory
cd ai-chooser

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action! 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ai-chooser/
├── 📂 src/
│   ├── 📂 components/          # React components
│   │   ├── QuestionCard.tsx    # Question display component
│   │   ├── ResultCard.tsx      # AI tool result display
│   │   ├── ProgressBar.tsx     # Progress indicator
│   │   └── 📂 ui/              # shadcn/ui components
│   ├── 📂 data/
│   │   ├── aiTools.ts          # AI tool database
│   │   └── decisionTree.ts     # Question flow logic
│   ├── 📂 hooks/
│   │   └── use-mobile.ts       # Mobile detection hook
│   ├── 📂 lib/
│   │   └── utils.ts            # Utility functions
│   ├── 📂 types/
│   │   └── index.ts            # TypeScript definitions
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Component styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Application entry point
├── 📂 public/                  # Static assets
├── 📄 index.html               # HTML template
├── 📄 vite.config.ts           # Vite configuration
├── 📄 tailwind.config.js       # Tailwind configuration
├── 📄 tsconfig.json            # TypeScript configuration
└── 📄 package.json             # Project dependencies
```

---

## 🎮 Usage

### Basic Flow

1. **Start** - Click "Start" to begin the questionnaire
2. **Answer Questions** - Select options that match your needs
3. **Get Recommendation** - Receive a personalized AI tool suggestion
4. **Explore Details** - View pricing, features, and use cases
5. **Visit Tool** - Click the link to try the recommended AI tool

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `ESC` | Restart the questionnaire |
| `Click Options` | Navigate through questions |

---

## 🎨 Customization

### Adding New AI Tools

Edit `src/data/aiTools.ts`:

```typescript
export const aiTools: Record<string, AITool> = {
  'your-tool': {
    id: 'your-tool',
    name: 'Your AI Tool',
    description: 'Brief description',
    icon: 'IconName', // Lucide icon name
    color: 'from-blue-500 to-purple-600',
    pros: ['Pro 1', 'Pro 2'],
    cons: ['Con 1', 'Con 2'],
    freeUsage: 'Free tier details',
    useCases: ['Use case 1', 'Use case 2'],
    plans: [
      {
        name: 'Free',
        price: '$0',
        features: ['Feature 1', 'Feature 2']
      }
    ],
    website: 'https://example.com'
  }
};
```

### Modifying the Decision Tree

Edit `src/data/decisionTree.ts` to customize questions and logic.

### Styling

- **Colors**: Update `tailwind.config.js` for theme customization
- **Animations**: Modify `src/App.css` for custom animations
- **Components**: All UI components are in `src/components/ui/`

---

## 🧪 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas

- 🆕 Add more AI tools to the database
- 🎯 Improve the decision tree logic
- 🌍 Add internationalization (i18n)
- 📊 Add analytics tracking
- 🎨 Create new themes
- ♿ Improve accessibility features

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [Radix UI](https://www.radix-ui.com/) - Accessible Components

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ and AI

[⬆ Back to Top](#-ai-chooser)

</div>
