// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...

// 1. Filter movies with rating ≥ 8
const highRatedMovies = movies.filter(movie => movie.rating >= 8);
console.log("High Rated Movies (≥ 8):", highRatedMovies);

// 2. Create formatted list: "Inception (Sci-Fi) - 8.8 ⭐"
const formattedList = highRatedMovies.map(
  movie => `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`
);
console.log("Formatted Movie List:", formattedList);

// 3. Function: recommend(movie, minRating = 8)
const recommend = (movie, minRating = 8) => movie.rating >= minRating;
