

import { series } from './data.js'; 
import { Serie } from './Serie.js';
for (const serie of series) {
  console.log(`Título: ${serie.name}`);
  console.log(`Canal: ${serie.channel}`);
  console.log(`Temporadas: ${serie.seasons}`);
  console.log(`Descripción: ${serie.description}`);
  console.log(`Enlace al sitio web: ${serie.chLink}`);
  console.log(`Enlace a la imagen: ${serie.image}`);
  console.log('---');
}

let seriesTable: HTMLElement = document.getElementById("series")!;
mostrarSeries(series);

function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let index: number = 0;
    let average: number = 0;

    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = ` <td><strong>${serie.id}<strong></td>
                                <td>${serie.name}</td>
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
