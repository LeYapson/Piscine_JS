let circular = {
    circular: null
  };
  
  circular.circular = circular; //set circular a circular
  console.log(circular.circular); // => getter on circular
  console.log(circular === circular.circular); // => true
  