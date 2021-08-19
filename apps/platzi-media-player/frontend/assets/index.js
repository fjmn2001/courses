import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video, plugins: [
        new AutoPlay()
    ]
});

const playPauseButton = document.querySelector('#playPause');
const muteUmuteButton = document.querySelector('#muteUnmute');

playPauseButton.onclick = () => player.togglePlay();
muteUmuteButton.onclick = () => player.toggleMute();