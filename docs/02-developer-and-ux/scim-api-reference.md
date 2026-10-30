---
id: scim-api-reference
title: SCIM 2.0 Directory User Provisioning API
sidebar_label: SCIM API Reference
---

# Provision Directory User (`POST /v2/users`)

Provisions a new managed user inside the JumpCloud directory, assigning default security groups and authentication parameters.

### Request Headers
| Header | Type | Value |
| :--- | :--- | :--- |
| `Authorization` | `string` | `Bearer <YOUR_JUMPCLOUD_API_KEY>` |
| `Content-Type` | `string` | `application/json` |

### Sample cURL Request

```bash
curl -X POST "[https://console.jumpcloud.com/api/v2/users](https://console.jumpcloud.com/api/v2/users)" \
  -H "Authorization: Bearer scim_api_key_8f91a2bc34e56789" \
  -H "Content-Type: application/json" \
  -d '{
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
    "userName": "alex.rivera@company.com",
    "name": { "givenName": "Alex", "familyName": "Rivera" },
    "emails": [{"value": "alex.rivera@company.com", "type": "work", "primary": true}],
    "active": true
  }'
```

### Expected Response (`201 Created`)

```json
{
  "id": "650c1f2e8f1b2c0001a2b3c4",
  "userName": "alex.rivera@company.com",
  "active": true,
  "meta": {
    "resourceType": "User",
    "created": "2026-10-30T10:00:00Z"
  }
}
```