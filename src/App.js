import { useEffect, useState } from "react";
import SelectedGif from "./components/SelectedGif";
import GifList from "./components/GifList";

function App() {
  const [gifsArray, setGifsArray] = useState([]);
  const fetchGifs = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=heisQsq9sm3Bysj1bpnfaIotU473CpYn&limit=5"
    )
      .then((res) => res.json())
      .then((data) => setGifsArray(data.data));
  };

  useEffect(fetchGifs, []);

  return (
    <div className='App'>
      <SelectedGif />
      <GifList gifs={gifsArray} />
    </div>
  );
}

export default App;
