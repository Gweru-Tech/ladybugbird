// Ladybird API v5 - Main JavaScript File

// API data
const apiData = {
    anime: [
        { name: 'Random Quote', endpoint: '/api/anime/quote', method: 'GET', description: 'Get a random anime quote' },
        { name: 'Character Search', endpoint: '/api/anime/characters', method: 'GET', description: 'Search anime characters' },
        { name: 'Seasonal Anime', endpoint: '/api/anime/seasonal', method: 'GET', description: 'Get current seasonal anime' },
        { name: 'Anime Search', endpoint: '/api/anime/search', method: 'GET', description: 'Search anime by title' },
        { name: 'Manga Info', endpoint: '/api/anime/manga', method: 'GET', description: 'Get manga information' },
        { name: 'Top Anime', endpoint: '/api/anime/top/anime', method: 'GET', description: 'Get top rated anime' },
        { name: 'Top Manga', endpoint: '/api/anime/top/manga', method: 'GET', description: 'Get top rated manga' },
        { name: 'Anime by Genre', endpoint: '/api/anime/genre/', method: 'GET', description: 'Get anime by genre' }
    ],
    ai: [
        { name: 'ChatGPT', endpoint: '/api/ai/chatgpt', method: 'GET', description: 'AI chat with GPT' },
        { name: 'Image Generation', endpoint: '/api/ai/image', method: 'GET', description: 'Generate AI images' },
        { name: 'Text Analysis', endpoint: '/api/ai/analyze', method: 'POST', description: 'Analyze text sentiment' },
        { name: 'Translation', endpoint: '/api/ai/translate', method: 'POST', description: 'Translate text' },
        { name: 'Summarization', endpoint: '/api/ai/summarize', method: 'POST', description: 'Summarize text' },
        { name: 'Text Classification', endpoint: '/api/ai/classify', method: 'POST', description: 'Classify text content' },
        { name: 'Keyword Extraction', endpoint: '/api/ai/keywords', method: 'POST', description: 'Extract keywords from text' },
        { name: 'Sentiment Analysis', endpoint: '/api/ai/sentiment', method: 'POST', description: 'Analyze text sentiment' }
    ],
    youtube: [
        { name: 'Trending Videos', endpoint: '/api/youtube/trending', method: 'GET', description: 'Get trending YouTube videos' },
        { name: 'Video Search', endpoint: '/api/youtube/search', method: 'GET', description: 'Search YouTube videos' },
        { name: 'Video Info', endpoint: '/api/youtube/video/', method: 'GET', description: 'Get video details' },
        { name: 'Channel Data', endpoint: '/api/youtube/channel', method: 'GET', description: 'Get channel information' },
        { name: 'Comments', endpoint: '/api/youtube/comments', method: 'GET', description: 'Get video comments' },
        { name: 'Transcript', endpoint: '/api/youtube/transcript', method: 'GET', description: 'Get video transcript' }
    ],
    spotify: [
        { name: 'Track Search', endpoint: '/api/spotify/search', method: 'GET', description: 'Search Spotify tracks' },
        { name: 'Playlists', endpoint: '/api/spotify/playlists', method: 'GET', description: 'Get popular playlists' },
        { name: 'Album Info', endpoint: '/api/spotify/album', method: 'GET', description: 'Get album details' },
        { name: 'Artist Info', endpoint: '/api/spotify/artist', method: 'GET', description: 'Get artist information' },
        { name: 'Audio Features', endpoint: '/api/spotify/audio-features', method: 'GET', description: 'Get audio analysis' }
    ],
    tools: [
        { name: 'QR Code Generator', endpoint: '/api/tools/qr', method: 'GET', description: 'Generate QR codes' },
        { name: 'URL Shortener', endpoint: '/api/tools/shorten', method: 'GET', description: 'Shorten URLs' },
        { name: 'Weather', endpoint: '/api/tools/weather', method: 'GET', description: 'Get weather data' },
        { name: 'Text Validator', endpoint: '/api/tools/validate', method: 'POST', description: 'Validate text formats' },
        { name: 'Currency Converter', endpoint: '/api/tools/convert', method: 'GET', description: 'Convert currencies' },
        { name: 'Calculator', endpoint: '/api/tools/calculator', method: 'GET', description: 'Mathematical calculations' },
        { name: 'Password Generator', endpoint: '/api/tools/password', method: 'GET', description: 'Generate secure passwords' },
        { name: 'Timestamp', endpoint: '/api/tools/timestamp', method: 'GET', description: 'Get current timestamp' },
        { name: 'UUID Generator', endpoint: '/api/tools/uuid', method: 'GET', description: 'Generate UUIDs' },
        { name: 'Hash Generator', endpoint: '/api/tools/hash', method: 'GET', description: 'Generate text hashes' }
    ],
    entertainment: [
        { name: 'Movies', endpoint: '/api/entertainment/movies', method: 'GET', description: 'Get movie information' },
        { name: 'TV Shows', endpoint: '/api/entertainment/tvshows', method: 'GET', description: 'Get TV show data' },
        { name: 'Games', endpoint: '/api/entertainment/games', method: 'GET', description: 'Get game information' },
        { name: 'Books', endpoint: '/api/entertainment/books', method: 'GET', description: 'Get book data' },
        { name: 'Comics', endpoint: '/api/entertainment/comics', method: 'GET', description: 'Get comic information' }
    ],
    social: [
        { name: 'Twitter', endpoint: '/api/social/twitter', method: 'GET', description: 'Get Twitter data' },
        { name: 'Instagram', endpoint: '/api/social/instagram', method: 'GET', description: 'Get Instagram data' },
        { name: 'Facebook', endpoint: '/api/social/facebook', method: 'GET', description: 'Get Facebook information' },
        { name: 'LinkedIn', endpoint: '/api/social/linkedin', method: 'GET', description: 'Get LinkedIn data' },
        { name: 'Reddit', endpoint: '/api/social/reddit', method: 'GET', description: 'Get Reddit posts' },
        { name: 'TikTok', endpoint: '/api/social/tiktok', method: 'GET', description: 'Get TikTok data' }
    ],
    weather: [
        { name: 'Current Weather', endpoint: '/api/weather/current', method: 'GET', description: 'Get current weather' },
        { name: 'Weather Forecast', endpoint: '/api/weather/forecast', method: 'GET', description: 'Get weather forecast' },
        { name: 'Weather Maps', endpoint: '/api/weather/maps', method: 'GET', description: 'Get weather maps' },
        { name: 'Air Quality', endpoint: '/api/weather/air-quality', method: 'GET', description: 'Get air quality data' },
        { name: 'Weather Alerts', endpoint: '/api/weather/alerts', method: 'GET', description: 'Get weather alerts' }
    ],
    finance: [
        { name: 'Crypto Prices', endpoint: '/api/finance/crypto', method: 'GET', description: 'Get cryptocurrency prices' },
        { name: 'Stock Prices', endpoint: '/api/finance/stocks', method: 'GET', description: 'Get stock market data' },
        { name: 'Forex Rates', endpoint: '/api/finance/forex', method: 'GET', description: 'Get forex exchange rates' },
        { name: 'Market Data', endpoint: '/api/finance/market', method: 'GET', description: 'Get market overview' },
        { name: 'Portfolio', endpoint: '/api/finance/portfolio', method: 'POST', description: 'Manage portfolio' }
    ],
    education: [
        { name: 'Courses', endpoint: '/api/education/courses', method: 'GET', description: 'Find online courses' },
        { name: 'Tutorials', endpoint: '/api/education/tutorials', method: 'GET', description: 'Get tutorials' },
        { name: 'Scholarships', endpoint: '/api/education/scholarships', method: 'GET', description: 'Find scholarships' },
        { name: 'Universities', endpoint: '/api/education/universities', method: 'GET', description: 'Get university info' }
    ],
    health: [
        { name: 'BMI Calculator', endpoint: '/api/health/bmi', method: 'GET', description: 'Calculate BMI' },
        { name: 'Calorie Counter', endpoint: '/api/health/calories', method: 'POST', description: 'Count calories' },
        { name: 'Exercise Tracker', endpoint: '/api/health/exercise', method: 'POST', description: 'Track exercises' },
        { name: 'Health Tips', endpoint: '/api/health/tips', method: 'GET', description: 'Get health advice' }
    ],
    news: [
        { name: 'Latest News', endpoint: '/api/news/latest', method: 'GET', description: 'Get latest news' },
        { name: 'News by Category', endpoint: '/api/news/category', method: 'GET', description: 'Get news by category' },
        { name: 'News Sources', endpoint: '/api/news/sources', method: 'GET', description: 'Get news sources' },
        { name: 'Headlines', endpoint: '/api/news/headlines', method: 'GET', description: 'Get top headlines' }
    ],
    media: [
        { name: 'Random Images', endpoint: '/api/images/random', method: 'GET', description: 'Get random images' },
        { name: 'Image Search', endpoint: '/api/images/search', method: 'GET', description: 'Search images' },
        { name: 'Image Editor', endpoint: '/api/images/edit', method: 'POST', description: 'Edit images' },
        { name: 'Color Palette', endpoint: '/api/images/palette', method: 'GET', description: 'Generate color palettes' }
    ],
    development: [
        { name: 'JSON Test', endpoint: '/api/dev/json', method: 'GET', description: 'Get JSON test data' },
        { name: 'Echo Request', endpoint: '/api/dev/echo', method: 'GET', description: 'Echo request data' },
        { name: 'Headers Info', endpoint: '/api/dev/headers', method: 'GET', description: 'Get request headers' },
        { name: 'User Agent', endpoint: '/api/dev/useragent', method: 'GET', description: 'Get user agent info' }
    ],
    utility: [
        { name: 'IP Information', endpoint: '/api/util/ip', method: 'GET', description: 'Get IP details' },
        { name: 'Text Tools', endpoint: '/api/util/text', method: 'POST', description: 'Text manipulation tools' },
        { name: 'URL Parser', endpoint: '/api/util/url', method: 'GET', description: 'Parse URL components' },
        { name: 'Base64 Encoder', endpoint: '/api/util/base64', method: 'POST', description: 'Encode/decode Base64' }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Ladybird API v5 loaded successfully');
    initializeEventListeners();
    loadAPIStats();
});

// Initialize event listeners
function initializeEventListeners() {
    // Dark mode toggle
    const darkModeToggle = document.querySelector('[onclick="toggleDarkMode()"]');
    if (darkModeToggle) {
        darkModeToggle.onclick = toggleDarkMode;
    }

    // Donation button
    const donateButtons = document.querySelectorAll('[onclick*="showDonations"], [onclick*="processDonation"]');
    donateButtons.forEach(button => {
        button.addEventListener('click', showDonations);
    });

    // API category buttons
    const categoryButtons = document.querySelectorAll('[onclick*="showCategoryAPIs"]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showCategoryAPIs(category);
        });
    });

    // Explore APIs button
    const exploreButton = document.querySelector('[onclick*="exploreAPIs"]');
    if (exploreButton) {
        exploreButton.addEventListener('click', exploreAPIs);
    }

    // Modal close handlers
    const modal = document.getElementById('apiModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close button in modal
    const closeButton = document.querySelector('[onclick="closeModal()"]');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
}

// Load API statistics
async function loadAPIStats() {
    try {
        const response = await fetch('/api/endpoints');
        const data = await response.json();
        
        // Update stats in the UI
        const totalApisElement = document.querySelector('.text-3xl.font-bold.text-purple-600');
        if (totalApisElement) {
            totalApisElement.textContent = data.total + '+';
        }
        
        const categoriesElement = document.querySelector('.text-3xl.font-bold.text-blue-600');
        if (categoriesElement) {
            categoriesElement.textContent = Object.keys(data.categories).length;
        }
    } catch (error) {
        console.log('Could not load API stats, using defaults');
    }
}

// Dark mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update icon
    const darkModeIcon = document.querySelector('button[onclick="toggleDarkMode()"] i');
    if (darkModeIcon) {
        darkModeIcon.className = isDarkMode ? 'fas fa-sun text-gray-600' : 'fas fa-moon text-gray-600';
    }
}

// Load dark mode preference
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const darkModeIcon = document.querySelector('button[onclick="toggleDarkMode()"] i');
        if (darkModeIcon) {
            darkModeIcon.className = 'fas fa-sun text-gray-600';
        }
    }
}

// Show API category modal
function showCategoryAPIs(category) {
    const apis = apiData[category] || [];
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} APIs`;
    
    let html = '<div class="space-y-4">';
    apis.forEach(api => {
        html += `
            <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-lg">${api.name}</h4>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">${api.method}</span>
                </div>
                <p class="text-gray-600 mb-2">${api.description}</p>
                <div class="bg-gray-100 p-2 rounded font-mono text-sm mb-2">
                    <code>${api.endpoint}</code>
                </div>
                <div class="flex space-x-2">
                    <button onclick="testAPI('${api.endpoint}', '${api.method}')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                        <i class="fas fa-play mr-1"></i>Test API
                    </button>
                    <button onclick="copyToClipboard('${api.endpoint}')" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm">
                        <i class="fas fa-copy mr-1"></i>Copy
                    </button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    content.innerHTML = html;
    modal.classList.remove('hidden');
}

// Show all APIs
function exploreAPIs() {
    showAllAPIs();
}

function showAllAPIs() {
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = 'All Available APIs (150+)';
    
    let html = '<div class="space-y-6">';
    
    Object.keys(apiData).forEach(category => {
        html += `
            <div>
                <h3 class="text-xl font-bold mb-3 capitalize flex items-center">
                    <span class="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                    ${category} APIs (${apiData[category].length})
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        `;
        
        apiData[category].forEach(api => {
            html += `
                <div class="border rounded-lg p-3 hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="font-semibold">${api.name}</h4>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">${api.method}</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-1">${api.description}</p>
                    <div class="flex justify-between items-center">
                        <code class="text-xs bg-gray-100 p-1 rounded flex-1 mr-2">${api.endpoint}</code>
                        <button onclick="copyToClipboard('${api.endpoint}')" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-copy text-sm"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
    });
    
    html += '</div>';
    
    content.innerHTML = html;
    modal.classList.remove('hidden');
}

// Show donations modal
function showDonations() {
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = 'Support Ladybird API v5';
    
    content.innerHTML = `
        <div class="text-center">
            <div class="mb-6">
                <i class="fas fa-heart text-6xl text-red-500 animate-pulse"></i>
            </div>
            <h4 class="text-2xl font-bold mb-4">Thank you for your support!</h4>
            <p class="text-gray-600 mb-8 max-w-lg mx-auto">
                Your donations help us maintain and expand our API collection, 
                add new features, and keep the service running 24/7.
            </p>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border-2 border-green-200">
                <div class="flex items-center justify-center mb-6">
                    <i class="fas fa-mobile-alt text-5xl text-green-600 mr-4"></i>
                    <div class="text-left">
                        <div class="text-sm text-gray-600 font-medium">Ecocash Number</div>
                        <div class="text-3xl font-bold text-gray-800">+263 777 124 998</div>
                        <div class="text-xs text-gray-500 mt-1">Available 24/7</div>
                    </div>
                </div>
                <button onclick="processDonation()" class="px-10 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 text-lg shadow-lg transform hover:scale-105 transition-all">
                    <i class="fas fa-donate mr-3"></i>Donate Now
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow">
                    <i class="fas fa-coffee text-4xl text-amber-600 mb-3"></i>
                    <div class="font-bold text-xl mb-1">$5</div>
                    <div class="text-sm text-gray-600 font-medium">Coffee Support</div>
                    <div class="text-xs text-gray-500 mt-2">Keep us caffeinated and motivated!</div>
                </div>
                <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                    <i class="fas fa-star text-4xl text-blue-600 mb-3"></i>
                    <div class="font-bold text-xl mb-1">$25</div>
                    <div class="text-sm text-gray-600 font-medium">Premium Access</div>
                    <div class="text-xs text-gray-500 mt-2">Unlock all premium APIs and features</div>
                </div>
                <div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
                    <i class="fas fa-crown text-4xl text-purple-600 mb-3"></i>
                    <div class="font-bold text-xl mb-1">$100</div>
                    <div class="text-sm text-gray-600 font-medium">VIP Sponsor</div>
                    <div class="text-xs text-gray-500 mt-2">Priority support + exclusive features</div>
                </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <i class="fas fa-info-circle mr-2"></i>
                All donations are processed securely. You'll receive a confirmation email within 24 hours.
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

// Process donation form
function processDonation() {
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = 'Complete Your Donation';
    
    content.innerHTML = `
        <div class="max-w-md mx-auto">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-green-800 mb-3">
                    <i class="fas fa-check-circle mr-2"></i>Donation Instructions
                </h4>
                <ol class="list-decimal list-inside space-y-2 text-green-700 text-sm">
                    <li><strong>Send your desired amount</strong> to <code class="bg-green-100 px-1 rounded">+263 777 124 998</code> via Ecocash</li>
                    <li><strong>Include your name and email</strong> in the payment reference</li>
                    <li><strong>Fill out the form below</strong> so we can confirm your donation</li>
                    <li><strong>Premium features</strong> will be activated within 24 hours of confirmation</li>
                </ol>
            </div>
            
            <form onsubmit="submitDonation(event)" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-2">Your Name *</label>
                    <input type="text" name="name" required 
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                           placeholder="John Doe">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" name="email" required 
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                           placeholder="john@example.com">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Donation Amount (USD) *</label>
                    <select name="amount" required 
                            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="">Select amount</option>
                        <option value="5">$5 - Coffee Support</option>
                        <option value="25">$25 - Premium Access</option>
                        <option value="50">$50 - Advanced Features</option>
                        <option value="100">$100 - VIP Sponsor</option>
                        <option value="custom">Custom Amount</option>
                    </select>
                </div>
                <div id="customAmountDiv" class="hidden">
                    <label class="block text-sm font-medium mb-2">Custom Amount (USD)</label>
                    <input type="number" name="customAmount" min="1" step="0.01"
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                           placeholder="Enter amount">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Reference Number (Optional)</label>
                    <input type="text" name="reference"
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                           placeholder="Ecocash transaction reference">
                </div>
                <button type="submit" 
                        class="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    <i class="fas fa-paper-plane mr-2"></i>Submit Donation Information
                </button>
            </form>
            
            <div class="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
                <i class="fas fa-shield-alt mr-2"></i>
                Your information is secure and will only be used for donation confirmation and premium feature activation.
            </div>
        </div>
    `;
    
    // Handle custom amount selection
    setTimeout(() => {
        const amountSelect = document.querySelector('select[name="amount"]');
        const customAmountDiv = document.getElementById('customAmountDiv');
        const customAmountInput = document.querySelector('input[name="customAmount"]');
        
        if (amountSelect) {
            amountSelect.addEventListener('change', function() {
                if (this.value === 'custom') {
                    customAmountDiv.classList.remove('hidden');
                    customAmountInput.required = true;
                } else {
                    customAmountDiv.classList.add('hidden');
                    customAmountInput.required = false;
                    customAmountInput.value = '';
                }
            });
        }
    }, 100);
}

// Submit donation form
async function submitDonation(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    let amount = formData.get('amount');
    if (amount === 'custom') {
        amount = formData.get('customAmount');
        if (!amount) {
            alert('Please enter a custom amount');
            return;
        }
    }
    
    const donationData = {
        name: formData.get('name'),
        email: formData.get('email'),
        amount: amount,
        reference: formData.get('reference')
    };
    
    try {
        const response = await fetch('/api/donation/ecocash', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(donationData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showDonationConfirmation(result);
        } else {
            alert('Error processing donation. Please try again.');
        }
    } catch (error) {
        alert('Network error. Please check your connection and try again.');
    }
}

// Show donation confirmation
function showDonationConfirmation(data) {
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = '🎉 Donation Information Submitted!';
    
    content.innerHTML = `
        <div class="text-center py-8">
            <div class="mb-6">
                <i class="fas fa-check-circle text-6xl text-green-500"></i>
            </div>
            <h4 class="text-2xl font-bold mb-4">Thank you, ${data.donor}!</h4>
            <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <p class="text-green-800 mb-4">Your donation information has been submitted successfully.</p>
                <div class="text-left space-y-2 text-sm">
                    <p><strong>Next Step:</strong> Send <span class="font-bold text-lg">$${data.amount}</span> to:</p>
                    <p class="font-mono bg-white p-2 rounded border text-center text-lg">+263 777 124 998</p>
                    <p class="text-xs text-gray-600 mt-2">Please include "${data.email}" in the payment reference</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="p-4 bg-blue-50 rounded-lg">
                    <i class="fas fa-envelope text-2xl text-blue-600 mb-2"></i>
                    <div class="font-semibold">Confirmation</div>
                    <div class="text-sm text-gray-600">Email within 24 hours</div>
                </div>
                <div class="p-4 bg-purple-50 rounded-lg">
                    <i class="fas fa-rocket text-2xl text-purple-600 mb-2"></i>
                    <div class="font-semibold">Activation</div>
                    <div class="text-sm text-gray-600">Premium features enabled</div>
                </div>
                <div class="p-4 bg-green-50 rounded-lg">
                    <i class="fas fa-headset text-2xl text-green-600 mb-2"></i>
                    <div class="font-semibold">Support</div>
                    <div class="text-sm text-gray-600">Priority assistance</div>
                </div>
            </div>
            <button onclick="closeModal()" class="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
                <i class="fas fa-thumbs-up mr-2"></i>Got it!
            </button>
        </div>
    `;
}

// Test API functionality
function testAPI(endpoint, method = 'GET') {
    const testUrl = window.location.origin + endpoint;
    
    // Create test modal
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = '🧪 API Test Result';
    content.innerHTML = `
        <div class="space-y-4">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 class="font-semibold text-blue-800 mb-2">Testing API Endpoint</h4>
                <div class="font-mono text-sm bg-white p-2 rounded">${method} ${testUrl}</div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    <span class="text-sm text-gray-600">Making request...</span>
                </div>
                <div id="testResult" class="mt-4"></div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Make the API call
    fetch(testUrl)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('testResult');
            resultDiv.innerHTML = `
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-check-circle text-green-600 mr-2"></i>
                        <span class="font-semibold text-green-800">Success!</span>
                    </div>
                    <pre class="text-xs bg-white p-2 rounded overflow-x-auto">${JSON.stringify(data, null, 2)}</pre>
                </div>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('testResult');
            resultDiv.innerHTML = `
                <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-exclamation-circle text-red-600 mr-2"></i>
                        <span class="font-semibold text-red-800">Error</span>
                    </div>
                    <p class="text-sm text-red-700">${error.message}</p>
                </div>
            `;
        });
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary success message
        const button = event.target.closest('button');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check text-green-600"></i>';
        button.classList.add('text-green-600');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('text-green-600');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Close modal
function closeModal() {
    document.getElementById('apiModal').classList.add('hidden');
}

// View documentation
function viewDocumentation() {
    window.open('/API_DOCUMENTATION.md', '_blank');
}

// Additional utility functions
function showAPIKeys() {
    alert('API key management will be available in the next version. For now, add your keys in the .env file.');
}

function showPricing() {
    showDonations();
}

function showSupport() {
    const modal = document.getElementById('apiModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');
    
    title.textContent = 'Support & Help';
    content.innerHTML = `
        <div class="space-y-6">
            <div class="text-center">
                <i class="fas fa-headset text-6xl text-blue-600 mb-4"></i>
                <h3 class="text-2xl font-bold mb-2">How can we help you?</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <i class="fas fa-book text-3xl text-purple-600 mb-3"></i>
                    <h4 class="font-semibold mb-2">Documentation</h4>
                    <p class="text-sm text-gray-600 mb-3">Complete API reference and guides</p>
                    <button onclick="viewDocumentation()" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Read Docs →
                    </button>
                </div>
                
                <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <i class="fas fa-envelope text-3xl text-green-600 mb-3"></i>
                    <h4 class="font-semibold mb-2">Email Support</h4>
                    <p class="text-sm text-gray-600 mb-3">Get help via email</p>
                    <a href="mailto:support@ladybird-api.com" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        support@ladybird-api.com →
                    </a>
                </div>
                
                <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <i class="fas fa-bug text-3xl text-red-600 mb-3"></i>
                    <h4 class="font-semibold mb-2">Report Issues</h4>
                    <p class="text-sm text-gray-600 mb-3">Found a bug? Let us know!</p>
                    <a href="https://github.com/issues" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Report Bug →
                    </a>
                </div>
                
                <div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <i class="fas fa-comments text-3xl text-indigo-600 mb-3"></i>
                    <h4 class="font-semibold mb-2">Community</h4>
                    <p class="text-sm text-gray-600 mb-3">Join our Discord community</p>
                    <a href="#" class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Join Discord →
                    </a>
                </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4">
                <h4 class="font-semibold text-blue-800 mb-2">
                    <i class="fas fa-info-circle mr-2"></i>Frequently Asked Questions
                </h4>
                <div class="space-y-2 text-sm text-blue-700">
                    <details class="cursor-pointer">
                        <summary class="font-medium">How do I get API keys?</summary>
                        <p class="mt-2 ml-4">Add your API keys in the .env file or Render.com environment variables.</p>
                    </details>
                    <details class="cursor-pointer">
                        <summary class="font-medium">Is there a rate limit?</summary>
                        <p class="mt-2 ml-4">Yes, 1000 requests per IP per 15 minutes.</p>
                    </details>
                    <details class="cursor-pointer">
                        <summary class="font-medium">How do donations work?</summary>
                        <p class="mt-2 ml-4">Send to +263 777 124 998 via Ecocash, then submit the form for confirmation.</p>
                    </details>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

// Load dark mode preference on startup
loadDarkModePreference();
