export default function Gif({ images }) {
  return <img src={images.downsized_large.url} alt='gif' />;
}
