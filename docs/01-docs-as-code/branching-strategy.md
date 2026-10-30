---
id: branching-strategy
title: Multi-Version & Branching Strategy
sidebar_label: Branching Strategy
---

# Multi-Version & Branching Strategy

To manage 15–20 rolling feature updates per quarter without causing code regressions or publishing unreleased features, JumpCloud uses a structured Git branching model.

## Branch Workflow Topology

```text
                            [feature/scim-v2-update] ──┐ (PR & Preview)
                                                       │
[main] ────────────────────────────────────────────────┴─► [v2.4 Release Tag]
  │
  ├─► [release/v2.3-LTS] (Hotfixes only)
  └─► [staging/feature-flags] (Unreleased UI flows behind flags)