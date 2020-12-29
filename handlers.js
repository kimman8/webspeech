//HANDLERS.JS
import { isValidColor } from './colors';
function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);

  const words = results[results.length - 1][0].transcript;
  //lowercase everything
  let color = words.toLowerCase();
  //strip any spaces out
  color = color.replace(/\s/g, '');
  //check if valid color
  if (!isValidColor(color)) return;
  // const colorSpan = document.querySelector(`.${color}`);
  const colorSpan = document.getElementsByClassName(color)[0];
  console.log(colorSpan);
  console.log('it i s yay');
  console.log(color);
  colorSpan.classList.add('got');
  //change da background color
  document.body.style.backgroundColor = color;

  //if it is then show da UI for that
}
// import { isValidColor } from './colors-FINISHED';

// function logWords(results) {
//   // console.log(results[results.length - 1][0].transcript);
// }

// export function handleResult({ results }) {
//   logWords(results);
//   const words = results[results.length - 1][0].transcript;
//   // lowercase everything
//   let color = words.toLowerCase();
//   // strip any spaces out
//   color = color.replace(/\s/g, '');
//   // check if it is a valid colour
//   if (!isValidColor(color)) return; // thats all folks
//   // if it is, then show the UI for that
//   const colorSpan = document.querySelector(`.${color}`);
//   colorSpan.classList.add('got');
//   console.log(colorSpan);
//   console.log('This is a valid color!');
//   console.log(color);
//   // change the background color
//   document.body.style.backgroundColor = color;
// }
