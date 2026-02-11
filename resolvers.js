import db from "./_db.js";
import { v4 as uuid } from "uuid";

export const resolvers = {
  Query: {
    games: () => db.games,
    game: (_, args) => db.games.find((g) => g.id === args.id),
    authors: () => db.authors,
    author: (_, args) => db.authors.find((a) => a.id === args.id),
    reviews: () => db.reviews,
    review: (_, args) => db.reviews.find((r) => r.id === args.id),
  },
  Game: {
    reviews: (root) => db.reviews.filter((r) => r.game_id === root.id),
  },
  Author: {
    reviews: (root) => db.reviews.filter((a) => a.author_id === root.id),
  },
  Review: {
    author: (root) => db.authors.find((a) => a.id === root.author_id),
    game: (root) => db.games.find((g) => g.id === root.game_id),
  },
  Mutation: {
    deleteGame: (_, args) => {
      db.games = db.games.filter((g) => g.id !== args.id);
      return db.games;
    },
    addGame: (_, args) => {
      let game = {
        ...args.game,
        id: uuid(),
      };
      db.games.push(game);
      return game;
    },
    updateGame: (_, args) => {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }

        return g;
      });

      return db.games.find((g) => g.id === args.id);
    },
  },
};
