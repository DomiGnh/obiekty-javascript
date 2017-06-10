
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