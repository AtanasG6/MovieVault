import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994-09-23",
      url: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    },
    {
      id: 2,
      title: "The Lord of the Rings: The Return of the King",
      release_date: "2003-12-17",
      url: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
    },
    {
      id: 3,
      title: "The Godfather",
      release_date: "1972-03-24",
      url: "https://m.media-amazon.com/images/I/41%2B%2B%2B%2B%2B%2B%2B%2BL._AC_.jpg",
    },
    {
      id: 4,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://m.media-amazon.com/images/I/51EbJjlL%2B%2BL._AC_.jpg",
    },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
