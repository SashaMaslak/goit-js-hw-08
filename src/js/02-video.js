import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(document.querySelector('#vimeo-player'));



const savedVideoTime = JSON.parse(localStorage.getItem(STORAGE_KEY));


if (savedVideoTime) {
   player.setCurrentTime(savedVideoTime);
}

function savePlayerTime(e) {
   localStorage.setItem(STORAGE_KEY, e.seconds);
}

   player.on('timeupdate', throttle(savePlayerTime, 1000));
