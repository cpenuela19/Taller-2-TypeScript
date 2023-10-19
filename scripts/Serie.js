//Una clase Serie con todos los atributos que le permita manejar los datos de una serie (10%)
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, chLink, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.chLink = chLink;
        this.image = image;
    }
    return Serie;
}());
export { Serie };
