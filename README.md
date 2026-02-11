# 🎮 GraphQL Games Platform

A modern, feature-rich GraphQL API for managing games, reviews, and authors. Built with Apollo Server and Node.js, this platform provides a complete backend solution for a gaming review system.

## ✨ Features

- **GraphQL API**: Efficient, flexible data fetching with Apollo Server
- **Game Management**: CRUD operations for games with multi-platform support
- **Review System**: Comprehensive rating and review functionality
- **Author Management**: Verified author profiles with review history
- **Real-time Relationships**: Nested queries for games, reviews, and authors
- **Modern ES6**: Built with ES modules and latest JavaScript features

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Eng-Nhshl/Games-Platform.git
   cd graphql-games-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode with hot reload
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Open GraphQL Playground**
   Navigate to `http://localhost:4000` in your browser to access the GraphQL playground.

## 📊 API Overview

### Schema

The API exposes three main types:

#### Game
```graphql
type Game {
  id: ID!
  title: String!
  platform: [String!]!
  reviews: [Review!]
}
```

#### Review
```graphql
type Review {
  id: ID!
  rating: Int!
  content: String!
  game: Game!
  author: Author!
}
```

#### Author
```graphql
type Author {
  id: ID!
  name: String!
  verified: Boolean!
  reviews: [Review!]
}
```

### Queries

- **Get all games**: `games`
- **Get single game**: `game(id: ID!)`
- **Get all reviews**: `reviews`
- **Get single review**: `review(id: ID!)`
- **Get all authors**: `authors`
- **Get single author**: `author(id: ID!)`

### Mutations

- **Add game**: `addGame(game: AddGameInput!)`
- **Update game**: `updateGame(id: ID!, edits: editGameInput!)`
- **Delete game**: `deleteGame(id: ID!)`

## 🎯 Example Queries

### Get all games with their reviews
```graphql
query {
  games {
    id
    title
    platform
    reviews {
      rating
      content
      author {
        name
        verified
      }
    }
  }
}
```

### Add a new game
```graphql
mutation {
  addGame(game: {
    title: "The Legend of Zelda: Breath of the Wild"
    platform: ["Switch", "Wii U"]
  }) {
    id
    title
    platform
  }
}
```

### Get reviews by a verified author
```graphql
query {
  authors(verified: true) {
    name
    reviews {
      rating
      content
      game {
        title
      }
    }
  }
}
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **GraphQL**: Apollo Server v5
- **Language**: JavaScript (ES Modules)
- **Data**: In-memory database with mock data
- **UUID**: Unique identifier generation

## 📁 Project Structure

```
Games-Platform/
├── index.js          # Server entry point
├── schema.js         # GraphQL type definitions
├── resolvers.js      # GraphQL resolvers
├── _db.js           # Mock database
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## 🎮 Sample Data

The platform comes pre-loaded with:

- **5 Games**: Including Zelda, Final Fantasy, Elden Ring, Mario Kart, and Pokémon
- **3 Authors**: Mario, Yoshi, and Peach (with verification status)
- **7 Reviews**: Various ratings across different games

## 🔧 Development

### Running in Development Mode

```bash
npm run dev
```

This starts the server with file watching for hot reloading.

### Project Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with watch mode

## 🚀 Deployment

This application can be deployed to any Node.js hosting platform:

- **Vercel**
- **Heroku**
- **AWS Lambda**
- **Google Cloud Functions**
- **DigitalOcean**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎯 Future Enhancements

- [ ] Add authentication and authorization
- [ ] Implement persistent database (MongoDB/PostgreSQL)
- [ ] Add pagination for large datasets
- [ ] Implement GraphQL subscriptions for real-time updates
- [ ] Add input validation and error handling
- [ ] Create comprehensive test suite
- [ ] Add API documentation with Swagger
- [ ] Implement rate limiting
- [ ] Add caching layer

---

**Built with ❤️ using GraphQL and Apollo Server**
