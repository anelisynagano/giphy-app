import { useEffect, useState } from "react";
import SelectedGif from "./components/SelectedGif";
import GifList from "./components/GifList";
import "./App.css";

//- create a function handleSelectedGif that will receive an argument clickedGif.
// - when clicking on a Gif, it updates the state with the clickedGif.
// - show on SelectedGif component the clicked gif.
function App() {
  const [gifsArray, setGifsArray] = useState([]);
  const [userSelection, setUserSelection] = useState("");

  const fetchGifs = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=heisQsq9sm3Bysj1bpnfaIotU473CpYn&limit=5"
    )
      .then((res) => res.json())
      .then((data) => setGifsArray(data.data));
  };

  useEffect(fetchGifs, []);

  const handleSelectedGif = (clickedGif) => {
    setUserSelection(clickedGif);
  };

  return (
    <div className='App'>
      <SelectedGif selection={userSelection} />
      <GifList gifs={gifsArray} selectedGif={handleSelectedGif} />
    </div>
  );
}

export default App;
