// import handleResult from './handlers'; //dont need to add .js on da end cos we using parcel
import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';
const colorEl = document.querySelector('.colors');
function displayColors(colors) {
  return colors
    .map(
      color =>
        `<span class="color ${
          isDark(color) ? 'dark' : ''
        } ${color}" style="background:${color};" >${color}</span>`
    )
    .join('');
}
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  //see if their browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('sorry your browser doesnt support speech reco!');
    return;
  }
  //it does work
  console.log('starting...');
  //make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorEl.innerHTML = displayColors(colorsByLength);
