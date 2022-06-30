/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Procediamo milestone per milestone senza invertire l'ordine.
Cerchiamo di fare almeno un commit per ogni milestone!
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

*/

const button = document.getElementById("gioca");
const grid = document.getElementById("grid");


const createCell = (number) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = number;
    return cell;
}


const rows = 10;
const cells = 10;
const totalCells = rows * cells;

button.addEventListener("click", function () {
    for (i = 1; i <= totalCells; i++) {
        const cell = createCell(i);

        cell.addEventListener("click", function () {
            cell.classList.toggle("clicked");

            console.log("hai cliccato la cella numero: " + cell.innerText);
        })

        grid.appendChild(cell);
    }
})