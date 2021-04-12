import Gif from "./Gif";

const GifList = ({ gifs }) => {
  return (
    <>
      {gifs.map((gifObject) => (
        <Gif {...gifObject} key={gifObject.id} />
      ))}
    </>
  );
};

export default GifList;
