# Week 4: Bank Microservices Assignment

This project contains two independent RESTful microservices for a banking application.

## 1. Account Microservice
* **Port:** 8080
* **Endpoint:** `GET /accounts/{number}`
* **Test URL:** `http://localhost:8080/accounts/00987987973432`

### Sample Response:
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343.0
}