var tl = gsap.timeline();

tl.from('.img-2', 1.2, {
    opacity: 0,
    y: -150,
})
tl.from('.img-5', 1.2, {
    opacity: 0,
    y: 80,
})
tl.from('.img-3', 1.2, {
    opacity: 0,
    y: 200,
    
})
tl.from('.img-4', 1.2, {
    opacity: 0,
    y: -150,
})
tl.from('h1', 1.2, {
    opacity: 0,
    y: -150,
})
tl.from('h2', 1.2, {
    opacity: 0,
    y: -150,
})
const menu = document.querySelector('.menu');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    menu.classList.toggle('active');
}

let img2 = document.getElementsById('Im-2');
let img3 = document.getElementsById('Im-3');
let img4 = document.getElementsById('Im-4');
let img5 = document.getElementsById('Im-5');
let htext = document.getElementById('h1-text');
let hText = document.getElementById('h2-text');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    img2.style.marginTop = value * 2.5 + 'px';
    img3.style.left = value * 1.5 + 'px';
    img4.style.top = value * 2.5 + 'px';
    img5.style.left = value * -1.5 + 'px';
    htext.style.left = value * -1.5 + 'px';
    hText.style.left = value * -1.5 + 'px';
})


// Slider


var slider_img = document.querySelector('.slider-img');
var images = ['idali.jpg', 'vada.jpg', 'dhosa.jpeg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}