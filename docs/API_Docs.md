# HRVRE API Documentation

This document provides a detailed overview of the API endpoints for the Hyper-Realistic Virtual Reality Engine (HRVRE) project.

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:3000/api
```

## Endpoints

### User

#### Register a new user

- **URL:** `/user/register`
- **Method:** `POST`
- **Data Params:** `{ "username": "[string]", "password": "[string]" }`
- **Success Response:** `{ "status": "success", "data": { "user": [object] } }`
- **Error Response:** `{ "status": "error", "message": "[string]" }`

#### Login a user

- **URL:** `/user/login`
- **Method:** `POST`
- **Data Params:** `{ "username": "[string]", "password": "[string]" }`
- **Success Response:** `{ "status": "success", "data": { "token": "[string]" } }`
- **Error Response:** `{ "status": "error", "message": "[string]" }`

### Environment

#### Get environment details

- **URL:** `/environment`
- **Method:** `GET`
- **Headers:** `{ "x-auth-token": "[string]" }`
- **Success Response:** `{ "status": "success", "data": { "environment": [object] } }`
- **Error Response:** `{ "status": "error", "message": "[string]" }`

#### Update environment details

- **URL:** `/environment`
- **Method:** `PUT`
- **Headers:** `{ "x-auth-token": "[string]" }`
- **Data Params:** `{ "environment": [object] }`
- **Success Response:** `{ "status": "success", "data": { "environment": [object] } }`
- **Error Response:** `{ "status": "error", "message": "[string]" }`

## Error Handling

All API routes use a custom error handling middleware. If an error is thrown, the API will respond with a JSON object in the following format:

```
{
    "status": "error",
    "message": "[error message]"
}
```

## Authentication

All protected routes require a valid JWT in the `x-auth-token` header. The JWT can be obtained by successfully logging in.

