import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        movie={{
          title: "The Shawshank Redemption",
          release_date: "1994-09-23",
          url: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        }}
      />
    </>
  );
}

export default App;
