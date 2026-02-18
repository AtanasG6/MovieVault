import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard
          movie={{
            title: "The Shawshank Redemption",
            release_date: "1994-09-23",
            url: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
          }}
        />
      ) : (
        <MovieCard
          movie={{
            title: "The Lord of the Rings: The Return of the King",
            release_date: "2003-12-17",
            url: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
          }}
        />
      )}

      {/* {movieNumber === 1 && (
        <MovieCard
          movie={{
            title: "The Lord of the Rings: The Return of the King",
            release_date: "2003-12-17",
            url: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
          }}
        />
      )} */}
    </>
  );
}

export default App;
