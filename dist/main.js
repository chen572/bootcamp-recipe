const apiManager = new ApiManager()
const renderer = new Renderer($('#recipes-template'))

$('#search').click(() => {
    const ingredient = $('#ingredient-input').val()
    apiManager.getIngredient(ingredient)
        .then((data) => { renderer.render(data) })
        .catch((e) => { console.log(e) })
})

$('#recipes-container').on('click', '.recipes-img', event => {
    const ingredient = $(event.currentTarget).siblings('.ingredients-list').children()[0]
    console.log($(ingredient).text())
})

$('body').on('click', '.dark, .light', () => {
    $('body').toggleClass('lightMode')
})