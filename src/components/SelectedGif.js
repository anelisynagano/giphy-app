const SelectedGif = ({ selection }) => {
  return (
    <div className='leftContainer'>
      {selection.length > 0 ? (
        <img src={selection} alt='gif' />
      ) : (
        "Please select a gif"
      )}
    </div>
  );
};

export default SelectedGif;
