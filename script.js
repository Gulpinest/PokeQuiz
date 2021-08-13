// ---------------------------- Soal --------------------------------------
var Fsoal = [
    {
        soal: 'Pokemon berikut ini adalah pokemon starter dari Kanto Region, Kecuali...',
        a: 'Charmender',
        b: 'Tympole',
        c: 'Squirtle',
        d: 'Burbasaur',
        correct: 'b'
    },

    {
        soal: 'Pokemon yang termasuk The Lake Guardians adalah...',
        a: 'Gyarados',
        b: 'Articuno',
        c: 'Azelf',
        d: 'Lapras',
        correct: 'c',
    },

    {
        soal: 'Nama Lengkap dari "N" Pokemon gen ke-5 adalah...',
        a: 'Neo Hurphin Griphous',
        b: 'Natural Harmonia Gropius',
        c: 'Nero Herald Ghetsis',
        d: 'Nakatsu Hibari',
        correct: 'b',
    },

    {
        soal: 'Tempat untuk menangkap Shiny Gyarados di Pokemon gen-2 adalah...',
        a: 'Lake of Rage',
        b: 'Lake of Life',
        c: 'Mystic Lake',
        d: 'Verity Lake',
        correct: 'a',
    },

    {
        soal: 'Pokemon yang tidak memiliki type weakness sebelum gen-6 release adalah...',
        a: 'Dragonite',
        b: 'Garchomp',
        c: 'Magikarp :v',
        d: 'Spiritomb',
        correct: 'd',
    },

//    {
//        soal: '',
//        a: '',
//        b: '',
//        c: '',
//        d: '',
//        correct: '',
//    },

];

// ---------------------------- Login -----------------------------------

var username = {a: 'Irens', b: 'Dut4'}
var password = {a: 'reachouttothetruth', b: 'todn'}

function Clogin() {
    var pass = document.getElementById('pass').value;
    var user = document.getElementById('user').value;

    if (username.a == user && password.a == pass) {
        Hlogin();
    } else if (username.b == user && password.b == pass) {
        Hlogin();
    } else if (user == '' && pass == '') {
        document.getElementById('salah').style.display = 'block';
        document.getElementById('salah').innerHTML = 'Masih kosong semua HEEYYY XD'
    } else {
        document.getElementById('salah').style.display = 'block';
        document.getElementById('salah').innerHTML = 'Username atau Password salah'
    }
}

function Hlogin() {
    document.getElementById("login").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';  
    Msoal();
    next(); 
    confirm('Jangan lupa submit ya bujank :V');
}

// --------------------------- Scoring ---------------------------------

var currJawab;
var scoreB = 0;
var scoreS = 0;
var Tscore = Fsoal.length * 10;
var randSoal = [];
var iSoal = 0;
var persen = 0;

function jawaban(v) {
    currJawab = v;
}

function submit() {
    if (currJawab == randSoal[iSoal - 1].correct) {
        scoreB += 1;
        document.getElementById(randSoal[iSoal - 1].correct).style.backgroundColor = "green";
    } else {
        document.getElementById(currJawab).style.backgroundColor = 'rgb(219, 51, 51)';
        scoreS += 1;
    }
    document.getElementById(randSoal[iSoal - 1].correct).style.backgroundColor = "green";
    document.getElementById("submit").style.display = 'none';
    uncheck();
}

function finish() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('Spanel').style.display = 'block';
    document.getElementById('Jbenar').innerHTML = scoreB;
    document.getElementById('Jsalah').innerHTML = scoreS;
    document.getElementById('totalS').innerHTML = Fsoal.length;
    persen = scoreB / Fsoal.length * 100;
    document.getElementById('persentase').innerHTML = persen + '%';
    komentar();
    persenC();
}

function komentar() {
    if (persen == 0) {
        document.getElementById('komentar').innerHTML = 'Lu udah buat belum si  -_-';
    } else if (persen <= 50 && persen > 0) {
        document.getElementById('komentar').innerHTML = 'Nilai macam apa ini  o_o';
    } else if (persen > 50 && persen < 70) {
        document.getElementById('komentar').innerHTML = 'Masih Kurang  ---_______---';
    } else if (persen >= 70 && persen < 100) {
        document.getElementById('komentar').innerHTML = 'Lumayan lah :V';
    } else {
        document.getElementById('komentar').innerHTML = 'NAAAAIIIISSSSEEEE XD';
    }
}

function persenC() {
    if (persen < 70) {
        document.getElementById('persentase').style.color = 'rgb(219, 51, 51)';
    } else {
        document.getElementById('persentase').style.color = 'rgb(86, 255, 86)';
    }
}

// --------------------------- Soal Randomizer -------------------------

function Msoal() {
    while (randSoal.length < Fsoal.length) {
       var r = Fsoal[Math.floor(Math.random() * Fsoal.length)]

       if (!randSoal.includes(r)) {
           randSoal.push(r);
       }
    }
}

function next() {
    document.getElementById("submit").style.display = '';
    document.getElementById("soal").innerHTML = randSoal[iSoal].soal;
    document.getElementById("a").innerHTML = randSoal[iSoal].a;
    document.getElementById("b").innerHTML = randSoal[iSoal].b;
    document.getElementById("c").innerHTML = randSoal[iSoal].c;
    document.getElementById("d").innerHTML = randSoal[iSoal].d;
    uncheck();
    if (iSoal < randSoal.length - 1) {
        iSoal++;
    } else {
        document.getElementById("next").style.display = 'none';
        document.getElementById("finish").style.display = 'block';
        iSoal++;
    }
    discolor();
}

//------------------------------------ Function ------------------------------------------

function uncheck() {
    var rad = document.getElementsByName("soal");
    currJawab = "";
    for (let i = 0; i < rad.length; i++) {
        rad[i].checked = false;
    }
}

function discolor() {
    var z = ['a', 'b', 'c', 'd'];
    for (let i = 0; i < z.length; i++) {
        document.getElementById(z[i]).style.backgroundColor = null;      
    }
}

function eB() {
    if (window.event.keyCode == 13) {
        document.getElementById("enterB").click();
    }
}
