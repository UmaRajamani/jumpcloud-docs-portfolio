---
id: ci-cd-pipeline
title: GitHub-Native CI/CD Pipeline
sidebar_label: CI/CD Pipeline
---

# GitHub-Native CI/CD Documentation Pipeline

This document outlines the automated publishing and quality assurance workflow built for continuous deployment of documentation across JumpCloud product releases.

## Repository Architecture

```text
jumpcloud-docs/
├── .github/
│   └── workflows/
│       └── deploy-docs.yml
├── docs/
│   ├── api/
│   │   └── v2/
│   │       └── scim-provisioning.md
│   └── admin-guides/
│       └── mfa-policy.md
├── static/
│   └── img/
├── docusaurus.config.js
└── package.json
```

## GitHub Actions Configuration (`.github/workflows/deploy-docs.yml`)

```yaml
name: Docs Continuous Deployment Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Markdown Linting & Quality Checks
        run: npm run lint:md

      - name: Validate Broken Links
        run: npm run test:links

      - name: Validate OpenAPI Specs
        run: npx @redocly/cli lint docs/api/v2/openapi.yaml

      - name: Build Static Site
        run: npm run build

      - name: Deploy Production (Main branch)
        if: github.ref == 'refs/heads/main'
        uses: ntwb/netlify-action@v2.2.1
        with:
          publish-dir: './build'
          production-deploy: true
          github-token: ${{ secrets.GITHUB_TOKEN }}
```