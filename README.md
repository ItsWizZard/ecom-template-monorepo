# 🛍️ E-Commerce Template Monorepo

This is a modern, modular monorepo e-commerce platform built with Nuxt 4 and Nitro, featuring a fully typed DX powered by TypeScript.

## 📦 Monorepo Structure

```text
ecom-template/
├── apps/
│   ├── server/         # Standalone Nitro backend (API, Auth, etc.)
│   ├── web/            # Nuxt 4 SSR / Hybrid web frontend
│   └── native/         # (Planned) Nuxt 4 SPA + Capacitor mobile app
│
├── packages/
│   └── types/          # Global types (shared across all apps)
│
├── .vscode/            # Editor settings and recommended extensions
├── pnpm-workspace.yaml
├── LICENSE
└── README.md
```

## ⚙️ Tech Stack

- **Nuxt 4** (SSR / Hybrid web frontend)
- **Nitro** (standalone backend)
- **TypeScript** (fully typed monorepo)
- **pnpm** (fast package manager with monorepo support)

> 📱 **Planned**: Native mobile app powered by **Nuxt 4 + Capacitor**

## 📋 Requirements

### Before starting development, make sure you have the following installed:

- Node.js >=22.17.1 (recommended latest LTS version)
- pnpm >=10.x

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start type generation
pnpm dev:types

# Start dev backend
pnpm dev:server

# Start dev web app
pnpm dev:web
```

## 📜 License

[MIT License](./LICENSE) © 2025 [ItsWizZard](https://github.com/ItsWizZard)
