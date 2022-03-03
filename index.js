let number = 10;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;
requestPokemons();


const button = document.querySelector('.request');
button.addEventListener('click', function() {
    number = number + 10;
    url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;
    requestPokemons();
});


const buscarbtn = document.querySelector('.buscar');
let input = document.querySelector('.input');


buscarbtn.addEventListener('click', function() {
    let name = input.value; 
   
    url2 = `https://pokeapi.co/api/v2/pokemon/${name}`;
    console.log(url2);
    pokemonprint();
    
});

// pokemon buscado en la barra

function pokemonprint() {
   test = axios.get(url2)
        .then(function (Response) {

            const infod = Response.data;
            

          
            const div_der = document.querySelector('.div_der');
            
        
           
          
        
            
            div_der.innerHTML = div_der.innerHTML + `

               <div class="info">
                <h1>${infod.name}</h1>
               

                <img class="imagen-bus" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${infod.id}.png">


                <p><span>Altura</span> <span>${infod.height}</span> </p>
                <p><span>Peso</span> <span>${infod.weight}</span></p>
               <p> <span>Tipo</span> <span>${infod.types[0].type.name}</span></p>
                <p><span>Habilidades</span> <span>${infod.abilities[0].ability.name}</span>
                <span>${infod.abilities[1].ability.name}</span></p>
                </div>
            `;
         
            
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}






function requestPokemons() {
    axios.get(url)
        .then(function (response) {
            const pokemons = response.data.results;
            console.log(pokemons);
            const list = document.querySelector('.list');
            list.innerHTML = '';
            pokemons.forEach(function (pokemon, number) {
                console.log(pokemon);
                const pokemon_div = `
                <div class="div">
                <h1>${pokemon.name}</h1>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number + 1}.png">
                </div>
            `;

            
                list.innerHTML = list.innerHTML + pokemon_div;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}




// click en un pokemon y que genere tarjeta de info
// no pone el click a los divs, coge la lista completa


// const pok_d = document.querySelectorAll('.div');
// const list = document.querySelectorAll('.list');
// console.log(pok_d);


// pok_d.forEach(function(pokemon_div, key) {
//     console.log(pok_d);
    
//    pokemon_div.addEventListener('click', function(e) {
//        console.log(pokemon_div);
//         console.log(list);
//        console.log(pokemon_div);

//        alert(key);

//       document.querySelector('.info').innerHTML = `



//         <h1>${pokemon[id].name}</h1>
//         <img src="${pokemon[key].image}">
//         <p>${pokemon[key].description}</p>
//       `;
//     });
//   });
  
