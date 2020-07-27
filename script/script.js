import {radioPlayerInit} from './radioPlayer.js';
import {videoPlayerInit} from './videoPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
    playerBlock = document.querySelectorAll('.player-block'),
    temp = document.querySelector('.temp');


const deactivationPlayer = () => {
    playerBlock.forEach(item => item.classList.remove('active'));
    playerBtn.forEach(item => item.classList.remove('active'));
};


playerBtn.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        deactivationPlayer();
        elem.classList.add('active');
        playerBlock[i].classList.add('active');
        temp.style.display = 'none';
    });
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();
