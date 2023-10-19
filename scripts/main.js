import { series } from './data.js';
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    console.log("T\u00EDtulo: ".concat(serie.name));
    console.log("Canal: ".concat(serie.channel));
    console.log("Temporadas: ".concat(serie.seasons));
    console.log("Descripci\u00F3n: ".concat(serie.description));
    console.log("Enlace al sitio web: ".concat(serie.chLink));
    console.log("Enlace a la imagen: ".concat(serie.image));
    console.log('---');
}
var seriesTable = document.getElementById("series");
mostrarSeries(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    var average = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td><strong>".concat(serie.id, "<strong></td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        index++;
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    if (average != 0) {
        average = average / index;
    }
    var averageRow = document.createElement("tr");
    averageRow.innerHTML = "Seasons average: ".concat(average);
    seriesTbody.appendChild(averageRow);
}
