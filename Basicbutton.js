const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
   
    btn.style.backgroundColor='red';
    btn.style.boxShadow ='0 0 20px green ';
    btn.style.transition ='.3s ease';

});