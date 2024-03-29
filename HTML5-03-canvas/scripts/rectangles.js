/**
 * (c) Copyright 2004-2019 Antonio Bueno  https://www.antoniobs.net
 */

 function Rectangles() {
    var canvas, context;
canvas = document.getElementById('canvas');

if (Modernizr.canvas) {

  context = canvas.getContext('2d');

  // red box
  context.fillStyle = 'rgb(500,0,0)';
  context.fillRect(
      50,     // x coord
      50,     // y coord
      100,    // width
      100);   // height

  // blue box (with transparency)
  context.fillStyle = 'rgba(0, 0, 500, 0.5)';
  context.fillRect(
      80,     // x coord
      80,     // y coord
      100,    // width
      100);   // height

  // clear box
  context.clearRect(
      115,    // x coord
      115,    // y coord
      20,     // width
      20);    // height

  // green outline
  context.strokeStyle = 'rgb(51,153,0)';
  context.lineWidth = 6;
  context.strokeRect(115, 115, 20, 20);
}
}