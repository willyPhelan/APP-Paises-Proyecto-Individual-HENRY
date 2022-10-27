const banderas = document.getElementById('banderas')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => { 
    try { 
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas (data) /*banderillas recibe la data de la api */
        formularioCliente(data)
        filtros(data)
    }
        catch(error) {
            console.log(error)
        }
    }

    const banderillas = data => { 
        let elementos = ''
        data.forEach(item => {
         elementos += `
         <article class="card">
         <img src="${item.flags.png}" alt="no-img" class="img-fluid">
           <div class='card-content'>
             <h3>${item.name.common}</h3>
             <p>
               <b>Population:</b> 
               ${item.population}
             </p>
             <p>
               <b>Capital City:</b>
               ${item.capital}
             </p> 
             <p>
               <b>Region:</b>
               ${item.region}
             </p> 
             <p>
             <a href="/js/pais.html?name=${item.name.common}">More Info</a>
           </p>
           </div>
 
       </article>
         `  
        });
        banderas.innerHTML = elementos
    }