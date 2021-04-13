import Gif from "./Gif";

const GifList = ({ gifs, selectedGif }) => {
  return (
    <div className='rightContainer'>
      {gifs.map((gifObject) => (
        <Gif {...gifObject} key={gifObject.id} selectedGif={selectedGif} />
      ))}
    </div>
  );
};

export default GifList;
