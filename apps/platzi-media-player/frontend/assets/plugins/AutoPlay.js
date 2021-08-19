const autoPlay = function () {
}

autoPlay.prototype.run = (player) => {
    player.mute()
    player.play()
}

export default autoPlay