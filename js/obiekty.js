
//metoda-funkcja wewnątrz obiektu
'use strict';

var kaja ={

    imie: "kaja",
    wzrost: 162,
    przedstawOsobe: function() {console.log(this.imie)}
}

var domi={
    imie: "domi",
    wzrost:160,
    przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
domi.przedstawOsobe();

//klasa to funkcja do tworzenia nowych obiektow

function Osoba(imie, nazwisko)
 this.imie=imie;
 this.nazwisko=nazwisko
 this.wyswietlInfo //tworzymy klase ogolną z 3 eelemntami generalnymi



var krystian=new Osoba(krystian, dziopa)//tworzymy nową osobę ktora bedzie sie odowolywac do wyzej stworzonej klasy obiektow


















