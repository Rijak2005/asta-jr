# 🤖 Asta Jr. - Discord Bot

A feature-rich Discord. js bot designed to manage and enhance **Professor Astatine's class Discord server**. Built with personality, Astatine Jr. combines server management tools, entertainment features, and gamification to create an engaging community experience.

---

## ✨ Features

### 🎭 Entertainment & Fun
- **Food Generator** - Generate random food images to share in the server
- **Jokes** - Tell jokes to lighten the mood in voice channels
- **Topics** - Suggest conversation topics for community engagement
- **Gaming Banter** - Witty responses about gaming preferences with personality

### 👥 Server Management
- **Automatic Welcome Messages** - Greet new members with customized embeds
- **Role Assignment** - Assign welcome roles to new members automatically
- **User Management** - Create and delete user accounts from the database
- **Staff Applications** - Streamlined staff application system
- **Ticket System** - Open and manage support tickets
- **Empty Role Cleanup** - Remove empty roles from the server
- **Announcements** - Broadcast announcements to the server
- **Message Clearing** - Clear messages from channels (with permission levels)

### 💰 Economy System
- **Leaderboard** - Track user balances and rankings
- **Balance Checking** - View your current currency balance
- **Currency Transfer** - Give currency to other users
- **Account Creation** - Create personalized economy accounts

### 📊 Server Statistics
- **Member Counter** - Automatically track and display server member count
- **YouTube Subscriber Counter** - Monitor and display YouTube channel subscriber stats
- **Real-time Updates** - Channel names update with live statistics

### 🔐 Verification & Premium
- **Verification System** - Verify users in the server
- **Premium Features** - Premium user perks and benefits
- **User Info** - Query detailed user information (`whois` command)

### 📋 Additional Commands
- **Help** - Comprehensive command documentation
- **Ping** - Check bot latency and responsiveness
- **Version** - Display current bot version
- **Suggest** - Community suggestion system
- **Link** - Share important server links
- **Cancel** - Cancel pending operations

---

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: [Discord.js](https://discord. js.org/) - Modern Discord API wrapper
- **Database**: MongoDB - For persistent user data and statistics
- **Web Server**: Express.js - For bot keep-alive functionality

---

## 📦 Dependencies

- `discord.js` - Discord API interaction
- `mongoose` - MongoDB object modeling
- `dotenv` - Environment variable management
- `express` - Web server for uptime management
- Additional npm packages for enhanced functionality

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- MongoDB account and connection URI
- Discord Bot Token

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rijak2005/asta-jr. git
   cd asta-jr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3.  **Configure environment variables**
   - Create a `.env` file in the root directory
   - Add your Discord bot token and MongoDB URI

4. **Start the bot**
   ```bash
   node main.js
   ```

---

## 📂 Project Structure

```
asta-jr/
├── main.js              # Bot entry point and command routing
├── server.js            # Express server for keep-alive
├── commands/            # Individual command modules (20+ commands)
│   ├── ping.js
│   ├── balance.js
│   ├── leaderboard.js
│   ├── food.js
│   ├── help.js
│   └── ... 
├── models/              # Mongoose data models
│   ├── user.js          # User schema for economy system
│   └── topicData.js     # Topic data management
├── counters/            # Real-time counter modules
│   ├── member-counter.js
│   └── subs-counter.js
├── assets/              # Bot resources and media
└── package.json         # Project dependencies
```

---

## 🎯 Command Prefix

All commands use the prefix: `astajr `

**Example**: `astajr help` or `astajr balance`

---

## 💡 Key Highlights

✅ **Modular Architecture** - Commands are organized in separate files for easy maintenance  
✅ **Database Integration** - Persistent user data with MongoDB  
✅ **Real-time Statistics** - Live member and subscriber counts  
✅ **Economy System** - Full-featured currency and leaderboard system  
✅ **Personality** - Witty responses and engaging interactions  
✅ **Scalable** - Express server integration for reliable uptime  

---

## 📝 License

This project is open source and available for educational and community use.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements or new features.

---

## 📞 Support

For issues, questions, or feature requests, please open an issue on the [GitHub repository](https://github.com/Rijak2005/asta-jr). 

---

**Built with ❤️ by [@Rijak2005](https://github.com/Rijak2005)**
