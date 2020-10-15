var menuburguer = document.querySelector('.menu');

const burguerBtn = document.querySelector('.burguer-menu');


burguerBtn.addEventListener('click', hideShow);

function hideShow(){
    if(menuburguer.classList.contains('isactive')){
        menuburguer.classList.remove('isactive');
    }else{
        menuburguer.classList.add('isactive');
    }
}