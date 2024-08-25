async function fetchPokemonData(){
    let pImg = document.querySelector(".pImg");
    let pName = document.querySelector(".pName");
    let pWeight = document.querySelector(".pWeight");
    let pHeight = document.querySelector(".pHeight");
    let pId = document.querySelector(".pId");

    let pokemonName = document.querySelector(".search").value.toLowerCase();
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Falied To fetch Data.")
        }

        const json = await response.json();
        pImg.src = json.sprites.front_default;
        pName.textContent = `Name: ${json.name}`
        pId.textContent = `Id: ${json.id}`
        pWeight.textContent = `Weight: ${json.weight}`
        pHeight.textContent = `Height: ${json.height}`
    }
    catch(error){
        console.error(error);
    }

}
let btn = document.querySelector(".btn");
btn.addEventListener('click',()=>{
    fetchPokemonData();
})