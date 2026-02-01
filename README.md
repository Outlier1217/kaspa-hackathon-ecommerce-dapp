# 🛒 Kaspa E-Commerce dApp  
**Build at Internet Speed ⚡ | Kaspathon Hackathon Submission**

A simple, real-time e-commerce decentralized application built on **Kaspa**, showcasing **instant wallet interaction, transaction intent, and millisecond-level response times** on a Proof-of-Work Layer-1 blockchain.

---

## 🚀 Project Overview

This project demonstrates how **Kaspa’s ultra-fast block times** enable smooth, real-time payment experiences similar to Web2 apps, while remaining fully decentralized.

Users can:
- Connect a native **Kaspa wallet**
- Browse products
- Initiate a **Buy** transaction
- Observe **wallet response time in milliseconds**
- Trigger a **Refund flow (demo-based)**

The focus of this project is **UX, speed, and real-time interaction**, not complex smart contracts.

---

## 🧠 Why Kaspa?

Kaspa is one of the fastest PoW blockchains, offering:
- Millisecond block times
- Near-instant confirmations
- High throughput
- Native wallet UX

This makes Kaspa ideal for **payments & commerce**, where speed and user experience matter.

---

## 🛍️ Demo Products

The dApp includes 4 static demo products (priced in KAS):

- Blockchain Book  
- Web3 World  
- Quantum Book  
- CryptoCurrency Note  

> Products are static and used only for demonstrating the payment flow.

---

## 🔗 Wallet Integration

- Native **Kaspa browser wallet (Kasware)**
- No MetaMask or EVM dependencies
- Wallet detection and address resolution handled safely at runtime

---

## 💳 Payment Flow (Testnet)

- Network: **Kaspa Testnet**
- Clicking **Buy Now** triggers a real wallet transaction intent
- Wallet popup appears instantly
- Wallet response time is measured using `performance.now()`

### Important Note
Due to limited Kaspa testnet liquidity:
- Transactions may be **cancelled or rejected**
- This is expected and acceptable for hackathon demos

The project **intentionally demonstrates transaction intent and speed**, which is the core innovation of Kaspa.

---

## 🔄 Refund Flow

After a Buy attempt:
- The last transaction state is stored in the UI
- A **Refund button** is shown
- Refund is demonstrated as a **UX flow**, simulating reverse action timing

This approach is commonly used in hackathons and clearly documented.

---

## ⚡ Speed Measurement

Both Buy and Refund flows measure:
- Wallet interaction time (in milliseconds)
- Real-time UI feedback

This highlights Kaspa’s **“Build at Internet Speed”** advantage.

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Blockchain:** Kaspa (Testnet)
- **Wallet:** Kasware
- **Language:** JavaScript
- **Styling:** Inline CSS (minimal & clean)

---

## 📁 Project Structure

