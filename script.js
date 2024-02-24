
// document.querySelector(".titlu-pagina").innerText = "Titlu nou";



// let titluPagina = document.querySelector(".titlu-pagina");
// titluPagina = "titlu nou";

let cifraCalculator = document.querySelector(".cifra-calculator");

let butonPlus = document.querySelector(".buton-plus");
let butonMinus = document.querySelector(".buton-minus");
let butonInmultire = document.querySelector(".buton-inmultit");
let butonImpartire = document.querySelector(".buton-impartit");
let butonResetare = document.querySelector(".buton-resetare");
let butonPrimalitate = document.querySelector(".buton-primalitate");
let alerta = document.querySelector(".alert");
let statusNumar = document.querySelector(".status-numar");

// console.log(butonPlus);

let x = 0;

let disableButtons = () => {
    butonPlus.disabled = true;
    butonMinus.disabled = true;
    butonInmultire.disabled = true;
    butonImpartire.disabled = true;
    butonPrimalitate.disabled = true;
};

let enableButtons = () => {
    butonPlus.disabled = false;
    butonMinus.disabled = false;
    butonInmultire.disabled = false;
    butonImpartire.disabled = false;
    butonPrimalitate.disabled = false;
};

let plusUnu = () => {
    if(x >= 200) {
        disableButtons();
        return;
    }
    x++;
    cifraCalculator.innerText = x;
    if(x >= 10) {
        cifraCalculator.style.color = 'green';
        cifraCalculator.style.fontSize = '82px';
    }
    else if(x > -10) {
        cifraCalculator.style.color = 'black';
        cifraCalculator.style.fontSize = '60px';
    }
    if(x > 0) {
        if(x < 20) {
            statusNumar.innerText = 'Mic';
        }
        else if(x < 50) {
            statusNumar.innerText = 'Mediu';
        }
        else {
            statusNumar.innerText = 'Mare';
        }
    }
    
};

let minusUnu = () => {
    if(x  <= -20) {
        alerta.style.display = 'block';
        disableButtons();
        return;
    }
    x--;
    cifraCalculator.innerText = x;
    if(x <= -10) {
        cifraCalculator.style.color = 'red';
        cifraCalculator.style.fontSize = '48px';
    }
    else if(x < 10) {
        cifraCalculator.style.color = 'black';
        cifraCalculator.style.fontSize = '60px';
    }
    if(x === 0) {
        statusNumar.innerText = 'Zero';
    }
    if(x < 0) {
        statusNumar.innerText = 'Foarte mic';
    }
};

let inmultire = () => {
    if(x  <= -20  || x >+ 200) {
        alerta.style.display = 'block';
        disableButtons();
        return;
    }
    x *= 2;
    cifraCalculator.innerText = x;
    if(x <= -10) {
        cifraCalculator.style.color = 'red';
        cifraCalculator.style.fontSize = '48px';
    }
    if(x >= 10) {
        cifraCalculator.style.color = 'green';
        cifraCalculator.style.fontSize = '82px';
    }
    if(x > 0) {
        if(x < 20) {
            statusNumar.innerText = 'Mic';
        }
        else if(x < 50) {
            statusNumar.innerText = 'Mediu';
        }
        else if(x < 100){
            statusNumar.innerText = 'Mare';
        }
        else {
            statusNumar.innerText = 'Opreste-te!!!';
        }
    }
};

let impartire  = () => {
    x /= 2;
    cifraCalculator.innerText = x;
    if(x < 10 && x > -10) {
        cifraCalculator.style.color = 'black';
        cifraCalculator.style.fontSize = '60px';
    }
}

let resetare = () => {
    x = 0;
    cifraCalculator.innerText = x;
    enableButtons();
    cifraCalculator.style.color = 'black';
    cifraCalculator.style.fontSize = '60px';
    alerta.style.display = 'none';
    statusNumar.innerText = 'Zero';
};

let verifPrim = (n) => {
    if(n < 2 || n > 2 && n % 2 === 0) 
        return false;
    for(let d=3; d*d<=n; d+=2)
        if(n % d == 0)
            return false;
    return true;
};

let primalitate = () => {
    if(x > 0 && x % 1 === 0) {
        if(verifPrim(x) === true) {
            statusNumar.innerText = 'Numarul este prim';
        }
        else {
            statusNumar.innerText = 'Numarul nu este prim';
        }
    }
    else {
        statusNumar.innerText = 'Numarul este invalid (Trebuie sa fie pozitiv si intreg)';
    }
};

butonPlus.addEventListener("click", plusUnu);
butonMinus.addEventListener("click", minusUnu);
butonInmultire.addEventListener("click", inmultire);
butonImpartire.addEventListener("click", impartire);
butonResetare.addEventListener("click", resetare);
butonPrimalitate.addEventListener("click", primalitate);

