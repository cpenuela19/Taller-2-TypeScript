

import { series } from './data.js'; 
import { Serie } from './Serie.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let picAlter:HTMLElement = document.getElementById('image')!;
let titleAlter:HTMLElement = document.getElementById("title")!;
let descriptionAlter: HTMLElement = document.getElementById("description")!;
let linkAlter: HTMLElement = document.getElementById('channelLink')!;
mostrarSeries(series);

function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let index: number = 0;
    let average: number = 0;

    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = ` <td><strong>${serie.id}<strong></td>
                                <td style = "color:#547dde;"><a id = "${serie.id}">${serie.name}</a></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        index++;
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    
    if(average != 0)
    {
        average = average/index;
    }
    let averageRow: HTMLElement = document.createElement("tr");
    averageRow.innerHTML = `Seasons average: ${average}`;
    seriesTbody.appendChild(averageRow);
}

botones();
function botones(): void{
    for (let i = 0; i < series.length; i++) {
        const x = series[i];
        const boton = document.getElementById(`${x.id}`);
        if (boton) {
            boton.addEventListener('click', () => mostrarSeriesDinamico(boton.id));
        }
    }
}

function mostrarSeriesDinamico(id: string){
    const actual = parseInt(id);
    const serie = series[actual - 1];

    if (serie) {
        picAlter.setAttribute('src', serie.image);
        titleAlter.innerHTML = serie.name;
        descriptionAlter.innerHTML = serie.description;
        linkAlter.setAttribute('href', serie.chLink);
        linkAlter.innerHTML = serie.chLink;
    }
}



