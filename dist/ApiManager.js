class ApiManager { 
    getIngredient = (ingredient) => $.get(`/recipes/${ingredient}`)
}