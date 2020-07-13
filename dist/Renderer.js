class Renderer {
    constructor(source) {
        this.template = Handlebars.compile(source.html())
    }

    render(data) {
        const newHTML = this.template({ data })
        $('#recipes-container').empty().append(newHTML)
    }
}