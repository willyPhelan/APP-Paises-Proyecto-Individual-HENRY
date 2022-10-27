const banderas = document.getElementById('banderas') ; 

const query = new URLSearchParams(window.location.search) ;

const params = query.get('name') ; 
console.log(params)

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => { 
    try { 
        const res = await fetch('api.json')
        const data = await res.json()

        const filtroData = data.filter(item => item.name.common === params)

        banderillas (filtroData) /*banderillas recibe la data de la api */
        
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
            
           </p>
           </div>
 
       </article>
         `  
        });
        banderas.innerHTML = elementos
    }