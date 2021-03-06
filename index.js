const getRecipeBtn = document.querySelector("#getRecipeBtn")
const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const fetchRecipe = () => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.log(data))
}

getRecipeBtn.addEventListener("click", fetchRecipe)



/*
Plans:
1. Put the recipe in front end
2. Maybe have a local storage of meal data so user can go back and forth to see the recipe generated
3. --- Have login page for user to be able to like meal and have that stored in a db
*/