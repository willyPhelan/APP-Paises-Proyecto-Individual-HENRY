const btnDark = document.querySelector('.btn-dark-mode') ;

btnDark.addEventListener('click', () => { 
    console.log('diste click') ;
    document.body.classList.toggle('dark-mode') ; //toogle permite cambiar entre estilos

    // modo oscuro/dia 

    if(document.body.className === 'dark-mode') {

        btnDark.innerHTML = `
        <i class="fa-solid fa-sun"></i>
        Light Mode `

    }else { 
       

        btnDark.innerHTML = `
        <i class="fa-solid fa-moon"></i>
        Dark Mode `

    }
})