import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="JumpCloud Technical Writer Portfolio"
      description="Docs-as-Code, Developer Docs & AI Workflow Optimization">
      <main style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          JumpCloud Technical Writer Portfolio
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          Demonstrating Docs-as-Code Architecture, SCIM/API Developer Content, In-App Guidance, and Prompt Engineering Workflows.
        </p>
        <div>
          <Link
            className="button button--primary button--lg"
            to="/docs/docs-as-code/ci-cd-pipeline">
            Explore Portfolio Docs →
          </Link>
        </div>
      </main>
    </Layout>
  );
}