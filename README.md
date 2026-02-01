# 🎬 JavaScript Mastery Movie App

A beautiful and modern mobile movie discovery app built with React Native and Expo. Browse trending movies, search for your favorites, and explore detailed movie information powered by The Movie Database (TMDB) API.

![Movie App](https://img.shields.io/badge/React%20Native-0.81.5-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-~54.0.33-black?style=for-the-badge&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.9.2-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- 🏠 **Home Screen** - Discover trending movies and latest releases
- 🔍 **Smart Search** - Real-time movie search with debounced queries
- 📊 **Trending Movies** - View the most searched movies tracked via Appwrite
- 🎯 **Movie Details** - Comprehensive movie information including:
  - Movie poster and backdrop
  - Ratings and vote counts
  - Overview and genres
  - Budget and revenue
  - Production companies
- 💾 **Save Favorites** - Save your favorite movies (coming soon)
- 👤 **User Profile** - Manage your profile and preferences
- 🎨 **Beautiful UI** - Modern design with NativeWind (Tailwind CSS for React Native)
- 🌙 **Dark Mode Support** - Automatic theme switching

## 🛠️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tooling
- **Expo Router** - File-based routing system
- **TypeScript** - Type-safe JavaScript
- **NativeWind** - Tailwind CSS for React Native
- **React Navigation** - Navigation library

### Backend & APIs
- **Appwrite** - Backend-as-a-Service for tracking trending movies
- **TMDB API** - The Movie Database API for movie data

### Key Libraries
- `react-native-appwrite` - Appwrite SDK for React Native
- `expo-image` - Optimized image component
- `react-native-reanimated` - Smooth animations
- `expo-haptics` - Haptic feedback

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **iOS Simulator** (for Mac) or **Android Studio** (for Android development)
- **TMDB API Key** - Get one at [TMDB](https://www.themoviedb.org/settings/api)
- **Appwrite Account** - Sign up at [Appwrite](https://cloud.appwrite.io/)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd javascript_mastery_movie_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on your preferred platform**
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## ⚙️ Configuration

### TMDB API Setup
1. Visit [TMDB](https://www.themoviedb.org/) and create an account
2. Go to Settings → API → Request an API Key
3. Copy your API key and add it to `.env` as `EXPO_PUBLIC_MOVIE_API_KEY`

### Appwrite Setup
1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io/)
2. Create a new project
3. Create a database and collection with the following structure:
   - **Collection Attributes:**
     - `searchTerm` (String)
     - `movie_id` (Integer)
     - `title` (String)
     - `count` (Integer)
     - `poster_url` (String)
4. Copy your Project ID, Database ID, and Collection ID to `.env`

## 📱 Usage

### Home Screen
- Browse **Trending Movies** based on search popularity
- View **Latest Movies** in a grid layout
- Tap the search bar to navigate to the search screen

### Search
- Type in the search bar to find movies
- Results update automatically as you type (debounced)
- Search queries are tracked to determine trending movies

### Movie Details
- Tap any movie card to view detailed information
- See ratings, genres, budget, revenue, and more
- Navigate back using the "Go Back" button

## 📁 Project Structure

```
javascript_mastery_movie_app/
├── app/                    # Expo Router app directory
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx     # Home screen
│   │   ├── search.tsx    # Search screen
│   │   ├── save.tsx      # Saved movies screen
│   │   └── profile.tsx   # Profile screen
│   ├── movie/            # Movie detail screens
│   │   └── [id].tsx     # Dynamic movie detail route
│   └── _layout.tsx       # Root layout
├── components/           # Reusable components
│   ├── MovieCard.tsx    # Movie card component
│   ├── TrendingCard.tsx # Trending movie card
│   └── SearchBar.tsx    # Search bar component
├── services/            # API and service files
│   ├── api.ts          # TMDB API functions
│   ├── appwrite.ts     # Appwrite database functions
│   └── usefetch.ts     # Custom fetch hook
├── constants/          # Constants and assets
│   ├── icons.ts        # Icon imports
│   └── images.ts       # Image imports
├── assets/            # Static assets
│   ├── icons/         # App icons
│   └── images/        # App images
└── package.json       # Dependencies and scripts
```

## 🎯 Key Features Explained

### Trending Movies Algorithm
The app tracks search queries in Appwrite and displays the most frequently searched movies as "Trending Movies". Each search increments a count, and the top 5 unique movies are displayed on the home screen.

### Debounced Search
Search queries are debounced by 500ms to reduce API calls and improve performance while typing.

### Image Optimization
Uses `expo-image` for optimized image loading and caching, improving app performance.

## 🐛 Troubleshooting

### Common Issues

**Issue: API key not working**
- Ensure your `.env` file is in the root directory
- Restart the Expo development server after adding environment variables
- Verify your API key is correct and has proper permissions

**Issue: Appwrite connection failed**
- Check your Appwrite project ID, database ID, and collection ID
- Ensure your Appwrite project is active
- Verify collection attributes match the expected schema

**Issue: Images not loading**
- Check your internet connection
- Verify TMDB API is accessible
- Ensure image URLs are properly formatted

## 📚 Learning Resources

This project was created following the tutorial by JavaScript Mastery:
- [YouTube Tutorial](https://www.youtube.com/watch?v=f8Z9JyB2EIE)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **JavaScript Mastery** - For the excellent tutorial
- **TMDB** - For providing the movie database API
- **Appwrite** - For the backend infrastructure
- **Expo Team** - For the amazing development platform

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Made with ❤️ using React Native and Expo
