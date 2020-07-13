const apiManager = new ApiManager()
const renderer = new Renderer($('#recipes-template'))

let lightMode = JSON.parse(localStorage.lightMode || 'false')

$('#search').click(() => {
    const ingredient = $('#ingredient-input').val()
    apiManager.getIngredient(ingredient)
    .then((data) => { renderer.render(data) })
    .catch((e) => { console.log(e) })
})

$('#recipes-container').on('click', '.recipes-img', event => {
    console.log($(event.currentTarget).siblings('.ingredients-list').children()[0].text())
})

$('body').on('click', '.dark, .light', () => {
    $('body').toggleClass('lightMode')
    lightMode = !lightMode
    localStorage.lightMode = JSON.stringify(lightMode)
})

lightMode ? $('body').addClass('lightMode') : $('body').removeClass('lightMode')