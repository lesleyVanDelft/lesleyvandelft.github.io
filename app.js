const hamburgerOpen = document.querySelector('.open');
const hamburgerClose = document.querySelector('.close');
const nav = document.querySelector('.nav-list');

hamburgerOpen.addEventListener('click', () =>{
    nav.classList.add('active');
});
hamburgerClose.addEventListener('click', () => {
    nav.classList.remove('active');
});

//scroll to top button
const btnToTop = document.getElementById('button-top');


window.onscroll = function (){
    btnToTop.style.display = "none"
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        btnToTop.style.display = "block";
    }else{
        btnToTop.style.display = "none";
    }
}

window.scrollTo({top: 0, behavior: 'smooth'});


function toTopFunction(){
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

