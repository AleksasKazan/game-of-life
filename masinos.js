"use strict";

function Masina(pavadinimas, maxGreitis) {
    this.pavadinimas = pavadinimas;
    this.maxGreitis = maxGreitis;
    this.greitis = 0;
    this.kelias = 0;
    this.gazuojam = function(kiek) {
        this.greitis += kiek;
    }
    this.stabdom = function(kiek) {
        this.greitis -= kiek;
    }
    this.vaziuojam = function() {
        this.kelias += this.greitis;
    }
}

let zigulys = new Masina("Zigulys", 160);
let ford = new Masina("Ford", 240);
let audi = new Masina("audi", 230);
let bmw = new Masina("bmw", 260);
let citroen = new Masina("citroen", 200);
let saab = new Masina("saab", 245);
let volvo = new Masina("volvo", 255);
let vw = new Masina("vw", 210);

var carSet = [
    zigulys,
    ford,
    audi,
    bmw,
    citroen,
    saab,
    volvo,
    vw
];

while (carSet[0].kelias < 1000) {
    for (var i = 0; i < carSet.length; i++) {
        let arGazuojam = Math.floor(Math.random() * 100) + 1;
        let kiekGazuojam = Math.floor(Math.random() * 10) + 1;
        let kiekStabdom = Math.floor(Math.random() * 5) + 1;
        if (arGazuojam > 20) {
            if (carSet[i].greitis + kiekGazuojam <= carSet[i].maxGreitis) {
                carSet[i].gazuojam(kiekGazuojam);
                // console.log(i + " " + arGazuojam + "  gazuojam:   " + kiekGazuojam);
            } else {
                kiekGazuojam = carSet[i].maxGreitis - carSet[i].greitis;
                carSet[i].gazuojam(kiekGazuojam);
                // console.log(i + " " + arGazuojam + "   MAXgaz  :   " + kiekGazuojam);
            }
        } else {
            if (carSet[i].kelias >= kiekStabdom) {
                carSet[i].stabdom(kiekStabdom);
                // console.log(i + " " + arGazuojam + "  stabdom     " + kiekStabdom);
            } else if (carSet[i].greitis < kiekStabdom) {
                carSet[i].stabdom(carSet[i].greitis);
                // console.log(i + " " + arGazuojam + "  riedam:      " + kiekStabdom);
            } else
                console.log(i + " " + arGazuojam + "  nieko nedarom " + kiekStabdom);
        }
        carSet[i].vaziuojam();
        carSet = carSet.sort((a, b) => b.kelias - a.kelias);
        let zymaN00 = (Math.floor(carSet[0].kelias / 100)) * 100;
        // console.log(zymaN00);
        // console.log(zymaN00 != ((Math.floor((carSet[0].kelias + carSet[0].greitis) / 100)) * 100));
        if ((zymaN00 > 0) && (carSet[0].kelias > zymaN00)) {
            if (carSet[i].kelias == carSet[0].kelias)
            // console.log((Math.floor(carSet[i].kelias / 100)) * 100);
                console.log("po " + zymaN00 + " lyderis: " + carSet[0].pavadinimas + " " + carSet[0].kelias);
            // console.log(("po " + (Math.floor(carSet[i].kelias / 100)) * 100 + " lyderis: " + carSet[i].pavadinimas + " " + carSet[i].kelias));

            // } else if ((Math.floor(carSet[i].kelias / 100)) * 100) {
            //     console.log(("po " + (Math.floor(carSet[i].kelias / 100)) * 100 + " lyderis: " + carSet[i].pavadinimas + " " + carSet[i].kelias));

        }
        // if ((zymaN00 > 0) && (carSet[0].kelias > zymaN00) && (zymaN00 == ((Math.floor((carSet[0].kelias + carSet[0].greitis) / 100)) * 100))) {
        //     // if (carSet[i].kelias == carSet[0].kelias) {
        //     if (zymaN00 != ((Math.floor((carSet[0].kelias + carSet[0].greitis) / 100)) * 100))

        //         console.log("po " + zymaN00 + " lyderis: " + carSet[0].pavadinimas + " " + carSet[0].kelias);

        // }
    }
    // console.log((Math.floor(carSet[i].kelias / 100)) * 100);
    // console.log(("po " + (Math.floor(carSet[i].kelias / 100)) * 100 + " lyderis: " + carSet[i].pavadinimas + " " + carSet[i].kelias));

    // } else if ((Math.floor(carSet[i].kelias / 100)) * 100) {
    //     console.log(("po " + (Math.floor(carSet[i].kelias / 100)) * 100 + " lyderis: " + carSet[i].pavadinimas + " " + carSet[i].kelias));



    console.log(carSet);
}



// carSet = carSet.sort((a, b) => b.kelias - a.kelias);
console.log("LENKTYNIU REZULTATAI:");
console.log("Nr. Pav. Kelias");

carSet.forEach((carSet, index) => console.log((index + 1) + ". " + carSet.pavadinimas + " " + carSet.kelias));


/*
masinu lenktynes:

sukurti masyva is 8 masinu

kiekvieno ciklo metu :
visos masinos
    pagazuoja (80%): 1..1000
    pastabdo (10000%): 1..5

    pavaziuoja

    patikrinam ar kuri nors masina nenuvaziavo 1000 km

kai bent viena masina nuvaziavo 1000 km - lenktynes baigiasi

surusiuoti masinas pagal nuvaziuota kelia mazejimo tvarka
ir atspausdinti rezultatus

*) kas 100km atspausdinti lyderio pavadinima


*/