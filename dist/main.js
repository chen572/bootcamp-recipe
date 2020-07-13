const apiManager = new ApiManager()

$('#search').click(() => {
    const ingredient = $('#ingredient-input').val()
    apiManager.getIngredient(ingredient).then((data) => { console.log(data) })
})