const myKey = "a19ec8fc28b74418a00bce997f521171";
const submit = document.getElementById('submit');
const form = document.getElementById("formIngredients");
const firstIngredient = document.getElementById('firstIngredient');
const secondIngredient = document.getElementById('secondIngredient');
const thirdIngredient = document.getElementById('thirdIngredient');
const answer = document.getElementById('recipe');


async function sendForm() {
    const threeIngredients = [firstIngredient.value, secondIngredient.value, thirdIngredient.value];
    const ings = threeIngredients.join(",");
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${myKey}&ingredients=${ings}&number=1`);
    const recipes = await response.json();
    const theFinaleRecipe = recipes.map(recipe => recipe.title);
    answer.innerHTML = theFinaleRecipe + " 🎉";
}

function handleForm(event) { 
    event.preventDefault();
} 
form.addEventListener('submit', handleForm);


// const requestSpoonacular = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//         return null
//     }

//     const body = await response.json();
    
//     return body;
// }

// const main = async () => {
//     // request API pour aller chercher les ingrédients
//     const ingredients = await requestSpoonacular(`https://api.spoonacular.com/food/ingredients/search?apiKey=${myKey}&query=meat`);
    
//     // prendre 1 ingrédient au hasard dans la liste
//     const ingredient = ingredients.results[Math.floor(Math.random() * 10)].name;
//     // requête l'api pour aller chercher 3 recettes avec l'ingrédient précédent
//     const recipes = await requestSpoonacular(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${myKey}&ingredients=${ingredient}&number=3`);
//     console.log(ingredient)
//     console.log(recipes)
//     answer.innerHTML = recipes.map(recipe => recipe.title).join('\n');
// }
// main()