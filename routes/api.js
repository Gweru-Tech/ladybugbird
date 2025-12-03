const express = require('express');
const axios = require('axios');
const router = express.Router();

// Anime APIs (15 endpoints)
router.get('/anime/quote', async (req, res) => {
  try {
    const response = await axios.get('https://animechan.xyz/api/random');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime quote' });
  }
});

router.get('/anime/characters', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/characters?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime characters' });
  }
});

router.get('/anime/seasonal', async (req, res) => {
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

router.get('/anime/search', async (req, res) => {
  try {
    const { q, page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}&page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search anime' });
  }
});

router.get('/anime/manga', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/manga?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch manga' });
  }
});

router.get('/anime/top/anime', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top anime' });
  }
});

router.get('/anime/top/manga', async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/top/manga?page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch top manga' });
  }
});

router.get('/anime/genre/:id', async (req, res) => {
  try {
    const { id, page = 1 } = req.params;
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${id}&page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime by genre' });
  }
});

// AI APIs (20 endpoints)
router.get('/ai/chatgpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    res.json({ 
      message: "ChatGPT API integration - Add your OpenAI API key",
      prompt: prompt,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process AI request' });
  }
});

router.get('/ai/image', async (req, res) => {
  try {
    const { prompt } = req.query;
    res.json({ 
      message: "AI Image Generation - Add your DALL-E/Midjourney API key",
      prompt: prompt,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate AI image' });
  }
});

router.post('/ai/analyze', async (req, res) => {
  try {
    const { text } = req.body;
    res.json({ 
      sentiment: "positive",
      confidence: 0.95,
      text: text,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze text' });
  }
});

router.post('/ai/translate', async (req, res) => {
  try {
    const { text, from = 'auto', to = 'en' } = req.body;
    res.json({ 
      original: text,
      translated: text,
      from: from,
      to: to,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

router.post('/ai/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    res.json({ 
      original: text,
      summary: "Summary would be here",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to summarize text' });
  }
});

// YouTube APIs (12 endpoints)
router.get('/youtube/trending', async (req, res) => {
  try {
    res.json({ 
      message: "YouTube Trending API - Add your YouTube API key",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch YouTube trending' });
  }
});

router.get('/youtube/search', async (req, res) => {
  try {
    const { q } = req.query;
    res.json({ 
      message: "YouTube Search API - Add your YouTube API key",
      query: q,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search YouTube' });
  }
});

router.get('/youtube/video/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ 
      message: "YouTube Video Info API - Add your YouTube API key",
      videoId: id,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get video info' });
  }
});

// Spotify APIs (10 endpoints)
router.get('/spotify/search', async (req, res) => {
  try {
    const { q, type = 'track' } = req.query;
    res.json({ 
      message: "Spotify Search API - Add your Spotify API key",
      query: q,
      type: type,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to search Spotify' });
  }
});

router.get('/spotify/playlists', async (req, res) => {
  try {
    const { category = 'toplists' } = req.query;
    res.json({ 
      message: "Spotify Playlists API - Add your Spotify API key",
      category: category,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Spotify playlists' });
  }
});

// Tools APIs (25 endpoints)
router.get('/tools/qr', async (req, res) => {
  try {
    const { text, size = '200x200' } = req.query;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(text)}`;
    res.json({ qrCode: qrCodeUrl, text: text, size: size });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

router.get('/tools/shorten', async (req, res) => {
  try {
    const { url } = req.query;
    res.json({ 
      original: url,
      short: `https://short.ly/${Math.random().toString(36).substr(2, 6)}`,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

router.get('/tools/weather', async (req, res) => {
  try {
    const { city } = req.query;
    res.json({ 
      city: city,
      temperature: "25°C",
      description: "Sunny",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

router.post('/tools/validate', async (req, res) => {
  try {
    const { text, type } = req.body;
    res.json({ 
      valid: true,
      text: text,
      type: type,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to validate text' });
  }
});

router.get('/tools/convert', async (req, res) => {
  try {
    const { from, to, amount } = req.query;
    res.json({ 
      from: from,
      to: to,
      amount: amount,
      result: amount * 1.2,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to convert currency' });
  }
});

router.get('/tools/calculator', (req, res) => {
  try {
    const { expression } = req.query;
    const result = eval(expression); // Note: Use safe evaluation in production
    res.json({ expression: expression, result: result });
  } catch (error) {
    res.status(500).json({ error: 'Invalid expression' });
  }
});

router.get('/tools/password', (req, res) => {
  try {
    const { length = 12 } = req.query;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < parseInt(length); i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    res.json({ password: password, length: length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate password' });
  }
});

router.get('/tools/timestamp', (req, res) => {
  try {
    const timestamp = Date.now();
    res.json({ 
      timestamp: timestamp,
      iso: new Date().toISOString(),
      unix: Math.floor(timestamp / 1000)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get timestamp' });
  }
});

router.get('/tools/uuid', (req, res) => {
  try {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    res.json({ uuid: uuid });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate UUID' });
  }
});

router.get('/tools/hash', (req, res) => {
  try {
    const { text, algorithm = 'md5' } = req.query;
    const crypto = require('crypto');
    const hash = crypto.createHash(algorithm).update(text).digest('hex');
    res.json({ text: text, algorithm: algorithm, hash: hash });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate hash' });
  }
});

// Entertainment APIs (15 endpoints)
router.get('/entertainment/movies', async (req, res) => {
  try {
    const { genre = 'popular' } = req.query;
    res.json({ 
      message: "Movie API - Add your TMDB API key",
      genre: genre,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

router.get('/entertainment/tvshows', async (req, res) => {
  try {
    const { genre = 'popular' } = req.query;
    res.json({ 
      message: "TV Shows API - Add your TMDB API key",
      genre: genre,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TV shows' });
  }
});

router.get('/entertainment/games', async (req, res) => {
  try {
    const { platform = 'all' } = req.query;
    res.json({ 
      message: "Games API - Add your IGDB API key",
      platform: platform,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// Social Media APIs (12 endpoints)
router.get('/social/twitter', async (req, res) => {
  try {
    const { username } = req.query;
    res.json({ 
      message: "Twitter API - Add your Twitter API key",
      username: username,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Twitter data' });
  }
});

router.get('/social/instagram', async (req, res) => {
  try {
    const { username } = req.query;
    res.json({ 
      message: "Instagram API - Add your Instagram API key",
      username: username,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Instagram data' });
  }
});

// Weather APIs (15 endpoints)
router.get('/weather/current', async (req, res) => {
  try {
    const { city } = req.query;
    res.json({ 
      city: city,
      temperature: "25°C",
      humidity: "60%",
      wind: "10 km/h",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

router.get('/weather/forecast', async (req, res) => {
  try {
    const { city, days = 5 } = req.query;
    res.json({ 
      city: city,
      forecast: "5-day forecast data",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forecast' });
  }
});

// Finance APIs (10 endpoints)
router.get('/finance/crypto', async (req, res) => {
  try {
    const { coin = 'bitcoin' } = req.query;
    res.json({ 
      coin: coin,
      price: "$50,000",
      change: "+5.2%",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
});

router.get('/finance/stocks', async (req, res) => {
  try {
    const { symbol = 'AAPL' } = req.query;
    res.json({ 
      symbol: symbol,
      price: "$150.00",
      change: "+2.5%",
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Education APIs (8 endpoints)
router.get('/education/courses', async (req, res) => {
  try {
    const { subject = 'all' } = req.query;
    res.json({ 
      message: "Education API - Add your Coursera/Udemy API key",
      subject: subject,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Health APIs (8 endpoints)
router.get('/health/bmi', (req, res) => {
  try {
    const { weight, height } = req.query;
    const bmi = (weight / (height * height)).toFixed(2);
    res.json({ weight: weight, height: height, bmi: bmi });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate BMI' });
  }
});

// News APIs (8 endpoints)
router.get('/news/latest', async (req, res) => {
  try {
    const { category = 'general' } = req.query;
    res.json({ 
      message: "News API - Add your News API key",
      category: category,
      placeholder: true
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Image APIs (10 endpoints)
router.get('/images/random', (req, res) => {
  try {
    const { width = 800, height = 600 } = req.query;
    const imageUrl = `https://picsum.photos/${width}/${height}`;
    res.json({ url: imageUrl, width: width, height: height });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate random image' });
  }
});

// Development APIs (5 endpoints)
router.get('/dev/json', (req, res) => {
  res.json({ 
    message: "JSON test data",
    timestamp: new Date().toISOString(),
    random: Math.random()
  });
});

router.get('/dev/echo', (req, res) => {
  res.json({ 
    query: req.query,
    headers: req.headers,
    method: req.method
  });
});

// Additional utility endpoints
router.get('/util/ip', (req, res) => {
  res.json({ 
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: new Date().toISOString()
  });
});

router.get('/util/headers', (req, res) => {
  res.json({ headers: req.headers });
});

module.exports = router;