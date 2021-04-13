- follow this wireframe:
![](./public/wireframe.jpg)

- create the necessary components using this component tree diagram:
![](./public/component-tree.jpg)

- on `App`, fetch from giphy API. Don't forget to create your API key! The fetched url will look something like: `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=ryan+gosling&limit=5`

- store fetched information on the state

- pass the state `gifsArray` down to `GifList` as props

- on `GifList` iterate over the list of gifs (from props), and display a `Gif` component for each element of the array.

- on `App` create a method `handleSelectedGif` that will receive an argument `clickedGif`

- pass this method `handleSelectedGif` down to `Gif` component

- when clicking on a gif, it updates the state on `App` with the `clickedGif`.

- show on `SelectedGif` component the clicked gif.
