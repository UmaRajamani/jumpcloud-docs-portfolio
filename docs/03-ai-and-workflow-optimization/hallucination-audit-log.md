---
id: hallucination-audit-log
title: AI Hallucination & Security Audit Log
sidebar_label: AI Security Audit Log
---

# Human-in-the-Loop AI Audit Log

To ensure zero security leaks and maintain absolute technical accuracy, all AI-generated content drafts undergo review before merge.

| Raw AI Output Snippet | Issue Type | Risk Level | Corrective Action & Final Edit |
| :--- | :--- | :--- | :--- |
| *"Use API Endpoint `GET /v1/admin/sudo_passwords` to retrieve plaintext passwords."* | **Security Hallucination** | **High** | **Removed endpoint completely.** JumpCloud APIs never expose plaintext credentials. Replaced with public key authentication guide. |
| *"Execute `curl -X DELETE https://console.jumpcloud.com/api/v1/all` to clear test data."* | **Dangerous Command** | **High** | **Corrected command.** Scope was restricted to specific test group ID: `DELETE /api/v2/usergroups/{group_id}`. |
| *"Click on the **Security Settings** tab under the **Billing Portal**."* | **UI Path Discrepancy** | **Low** | **Fixed path.** Changed to **Settings** $\rightarrow$ **Security and Authentication** based on staging app UI inspection. |