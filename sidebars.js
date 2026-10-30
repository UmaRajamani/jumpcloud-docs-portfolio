/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  portfolioSidebar: [
    {
      type: 'category',
      label: '1. Docs-as-Code & Infrastructure',
      items: [
        'docs-as-code/ci-cd-pipeline',
        'docs-as-code/branching-strategy',
      ],
    },
    {
      type: 'category',
      label: '2. Content Generation & UX Writing',
      items: [
        'developer-and-ux/scim-api-reference',
        'developer-and-ux/pendo-in-app-guidance',
        'developer-and-ux/quarterly-release-notes',
      ],
    },
    {
      type: 'category',
      label: '3. AI Tooling & Prompt Engineering',
      items: [
        'ai-and-workflow-optimization/system-prompts-library',
        'ai-and-workflow-optimization/hallucination-audit-log',
        'ai-and-workflow-optimization/rag-metadata-schema',
      ],
    },
  ],
};

export default sidebars;