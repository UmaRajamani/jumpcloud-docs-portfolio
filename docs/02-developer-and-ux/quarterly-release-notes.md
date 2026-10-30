---
id: quarterly-release-notes
title: Quarterly Release Notes Format
sidebar_label: Release Notes
---

# Q4 Product Release Notes

A structured overview of major feature enhancements, API updates, and security patches deployed across JumpCloud services.

## New Features

* **Passwordless WebAuthn Authentication:** Admin console logins now support native biometric and FIDO2 hardware tokens via JumpCloud Go.
* **SCIM 2.0 Patch Group Allocations:** Admins can now bulk-update dynamic user groups via the `/v2/usergroups` endpoint.

## Enhancements & Performance Updates

* **Directory Sync Latency:** Reduced active directory synchronization cycle times from 15 minutes to under 2 minutes.
* **API Rate Limiting Alerts:** Added real-time header responses (`X-RateLimit-Remaining`) for high-volume tenant automation scripts.

## Action Required

> **Important:** Legacy v1 directory sync agents will reach End-of-Life (EOL) on December 31. Upgrade all local host agents to v5.12+ to avoid connectivity interruptions.
