import { series } from './data.js';
var seriesTable = document.getElementById("series");
var picAlter = document.getElementById('image');
var titleAlter = document.getElementById("title");
var descriptionAlter = document.getElementById("description");
var linkAlter = document.getElementById('channelLink');
mostrarSeries(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    var average = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td><strong>".concat(serie.id, "<strong></td>\n                                <td style = \"color:#547dde;\"><a id = \"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
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
botones();
function botones() {
    var _loop_1 = function (i) {
        var x = series[i];
        var boton = document.getElementById("".concat(x.id));
        if (boton) {
            boton.addEventListener('click', function () { return mostrarSeriesDinamico(boton.id); });
        }
    };
    for (var i = 0; i < series.length; i++) {
        _loop_1(i);
    }
}
function mostrarSeriesDinamico(id) {
    var actual = parseInt(id);
    var serie = series[actual - 1];
    if (serie) {
        picAlter.setAttribute('src', serie.image);
        titleAlter.innerHTML = serie.name;
        descriptionAlter.innerHTML = serie.description;
        linkAlter.setAttribute('href', serie.chLink);
        linkAlter.innerHTML = serie.chLink;
    }
}
