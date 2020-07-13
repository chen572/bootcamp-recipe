const apiManager = new ApiManager()
const renderer = new Renderer($('#recipes-template'))

$('#search').click(() => {
    const ingredient = $('#ingredient-input').val()
    apiManager.getIngredient(ingredient).then((data) => { renderer.render(data) })
})