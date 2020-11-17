let time;

/*function wallPaper() {
    if((+time.slice(0, 2) >= 0 && +time.slice(0, 2) <= 4 && +time.slice(3,5) === 0 && +time.slice(6,8) === 0) || (+time.slice(0, 2) === 23 && +time.slice(3,5) === 0 && +time.slice(6,8) === 0)){
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.add('night');
    } else if(+time.slice(0, 2) >= 5 && +time.slice(0, 2) <= 10 && +time.slice(3,5) === 0 && +time.slice(6,8) === 0) {
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('morning');
    } else if(+time.slice(0, 2) >= 11 && +time.slice(0, 2) <= 16 && +time.slice(3,5) === 0 && +time.slice(6,8) === 0) {
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('day');
    } else if(+time.slice(0, 2) >= 17 && +time.slice(0, 2) <= 22 && +time.slice(3,5) === 0 && +time.slice(6,8) === 0) {
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('evening');
    }
}*/

function setWallPaper() {
    if((+time.slice(0, 2) >= 0 && +time.slice(0, 2) <= 4) || +time.slice(0, 2) === 23){
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.add('night');
    } else if(+time.slice(0, 2) >= 5 && +time.slice(0, 2) <= 10) {
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('morning');
    } else if(+time.slice(0, 2) >= 11 && +time.slice(0, 2) <= 16) {
        document.querySelector('.wallpaper').classList.remove('evening');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('day');
    } else if(+time.slice(0, 2) >= 17 && +time.slice(0, 2) <= 22) {
        document.querySelector('.wallpaper').classList.remove('day');
        document.querySelector('.wallpaper').classList.remove('morning');
        document.querySelector('.wallpaper').classList.remove('night');
        document.querySelector('.wallpaper').classList.add('evening');
    }
}

window.onload = () => {
    time = document.querySelector('.time').innerText;
    setWallPaper();
}