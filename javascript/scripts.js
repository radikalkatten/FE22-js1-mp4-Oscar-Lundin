let buttonAnimation = anime({
  targets: 'button',
  translateY: 140,
  rotate: 40,
  delay: anime.stagger(200, {start: 200}),
  loop: 1,
  autoplay: false,
})

let nameAnimation = anime({
  targets: '.nameContainer',
  translateY: 270,
  delay: 100,
  easing: 'easeOutBounce',
  autoplay: false,
})

let nameAnimation2 = anime({
  targets: '.nameContainer',
  delay: 4000,
  width: '25%',
  duration: 1000,
  autoplay: false,
})

let letterAnimation = anime({
  targets: '.nameLetter',
  delay: anime.stagger(200, {start: 1000}),
  duration: 2000,
  easing: 'linear',
  keyframes: [
    {scale: 1.4},
    {scale: 1},
    {color: 'rgb(245, 132, 3)'},
    {translateY: 25},
    {translateY: -25},
  ],
  autoplay: false,
})

let garfAnimation = anime({
  targets: '#garf',
  delay: 5000,
  opacity: 1,
  duration: 10000,
  autoplay: false,
})

let garfAnimation2 = anime({
  targets: '#garf',
  delay: 10000,
  keyframes: [
    {scale: 1.5},
    {translateX: '45vw'},
  ],
  autoplay: false,
})

document.querySelector('#play').onclick = () => {
  buttonAnimation.play();
  nameAnimation.play();
  nameAnimation2.play();
  letterAnimation.play();
  garfAnimation.play();
  garfAnimation2.play();
}
document.querySelector('#pause').onclick = () => {
  buttonAnimation.pause();
  nameAnimation.pause();
  nameAnimation2.pause();
  letterAnimation.pause();
  garfAnimation.pause();
  garfAnimation2.pause();
}
document.querySelector('#reset').onclick = () => {
  buttonAnimation.reset();
  nameAnimation.reset();
  nameAnimation2.reset();
  letterAnimation.reset();
  garfAnimation.reset();
  garfAnimation2.reset();
}