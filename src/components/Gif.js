export default function Gif({ images, selectedGif }) {
  return (
    <img
      className='img'
      src={images.downsized_large.url}
      alt='gif'
      onClick={() => selectedGif(images.downsized_large.url)}
    />
  );
}
