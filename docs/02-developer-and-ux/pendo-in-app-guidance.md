```markdown
---
id: pendo-in-app-guidance
title: Pendo In-App Onboarding & UX Guide Spec
sidebar_label: Pendo In-App Guidance
---

# Pendo In-App Onboarding Guide Specification

This specification governs the design, microcopy, and analytics tracking for passwordless authentication onboarding inside the JumpCloud Admin Portal.

## Modal UI Microcopy

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [Modal Step 1 of 3]                                               [X]  │
│                                                                        │
│ Step-Up Security: Enable Passwordless Auth                             │
│                                                                        │
│ Secure your organization by requiring JumpCloud Go hardware keys or    │
│ biometrics for all admin logins. Setup takes under 2 minutes.         │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ (i) Tooltip: Ensure WebAuthn features are enabled in browser.      │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ [ Remind Me Later ]                             [ Begin Configuration ]│
└────────────────────────────────────────────────────────────────────────┘
```

## Pendo JSON Implementation Guide

```json
{
  "guide_id": "pendo-guide-passwordless-v1",
  "target_element": "button#mfa-settings-banner",
  "trigger_condition": "admin_role == 'super_admin' AND passwordless_enabled == false",
  "step_1": {
    "title": "Step-Up Security: Enable Passwordless Auth",
    "body": "Secure your organization by requiring JumpCloud Go hardware keys or biometrics for all admin logins. Setup takes under 2 minutes.",
    "primary_button": {
      "label": "Begin Configuration",
      "action": "advance_to_step_2"
    },
    "secondary_button": {
      "label": "Remind Me Later",
      "action": "snooze_guide_7_days"
    },
    "analytics_tag": "click_passwordless_onboarding_start"
  }
}
```
```

---