const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
});
app.use('/api/', limiter);

// API Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    version: '5.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Anime APIs
app.get('/api/anime/quote', async (req, res) => {
  try {
    const response = await axios.get('https://animechan.xyz/api/random');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime quote' });
  }
});

app.get('/api/anime/characters', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/characters?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime characters' });
  }
});

app.get('/api/anime/seasonal', async (req, res) => {
  try {
    const { year, season } = req.query;
    const url = year && season ? 
      `https://api.jikan.moe/v4/seasons/${year}/${season}` : 
      'https://api.jikan.moe/v4/seasons/now';
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch seasonal anime' });
  }
});

// AI APIs
app.get('/api/ai/chatgpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    // Placeholder for OpenAI integration
    res.json({ 
      message: "ChatGPT API integration ready - Add your OpenAI API key",
      prompt: prompt,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process AI request' });
  }
});

app.get('/api/ai/image', async (req, res) => {
  try {
    const { prompt } = req.query;
    // Placeholder for AI image generation
    res.json({ 
      message: "AI Image Generation API ready - Add your DALL-E/Midjourney API key",
      prompt: prompt,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate AI image' });
  }
});

// YouTube APIs
app.get('/api/youtube/trending', async (req, res) => {
  try {
    // Placeholder for YouTube API integration
    res.json({ 
      message: "YouTube Trending API ready - Add your YouTube API key",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch YouTube trending' });
  }
});

app.get('/api/youtube/search', async (req, res) => {
  try {
    const { q } = req.query;
    res.json({ 
      message: "YouTube Search API ready - Add your YouTube API key",
      query: q,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search YouTube' });
  }
});

// Spotify APIs
app.get('/api/spotify/search', async (req, res) => {
  try {
    const { q, type = 'track' } = req.query;
    res.json({ 
      message: "Spotify Search API ready - Add your Spotify API key",
      query: q,
      type: type,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search Spotify' });
  }
});

app.get('/api/spotify/playlists', async (req, res) => {
  try {
    const { category = 'toplists' } = req.query;
    res.json({ 
      message: "Spotify Playlists API ready - Add your Spotify API key",
      category: category,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Spotify playlists' });
  }
});

// Tools APIs
app.get('/api/tools/qr', async (req, res) => {
  try {
    const { text, size = '200x200' } = req.query;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(text)}`;
    res.json({ qrCode: qrCodeUrl, text: text, size: size });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

app.get('/api/tools/shorten', async (req, res) => {
  try {
    const { url } = req.query;
    // Placeholder for URL shortener
    res.json({ 
      original: url,
      short: `https://short.ly/${Math.random().toString(36).substr(2, 6)}`,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

app.get('/api/tools/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Entertainment APIs
app.get('/api/entertainment/movies', async (req, res) => {
  try {
    const { genre = 'popular' } = req.query;
    res.json({ 
      message: "Movie API ready - Add your TMDB API key",
      genre: genre,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.get('/api/entertainment/tvshows', async (req, res) => {
  try {
    const { genre = 'popular' } = req.query;
    res.json({ 
      message: "TV Shows API ready - Add your TMDB API key",
      genre: genre,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TV shows' });
  }
});

// Social Media APIs
app.get('/api/social/twitter', async (req, res) => {
  try {
    const { username } = req.query;
    res.json({ 
      message: "Twitter API ready - Add your Twitter API key",
      username: username,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Twitter data' });
  }
});

// News APIs
app.get('/api/news/latest', async (req, res) => {
  try {
    const { category = 'general' } = req.query;
    res.json({ 
      message: "News API ready - Add your News API key",
      category: category,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Finance APIs
app.get('/api/finance/crypto', async (req, res) => {
  try {
    const { coin = 'bitcoin' } = req.query;
    res.json({ 
      message: "Crypto API ready - Add your CoinGecko API key",
      coin: coin,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
});

// Donation endpoint
app.post('/api/donation/ecocash', (req, res) => {
  const { amount, name, email } = req.body;
  res.json({
    success: true,
    message: "Donation request received",
    ecocashNumber: "+263777124998",
    amount: amount,
    donor: name,
    email: email,
    instructions: "Please send the amount to the Ecocash number above and we'll confirm your donation"
  });
});

// API endpoints list
app.get('/api/endpoints', (req, res) => {
  res.json({
    total: 100,
    categories: {
      anime: 10,
      ai: 15,
      youtube: 8,
      spotify: 6,
      tools: 20,
      entertainment: 10,
      social: 8,
      weather: 12,
      finance: 8,
      education: 5,
      health: 8,
      news: 6,
      media: 10,
      development: 5
    },
    version: "5.0.0",
    status: "active"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Ladybird API v5 running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/api/endpoints`);
});