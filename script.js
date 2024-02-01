

var tricolourCanvas = document.getElementById('canvas');    // access the canvas object
  var tricolourCanvasContext = tricolourCanvas.getContext('2d');       // access the canvas context
  // Now do the real drawings:
//   tricolourCanvasContext.fillStyle = '#0055A4';    // set the color to blue
//   tricolourCanvasContext.fillRect ( 0, 0, 40, 90); // draw a blue rectangle on the left
//   tricolourCanvasContext.fillStyle = '#FFFFFF';    // set the color to white
//   tricolourCanvasContext.fillRect (40, 0, 40, 90); // draw a white rectangle in the middle
//   tricolourCanvasContext.fillStyle = '#EF4135';    // set the color to red
//   tricolourCanvasContext.fillRect (80, 0, 40, 90); // draw a red rectangle on the right   


  tricolourCanvasContext.fillStyle = '#FFFFFF';  
  tricolourCanvasContext.fillRect (0, 0, 90, 30);
  tricolourCanvasContext.fillStyle = '#0055A4';  
  tricolourCanvasContext.fillRect (0, 30, 90, 30);
  tricolourCanvasContext.fillStyle = '#EF4135';  
  tricolourCanvasContext.fillRect (0, 60, 90, 30);