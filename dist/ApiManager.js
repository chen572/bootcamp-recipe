class ApiManager {
    constructor() {

    }

    getIngredient(ingredient) {
        return $.get(`/recipes/${ingredient}`)
            .then(data => data.results
                .map(r => ({
                    ingredients: r.ingredients,
                    title: r.title,
                    thumbnail: r.thumbnail,
                    href: r.href
        })))
    }
}