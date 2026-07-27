🚀 Microservices Details & Endpoints
1. Account Microservice
Service Name: account-service

Default Port: 8080

Endpoint: GET /accounts/{number}

Test URL: http://localhost:8080/accounts/00987987973432

Sample JSON Response
JSON
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343.0
}
2. Loan Microservice
Service Name: loan-service

Default Port: 8081 (Configured via server.port=8081 in application.properties to avoid port conflict with Account Service)

Endpoint: GET /loans/{number}

Test URL: http://localhost:8081/loans/H00987987972342

Sample JSON Response
JSON
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000.0,
  "emi": 3258.0,
  "tenure": 18
}
⚙️ How to Build and Run
Step 1: Build Projects
Open terminal in each service folder and execute Maven build:

Bash
# Build Account Microservice
cd account
mvn clean package

# Build Loan Microservice
cd ../loan
mvn clean package
Step 2: Run Microservices
You can run both microservices simultaneously from your IDE (Eclipse/IntelliJ) or via command line:

Bash
# Terminal 1 - Start Account Service (8080)
cd account
mvn spring-boot:run

# Terminal 2 - Start Loan Service (8081)
cd loan
mvn spring-boot:run
🧪 Testing the APIs
Once both applications are running, open your browser, Postman, or terminal to verify:

Account Service:

Bash
curl http://localhost:8080/accounts/00987987973432
Loan Service:

Bash
curl http://localhost:8081/loans/H00987987972342