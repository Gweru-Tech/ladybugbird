# Ladybird API v5 - Complete API Documentation

## 📖 Overview

Ladybird API v5 provides access to 150+ endpoints across 15 categories. All APIs are RESTful, return JSON responses, and include comprehensive error handling.

## 🔑 Authentication

Currently, most endpoints are publicly accessible. Premium endpoints require API keys (to be implemented in future versions).

## 📊 Base URL

```
https://your-app-name.onrender.com
```

## 🚀 Quick Start

```bash
# Test the health endpoint
curl https://your-app-name.onrender.com/health

# Get all available endpoints
curl https://your-app-name.onrender.com/api/endpoints
```

---

## 🐉 ANIME APIS (15 Endpoints)

### Get Random Anime Quote
```http
GET /api/anime/quote
```

**Response:**
```json
{
  "anime": "Naruto",
  "character": "Naruto Uzumaki",
  "quote": "I'm gonna be Hokage one day!"
}
```

### Search Anime Characters
```http
GET /api/anime/characters?page=1
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)

**Response:**
```json
{
  "data": [
    {
      "name": "Naruto Uzumaki",
      "anime": "Naruto",
      "image": "https://example.com/image.jpg"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 100
  }
}
```

### Get Seasonal Anime
```http
GET /api/anime/seasonal
GET /api/anime/seasonal?year=2024&season=fall
```

**Query Parameters:**
- `year` (optional): Year
- `season` (optional): Season (winter, spring, summer, fall)

### Search Anime
```http
GET /api/anime/search?q=naruto&page=1
```

**Query Parameters:**
- `q`: Search query
- `page` (optional): Page number

### Get Manga Information
```http
GET /api/anime/manga?page=1
```

### Get Top Anime
```http
GET /api/anime/top/anime?page=1
```

### Get Top Manga
```http
GET /api/anime/top/manga?page=1
```

### Get Anime by Genre
```http
GET /api/anime/genre/1?page=1
```

**Query Parameters:**
- `id`: Genre ID
- `page` (optional): Page number

---

## 🧠 AI APIS (20 Endpoints)

### ChatGPT Integration
```http
GET /api/ai/chatgpt?prompt=Hello%20world
```

**Query Parameters:**
- `prompt`: Text prompt for AI

**Response:**
```json
{
  "message": "AI response here",
  "prompt": "Hello world",
  "placeholder": true
}
```

### AI Image Generation
```http
GET /api/ai/image?prompt=a%20beautiful%20sunset
```

**Query Parameters:**
- `prompt`: Image description

### Text Analysis
```http
POST /api/ai/analyze
Content-Type: application/json

{
  "text": "This is amazing!"
}
```

**Response:**
```json
{
  "sentiment": "positive",
  "confidence": 0.95,
  "text": "This is amazing!"
}
```

### Text Translation
```http
POST /api/ai/translate
Content-Type: application/json

{
  "text": "Hello world",
  "from": "en",
  "to": "es"
}
```

### Text Summarization
```http
POST /api/ai/summarize
Content-Type: application/json

{
  "text": "Long text to summarize..."
}
```

---

## 📺 YOUTUBE APIS (12 Endpoints)

### Get Trending Videos
```http
GET /api/youtube/trending
```

**Response:**
```json
{
  "message": "YouTube Trending API - Add your YouTube API key",
  "placeholder": true
}
```

### Search Videos
```http
GET /api/youtube/search?q=javascript%20tutorial
```

**Query Parameters:**
- `q`: Search query

### Get Video Information
```http
GET /api/youtube/video/dQw4w9WgXcQ
```

**Path Parameters:**
- `id`: YouTube video ID

---

## 🎵 SPOTIFY APIS (10 Endpoints)

### Search Spotify
```http
GET /api/spotify/search?q=imagine%20dragons&type=track
```

**Query Parameters:**
- `q`: Search query
- `type` (optional): track, album, artist, playlist (default: track)

### Get Playlists
```http
GET /api/spotify/playlists?category=toplists
```

**Query Parameters:**
- `category` (optional): Playlist category (default: toplists)

---

## 🛠️ TOOLS APIS (25 Endpoints)

### Generate QR Code
```http
GET /api/tools/qr?text=Hello%20World&size=200x200
```

**Query Parameters:**
- `text`: Text to encode
- `size` (optional): QR code size (default: 200x200)

**Response:**
```json
{
  "qrCode": "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello%20World",
  "text": "Hello World",
  "size": "200x200"
}
```

### Shorten URL
```http
GET /api/tools/shorten?url=https://example.com/very-long-url
```

**Query Parameters:**
- `url`: URL to shorten

### Get Weather Data
```http
GET /api/tools/weather?city=London
```

**Query Parameters:**
- `city`: City name

**Response:**
```json
{
  "city": "London",
  "temperature": "25°C",
  "humidity": "60%",
  "wind": "10 km/h"
}
```

### Validate Text Format
```http
POST /api/tools/validate
Content-Type: application/json

{
  "text": "example@email.com",
  "type": "email"
}
```

**Response:**
```json
{
  "valid": true,
  "text": "example@email.com",
  "type": "email"
}
```

### Currency Converter
```http
GET /api/tools/convert?from=USD&to=EUR&amount=100
```

**Query Parameters:**
- `from`: Source currency
- `to`: Target currency
- `amount`: Amount to convert

### Calculator
```http
GET /api/tools/calculator?expression=2+2*3
```

**Query Parameters:**
- `expression`: Mathematical expression

**Response:**
```json
{
  "expression": "2+2*3",
  "result": 8
}
```

### Generate Password
```http
GET /api/tools/password?length=16
```

**Query Parameters:**
- `length` (optional): Password length (default: 12)

**Response:**
```json
{
  "password": "xK9@mN2$pL7#qR8",
  "length": 16
}
```

### Get Timestamp
```http
GET /api/tools/timestamp
```

**Response:**
```json
{
  "timestamp": 1704067200000,
  "iso": "2024-01-01T00:00:00.000Z",
  "unix": 1704067200
}
```

### Generate UUID
```http
GET /api/tools/uuid
```

**Response:**
```json
{
  "uuid": "550e8400-e29b-41d4-a716-446655440000"
}
```

### Generate Hash
```http
GET /api/tools/hash?text=Hello%20World&algorithm=sha256
```

**Query Parameters:**
- `text`: Text to hash
- `algorithm` (optional): md5, sha1, sha256, sha512 (default: md5)

**Response:**
```json
{
  "text": "Hello World",
  "algorithm": "sha256",
  "hash": "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"
}
```

---

## 🎬 ENTERTAINMENT APIS (15 Endpoints)

### Get Movies
```http
GET /api/entertainment/movies?genre=action
```

**Query Parameters:**
- `genre` (optional): Movie genre (default: popular)

### Get TV Shows
```http
GET /api/entertainment/tvshows?genre=comedy
```

**Query Parameters:**
- `genre` (optional): TV show genre (default: popular)

### Get Games
```http
GET /api/entertainment/games?platform=pc
```

**Query Parameters:**
- `platform` (optional): Gaming platform (default: all)

---

## 📱 SOCIAL MEDIA APIS (12 Endpoints)

### Get Twitter Data
```http
GET /api/social/twitter?username=elonmusk
```

**Query Parameters:**
- `username`: Twitter username

### Get Instagram Data
```http
GET /api/social/instagram?username=natgeo
```

**Query Parameters:**
- `username`: Instagram username

---

## ☁️ WEATHER APIS (15 Endpoints)

### Current Weather
```http
GET /api/weather/current?city=New%20York
```

**Response:**
```json
{
  "city": "New York",
  "temperature": "22°C",
  "humidity": "65%",
  "wind": "15 km/h"
}
```

### Weather Forecast
```http
GET /api/weather/forecast?city=London&days=5
```

**Query Parameters:**
- `city`: City name
- `days` (optional): Number of days (default: 5)

---

## 💰 FINANCE APIS (10 Endpoints)

### Get Crypto Prices
```http
GET /api/finance/crypto?coin=bitcoin
```

**Query Parameters:**
- `coin` (optional): Cryptocurrency (default: bitcoin)

**Response:**
```json
{
  "coin": "bitcoin",
  "price": "$50,000",
  "change": "+5.2%"
}
```

### Get Stock Prices
```http
GET /api/finance/stocks?symbol=AAPL
```

**Query Parameters:**
- `symbol` (optional): Stock symbol (default: AAPL)

---

## 📚 EDUCATION APIS (8 Endpoints)

### Get Courses
```http
GET /api/education/courses?subject=programming
```

**Query Parameters:**
- `subject` (optional): Subject (default: all)

---

## 🏥 HEALTH APIS (8 Endpoints)

### Calculate BMI
```http
GET /api/health/bmi?weight=70&height=1.75
```

**Query Parameters:**
- `weight`: Weight in kg
- `height`: Height in meters

**Response:**
```json
{
  "weight": 70,
  "height": 1.75,
  "bmi": 22.86
}
```

---

## 📰 NEWS APIS (8 Endpoints)

### Get Latest News
```http
GET /api/news/latest?category=technology
```

**Query Parameters:**
- `category` (optional): News category (default: general)

---

## 🖼️ MEDIA APIS (10 Endpoints)

### Get Random Image
```http
GET /api/images/random?width=800&height=600
```

**Query Parameters:**
- `width` (optional): Image width (default: 800)
- `height` (optional): Image height (default: 600)

**Response:**
```json
{
  "url": "https://picsum.photos/800/600",
  "width": 800,
  "height": 600
}
```

---

## 💻 DEVELOPMENT APIS (5 Endpoints)

### JSON Test Data
```http
GET /api/dev/json
```

**Response:**
```json
{
  "message": "JSON test data",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "random": 0.123456789
}
```

### Echo Request
```http
GET /api/dev/echo?test=value
```

**Response:**
```json
{
  "query": { "test": "value" },
  "headers": { "user-agent": "curl/7.68.0" },
  "method": "GET"
}
```

---

## ⚡ UTILITY APIS (7 Endpoints)

### Get IP Information
```http
GET /api/util/ip
```

**Response:**
```json
{
  "ip": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Get Request Headers
```http
GET /api/util/headers
```

---

## 💳 DONATION API

### Process Donation
```http
POST /api/donation/ecocash
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "amount": "25"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Donation request received",
  "ecocashNumber": "+263777124998",
  "amount": "25",
  "donor": "John Doe",
  "email": "john@example.com",
  "instructions": "Please send the amount to the Ecocash number above and we'll confirm your donation"
}
```

---

## 📊 SYSTEM ENDPOINTS

### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "version": "5.0.0",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600
}
```

### Get All Endpoints
```http
GET /api/endpoints
```

**Response:**
```json
{
  "total": 150,
  "categories": {
    "anime": 15,
    "ai": 20,
    "youtube": 12,
    "spotify": 10,
    "tools": 25,
    "entertainment": 15,
    "social": 12,
    "weather": 15,
    "finance": 10,
    "education": 8,
    "health": 8,
    "news": 8,
    "media": 10,
    "development": 5,
    "utility": 7
  },
  "version": "5.0.0",
  "status": "active"
}
```

---

## 🚨 Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error description",
  "status": 500,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Common Error Codes

- `400` - Bad Request
- `401` - Unauthorized (future authentication)
- `404` - Endpoint Not Found
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

---

## 🔄 Rate Limiting

- **Window**: 15 minutes
- **Limit**: 1000 requests per IP
- **Headers**: Rate limit info included in response headers

---

## 🔧 Response Format

All successful responses follow this structure:

```json
{
  "data": { ... }, // Main response data
  "meta": {        // Optional metadata
    "pagination": { ... },
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 📈 Usage Examples

### JavaScript/Fetch
```javascript
// Get random anime quote
fetch('https://your-app-name.onrender.com/api/anime/quote')
  .then(response => response.json())
  .then(data => console.log(data));

// Generate QR code
fetch('https://your-app-name.onrender.com/api/tools/qr?text=Hello World')
  .then(response => response.json())
  .then(data => console.log(data.qrCode));
```

### Python/Requests
```python
import requests

# Get weather data
response = requests.get('https://your-app-name.onrender.com/api/weather/current?city=London')
data = response.json()
print(data['temperature'])

# Submit donation
donation_data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'amount': '25'
}
response = requests.post('https://your-app-name.onrender.com/api/donation/ecocash', json=donation_data)
print(response.json())
```

### cURL
```bash
# Search YouTube
curl "https://your-app-name.onrender.com/api/youtube/search?q=javascript"

# Calculate BMI
curl "https://your-app-name.onrender.com/api/health/bmi?weight=70&height=1.75"

# Process donation
curl -X POST https://your-app-name.onrender.com/api/donation/ecocash \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","amount":"25"}'
```

---

## 🎯 Best Practices

1. **Cache responses** where appropriate
2. **Handle errors** gracefully
3. **Use appropriate HTTP methods**
4. **Validate input parameters**
5. **Monitor rate limits**
6. **Implement retry logic** for failed requests

---

## 📞 Support

For API support and questions:
- 📧 **Email**: support@ladybird-api.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- 📚 **Documentation**: [Complete Docs](https://your-app-name.onrender.com/docs)

---

*Ladybird API v5 • Version 5.0.0 • Last Updated: January 2024*