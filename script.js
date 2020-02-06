const goedeAntwoorden = [
    "Parijs",
    "8",
    "IJsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]
];

function controle() {
    let counter = 0;
    let antwoordElementen = [];

    let hoofdstadElement = document.getElementById("hoofdstadAntwoord");
    antwoordElementen.push(hoofdstadElement);

    let potenElement = document.getElementById("potenAntwoord");
    antwoordElementen.push(potenElement);
    
    let meerElement = document.getElementById("meerAntwoord");
    antwoordElementen.push(meerElement);

    let merkElement = document.getElementById("merkAntwoord");
    antwoordElementen.push(merkElement); 
    // let merkAntwoord = merkElement.value.split(" ");
    // console.log(merkAntwoord);

    let eilandElement = document.getElementById("eilandAntwoord");
    antwoordElementen.push(eilandElement);
    // let eilandAntwoord = eilandElement.value.split(" ");
    // console.log(eilandAntwoord);
    
    for (let i = 0; i < goedeAntwoorden.length; i++) {
        if (i >= 3) {
            let gegevenAntwoorden = antwoordElementen[i].value.split(" ");
            console.log(gegevenAntwoorden);
            for (let j = 0; j < gegevenAntwoorden.length; j++) {
                if(goedeAntwoorden[i].includes(gegevenAntwoorden[j])) {
                    counter++;
                    antwoordElementen[i].style.backgroundColor = "lightgreen";
                } else {
                    antwoordElementen[i].style.backgroundColor= "red";
                }
            }
        } else {
            if (goedeAntwoorden[i] === antwoordElementen[i].value) {
                counter++;
                antwoordElementen[i].style.backgroundColor = "lightgreen"
            } else {
                antwoordElementen[i].style.backgroundColor = "red";
            }
        }
    }

    if (counter === 5) {
        document.getElementById("target").innerHTML = `Je hebt ${counter} antwoorden goed!`;
    } else {
        document.getElementById("target").innerHTML = `Sommige antwoorden zijn nog niet goed. Je had er ${counter} goed tho.`
    }
}