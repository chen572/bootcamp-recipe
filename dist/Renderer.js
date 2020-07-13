class Renderer {
    constructor(source) {
        this.template = Handlebars.compile(source.html())
    }

    render(data) {
        $('#recipes-container').empty().append(this.template({ data }))
    }
}