## Running with Tilt

Tilt provides a fast, modern local development experience. It watches your code and automatically updates your running services.

### Prerequisites
- Docker running
- [Tilt installed](https://docs.tilt.dev/install.html)

### Usage
1. Start Tilt:
   ```bash
   tilt up
   ```
2. Open the Tilt web UI (usually at http://localhost:10350) to monitor and manage your services.
3. Tilt will use your `docker-compose.yml` to start all services and show logs/status for each.

You can stop Tilt with `tilt down`.
# project001
# Flexible Service Bidder - Production-Ready MVP

## Overview
A real-time service aggregator platform with customer-provider negotiation, built with React (frontend), AWS Lambda (Node.js/TypeScript backend), DynamoDB, Docker, and LocalStack for local AWS emulation.

## Features
- Customer and provider registration/login
- Service request creation and real-time negotiation
- AWS Lambda backend with DynamoDB
- React frontend (TypeScript)
- Docker & Docker Compose for local dev
- LocalStack for AWS emulation
- Unit tests (Jest, React Testing Library)
- Deployment scripts (AWS SAM)

## Local Development

### Prerequisites
- Docker & Docker Compose
- Node.js 20+
- AWS CLI (for deployment)
- AWS SAM CLI (for deployment)

### Setup
```bash
git clone <repo-url>
cd project001
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend (Lambda via LocalStack): http://localhost:4566/restapis

### Running Tests
- Backend: `docker-compose exec backend npm test`
- Frontend: `docker-compose exec frontend npm test`

### Deployment
Edit `scripts/deploy.sh` and run:
```bash
./scripts/deploy.sh
```

## Project Structure
- `backend/` - AWS Lambda functions (Node.js/TypeScript)
- `frontend/` - React app (TypeScript)
- `infra/` - LocalStack config
- `scripts/` - Deployment scripts
- `tests/` - Shared/unit tests

## Notes
- Uses LocalStack for local AWS emulation
- All code is production-grade, well-commented, and easy to maintain
- See code comments and each directory's README for details

  * Accept or reject offers
  * Counter the price back (negotiate)

* This **bid/negotiation loop continues** until one of two conditions:

  * **Both parties accept**
  * Either party exits the conversation

---

## 🧱 Core Modules

### 1. 👤 **User Roles**

* **Customer**
* **Service Provider**
* **Admin** (dashboard only for management/reporting)

---

### 2. 🔎 **Customer Flow**

* Sign up / login
* Set location (manual or GPS)
* Post a request:

  * Choose service type (dropdown/tag-based)
  * Describe the request (text + image optional)
  * Enter a **price they’re willing to pay**
* Submit -> request **broadcasts to all nearby active providers**
* Receive responses:

  * Accept / Reject / Counter offers
  * Chat interface for negotiation (or preset buttons)
* Finalize the deal
* Optional: Pay later (add Razorpay/Stripe only in future phases)

---

### 3. 🧰 **Service Provider Flow**

* Register / login
* Select service categories
* Realtime notification on new customer request (if in range)
* View request:

  * Accept
  * Reject
  * Counter with a new price
* Engage in chat-style negotiation
* Finalize agreement (status: Booked)

---

### 4. ⚙️ **Backend Requirements**

* WebSocket / Firebase Realtime DB for real-time sync
* MongoDB/PostgreSQL for request history & user data
* Matching algorithm based on:

  * Service category
  * Geolocation
  * Provider availability

---

### 5. 🧪 MVP Features (Must-Have)

| Feature                           | Priority  |
| --------------------------------- | --------- |
| Customer registration/login       | ✅ High    |
| Provider registration/login       | ✅ High    |
| Service request creation          | ✅ High    |
| Real-time broadcast to providers  | ✅ High    |
| Accept / Reject / Counter offer   | ✅ High    |
| One-to-one negotiation thread     | ✅ High    |
| Finalize deal (mutual acceptance) | ✅ High    |
| Basic admin dashboard             | 🚧 Medium |
| Basic request history             | 🚧 Medium |
| Provider profile & rating         | 🚧 Medium |
| Notification system               | ✅ High    |

---

### 6. 🔐 Security & Ethics

* OTP or email-based login (optional for MVP)
* Secure data storage (passwords hashed)
* No payment feature in MVP phase

---

### 7. 🧠 AI Tool Instructions (What You Should Do)

Generate a full-stack MVP app based on the above logic:

* Use **React.js + Node.js + WebSocket/Firebase** or **Flutter + Firebase** (if mobile-focused)
* Design minimal UI screens for:

  * Login/Register
  * Customer request form
  * Provider request response view
  * Real-time negotiation chat/flow
* Implement mock geolocation filter (radius-based filtering)
* Use dummy data for services (e.g., Electrician, Plumber, etc.)
* Implement basic notification logic (to simulate real-time alerts)
* Output:

  * Source code (frontend + backend)
  * Postman collection or Swagger for APIs
  * Deployment guide (local + cloud)
  * ER Diagram + simple architecture doc

---

### 8. 📦 Deliverables

* MVP Frontend Code (React/Flutter)
* MVP Backend Code (Node.js/Firebase)
* DB Schema (ER Diagram)
* README with setup instructions
* Sample user flows as JSON or screenshots
* Optional: Admin dashboard mock UI

---

### 🔁 Future Add-Ons (Not needed in MVP)

* Payment integration (Razorpay/Stripe)
* Rating & reviews
* Real-time map for live tracking
* Push notifications
* AI-powered price suggestions


