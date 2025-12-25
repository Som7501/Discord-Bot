# 🤖 Discord Bot 

A beginner‑friendly **Discord Bot** built using **Node.js** and **discord.js**. This project demonstrates how to create a bot, register slash commands, and respond to user messages and interactions.

---

## 📌 Project Overview

This Discord bot supports:

* Basic **slash commands** (`/ping`, `/beep`, `/server`, `/user`)
* Automatic replies to normal text messages
* Connection to Discord using **Gateway Intents**

The project is ideal for learning **Discord Bot Development** and understanding how Discord interactions work.

---

## ✨ Features

* 🔹 Responds to user messages
* 🔹 Supports slash commands
* 🔹 Displays server and user information
* 🔹 Simple and clean project structure
* 🔹 Built using modern `discord.js v14`

---

## 🛠️ Tech Stack

| Technology           | Purpose             |
| -------------------- | ------------------- |
| **Node.js**          | Runtime environment |
| **discord.js**       | Discord API wrapper |
| **JavaScript (ES6)** | Bot logic           |

---

## 📂 Project Structure

```bash
Discord-Bot/
│── index.js        # Main bot logic
│── command.js      # Slash command registration
│── package.json    # Dependencies
│── README.md       # Documentation
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/discord-bot.git
cd discord-bot
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables (IMPORTANT 🔐)

❗ **Never expose your bot token on GitHub**

Create a `.env` file:

```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
```

Update your code to use `process.env.DISCORD_TOKEN`.

---

## ▶️ Running the Bot

### Register Slash Commands

```bash
node command.js
```

### Start the Bot

```bash
node index.js
```

If successful, the bot will appear **online** in your Discord server ✅

---

## 🧠 Supported Commands

| Command   | Description                      |
| --------- | -------------------------------- |
| `/ping`   | Replies with Pong                |
| `/beep`   | Replies with Boop                |
| `/server` | Shows server name & member count |
| `/user`   | Shows user tag & ID              |

---

## 🔄 System Flow

```text
User Input
   ↓
Discord Server
   ↓
Discord Bot
   ↓
Command Processing
   ↓
Bot Response
```

---

## 🚀 Future Improvements

* 🔐 Environment variable security
* 🧩 Modular command handling
* 🗃️ Database integration
* 🎵 Music commands
* 🛡️ Moderation features
* 🌍 Multi-server support

---

## ⚠️ Security Note

🚨 **Bot tokens should NEVER be committed to GitHub**

Always use:

* `.env` files
* `.gitignore`

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you find this project helpful:

* Give it a ⭐ on GitHub
* Fork and improve it

Happy Coding 🚀

