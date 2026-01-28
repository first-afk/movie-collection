const movieGrid = document.getElementById("movie-grid");
const genreFilter = document.getElementById("genre-filter");
const movieCount = document.getElementById("movie-count");

async function loadMovieData() {
  try {
    const response = await fetch("js/data/movies.json");
    const data = await response.json();
    const movies = data.movies;

    populateGenreFilter(movies);
    displayMovies(movies);

    // 4. Set up the event listener inside so it has access to the 'movies' variable
    genreFilter.addEventListener("change", (e) => {
      const selectedGenre = e.target.value;
      const filtered =
        selectedGenre === "all"
          ? movies
          : movies.filter((m) => m.genre.includes(selectedGenre));
      displayMovies(filtered);
    });
  } catch (error) {
    console.error("Error loading the JSON file:", error);
    movieGrid.innerHTML =
      "<p>Failed to load movies. Make sure you are using a live server.</p>";
  }
}

// Function to render movie cards AND update the total count
function displayMovies(movies) {
  movieGrid.innerHTML = movies
    .map(
      (movie) => `
    <div class="movie-card">
      <img src="${movie.poster_url}" alt="${movie.title}">
      <div class="movie-content">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta"><span>${movie.release_year}</span></div>
        <div class="genres">
          ${movie.genre.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
        </div>
        <p style="font-size: 0.9rem; color: #ddd; margin-top: 10px;">${movie.description}</p>
      </div>
    </div>
  `,
    )
    .join("");

  // Update the total movie count every time movies are displayed
  movieCount.textContent = `Total Movies: ${movies.length}`;
}

// 2. Extract unique genres and populate the dropdown
function populateGenreFilter(movies) {
  const allGenres = movies.flatMap((m) => m.genre);
  const uniqueGenres = [...new Set(allGenres)].sort();

  uniqueGenres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

loadMovieData();
