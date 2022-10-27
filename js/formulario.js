const formulario = document.getElementById('formulario') ; 
const inputForm = document.getElementById('input-formulario') ;

const formularioCliente = data => { 
    formulario.addEventListener('keyup', e => {
        e.preventDefault() ; 
        const inputcliente = inputForm.value.toLowerCase() ; 
    
        const arrayFiltrado = data.filter( item => { 
            const infoApi = item.name.common.toLowerCase()
            if (infoApi.indexOf(inputcliente) !== -1) {
                return item
            }
        }) 
        banderillas(arrayFiltrado)
    })
}