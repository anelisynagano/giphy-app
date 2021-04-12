- on App, fetch from giphy API. Don't forget to create your API key! http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=ryan+gosling&limit=5

- store fetched information on the state

- pass the state gifsArray down to Giflist as props

- iterate over a list of 5 gifs (from props), and display a Gif component for each element of the array on GifList.

//pause

- create a method handleSelectedGif that will receive an argument clickedGif.

- when clicking on a Gif, it updates the state with the clickedGif.

- show on SelectedGif component the clicked gif.
