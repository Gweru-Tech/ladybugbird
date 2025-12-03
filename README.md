# Ladybird API v5 - Comprehensive API Hub

![Version](https://img.shields.io/badge/version-5.0.0-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)
![License](https://img.shields.io/badge/license-MIT-purple.svg)

🚀 **Ladybird API v5** is your comprehensive hub for 150+ APIs including Anime, AI, YouTube, Spotify, Tools, Entertainment, and much more!

## 🌟 Features

- **150+ API Endpoints** across 15 categories
- **Modern & Responsive Design** with Tailwind CSS
- **Dark/Light Mode** support
- **API Testing Interface** built-in
- **Ecocash Donation Support** (+263 777 124 998)
- **Render.com Ready** deployment configuration
- **Rate Limiting** and security features
- **Health Checks** and monitoring

## 📊 API Categories

| Category | APIs | Status |
|----------|------|--------|
| 🐉 Anime | 15 endpoints | Active |
| 🧠 AI | 20 endpoints | Active |
| 📺 YouTube | 12 endpoints | Active |
| 🎵 Spotify | 10 endpoints | Active |
| 🛠️ Tools | 25 endpoints | Active |
| 🎬 Entertainment | 15 endpoints | Active |
| 📱 Social Media | 12 endpoints | Active |
| ☁️ Weather | 15 endpoints | Active |
| 💰 Finance | 10 endpoints | Active |
| 📚 Education | 8 endpoints | Active |
| 🏥 Health | 8 endpoints | Active |
| 📰 News | 8 endpoints | Active |
| 🖼️ Media | 10 endpoints | Active |
| 💻 Development | 5 endpoints | Active |
| ⚡ Utility | 7 endpoints | Active |

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ladybird-api-v5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Visit the application**
   ```
   http://localhost:3000
   ```

### Development Mode
```bash
npm run dev
```

## 🌐 Deployment on Render.com

### One-Click Deployment

1. **Connect your GitHub repository** to Render.com
2. **Use the `render.yaml`** configuration file
3. **Set environment variables** in Render dashboard
4. **Deploy automatically** on every push

### Manual Deployment

1. **Create a Web Service** on Render.com
2. **Set Build Command**: `npm install`
3. **Set Start Command**: `npm start`
4. **Add Environment Variables**:
   - `NODE_ENV=production`
   - `PORT=10000`
   - Your API keys for various services

### Environment Variables Setup

Add these environment variables in your Render dashboard:

```bash
# Required for full functionality
OPENAI_API_KEY=your_openai_api_key
YOUTUBE_API_KEY=your_youtube_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
TWITTER_API_KEY=your_twitter_api_key
NEWS_API_KEY=your_news_api_key
WEATHER_API_KEY=your_weather_api_key
TMDB_API_KEY=your_tmdb_api_key
COINGECKO_API_KEY=your_coingecko_api_key

# Security
JWT_SECRET=your_jwt_secret

# Donation
ECOCASH_NUMBER=263777124998
```

## 💳 Donations & Support

Support Ladybird API v5 development through Ecocash:

📱 **Ecocash Number**: `+263 777 124 998`

### Donation Tiers

- ☕ **$5** - Coffee Support
- ⭐ **$25** - Premium Access (Unlock all APIs)
- 👑 **$100** - VIP Sponsor (Priority support + exclusive features)

### How to Donate

1. **Click "Donate Now"** button on the website
2. **Fill in your details**
3. **Send amount to +263 777 124 998**
4. **Receive confirmation** within 24 hours

## 📚 API Documentation

### Base URL
```
https://your-app-name.onrender.com
```

### Health Check
```http
GET /health
```

### API List
```http
GET /api/endpoints
```

### Example API Calls

#### Anime Quote
```http
GET /api/anime/quote
```

#### QR Code Generator
```http
GET /api/tools/qr?text=Hello%20World&size=300x300
```

#### Weather Data
```http
GET /api/tools/weather?city=London
```

#### YouTube Search
```http
GET /api/youtube/search?q=javascript
```

#### Spotify Search
```http
GET /api/spotify/search?q=imagine%20dragons&type=track
```

## 🛠️ Technology Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + Tailwind CSS + Vanilla JavaScript
- **API Integration**: Axios
- **Security**: Helmet.js + CORS + Rate Limiting
- **Compression**: Gzip
- **Monitoring**: Morgan + Health Checks
- **Deployment**: Render.com

## 🔧 Configuration

### Rate Limiting
- **Window**: 15 minutes
- **Max Requests**: 1000 per IP
- **Customizable**: via environment variables

### Security Features
- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Compression**: Gzip compression
- **Rate Limiting**: DDoS protection

## 📈 Monitoring & Analytics

### Health Endpoints
```http
GET /health
```
Returns server status, version, uptime, and timestamp.

### API Statistics
```http
GET /api/endpoints
```
Returns total API count and category breakdown.

## 🔄 Updates & Maintenance

### Version 5.0.0 Features
- ✅ 150+ API endpoints
- ✅ Modern responsive UI
- ✅ Dark/Light mode
- ✅ Ecocash donation integration
- ✅ Render.com deployment ready
- ✅ Enhanced security
- ✅ API testing interface

### Future Updates
- 🔄 Real-time API monitoring
- 🔄 User authentication system
- 🔄 API key management
- 🔄 Usage analytics dashboard
- 🔄 Premium subscription tiers

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Submit a pull request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 **Email**: support@ladybird-api.com
- 💬 **Discord**: [Join our community](https://discord.gg/ladybird-api)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- Thanks to all API providers for their amazing services
- Special thanks to our donors and supporters
- Built with ❤️ for the developer community

---

**Ladybird API v5** - Your Gateway to 150+ APIs 🚀

*Version 5.0.0 • Built with Node.js • Deployed on Render.com*