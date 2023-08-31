const logo = document.getElementById('company-name');

function getBigger (){
    logo.style.fontSize = '80px';
    logo.style.color = 'blue';
}

logo.addEventListener('mouseenter', getBigger);
logo.removeEventListener('mouseleave', getBigger);

// open / close cleaning directions
let open = document.getElementById('open');
let close = document.getElementById('close');
let care = document.getElementById('care');

let show = function (){
    close.style.display= 'inline';
    care.style.display= 'block';
};

function hide() {
    close.style.display = 'none';
    care.style.display = 'none';
}

open.addEventListener('click', show);
close.addEventListener('click', hide);




