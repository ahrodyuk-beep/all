// Task 1

function f1(){
    let val = +document.querySelector('.i-1').value;
    let result = (val == 4);
    document.querySelector('.out-1').textContent = result;
   
}

document.querySelector('.b-1').onclick = f1;


// Task 2


function f2(){
  let a = 10;
  let b = 40;
  let result = (a > b)? a : b;
  document.querySelector('.out-2').textContent = result;
}

document.querySelector('.b-2').onclick = f2;


// Task 3

function f3(){
let a = +document.querySelector('.i-31').value;
  let b =  +document.querySelector('.i-32').value;
  let result = (a > b)? a : b;
  document.querySelector('.out-3').textContent = result;
}


document.querySelector('.b-3').onclick = f3;


// Task 4. 


function f4() {
  let byear = +document.querySelector('.i-4').value;
  let cyear = new Date().getFullYear();
  let result = (cyear - byear >= 18)? 1 : 0;
  document.querySelector('.out-4').textContent = result;
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 

function f5(){
  let a = +document.querySelector('.i-5').value;
  if (a > 0 ){
    document.querySelector('.out-5').textContent = 1;
  }
  else if (a == 0){
    document.querySelector('.out-5').textContent = 0;
  }
  else{
     document.querySelector('.out-5').textContent = 'm';
  }
 

  document.querySelector('.out-5').textContent = result;
}


document.querySelector('.b-5').onclick = f5;


// Task 6.

function f6(){

  const input = document.querySelector('.i-6');
    const out = document.querySelector('.out-6');
    const number = +input.value; 

    if (number % 2 === 0) {
        out.textContent = 'even';
    } 
    
    else {
        out.textContent = 'odd'; 
    }

}

document.querySelector('.b-6').onclick = f6;

// Task 7.

function f7(){
    let n1 = +document.querySelector('.i-71').value;
    let n2 = +document.querySelector('.i-72').value;
    let out = document.querySelector('.out-7');
    out.textContent = n1 ** n2;
   
}

document.querySelector('.b-7').onclick = f7;

// Task 8.


function f8() {
  let selectValue = document.querySelector('.s-8').value;
    let out = document.querySelector('.out-8');
    
    // select повертає рядок, тому порівнюємо з '1', '2', '3'
    switch (selectValue) {
        case '1':
            out.textContent = 'one';
            break;
        case '2':
            out.textContent = 'two';
            break;
        case '3':
            out.textContent = 'three';
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9

function f9(){
     let apartment = +document.querySelector('.i-9').value;
    let out = document.querySelector('.out-9');
    
    if (apartment >= 1 && apartment <= 32) {
        out.textContent = 1;
    } else if (apartment >= 33 && apartment <= 43) {
        out.textContent = 2;
    } else if (apartment >= 44 && apartment <= 64) {
        out.textContent = 3;
    } else {
        out.textContent = 0;
    }

}

document.querySelector('.b-9').onclick = f9;

// Task 10

function f10(){
    let selectValue = document.querySelector('.s-100').value;
    let out = document.querySelector('.out-10');
    
    out.textContent = selectValue;

}

document.querySelector('.b-10').onclick = f10;

// Task 11

function f11(){
   let selectValue = document.querySelector('.s-110').value;
   let out = document.querySelector('.out-11');
    
    out.textContent = selectValue;
}

document.querySelector('.s-110').onchange = f11;


 

// Task 12
    let i120 = document.querySelector('.i-120');
    let out_12 = document.querySelector('.out-12');
function f12() {
    let v = i120.value;
    out_12.innerHTML = (typeof v);
}
document.querySelector('.b-12').onclick = f12;

// Task 13


function f13() {
    let val = document.querySelector('.i-130').value;
    document.querySelector('.out-13').innerHTML = typeof val;
}

document.querySelector('.b-13').onclick = f13;



// Task 14


function f14() {
     const n1 = +document.querySelector('.i-141').value; 
    const n2 = +document.querySelector('.i-142').value;
    const op = document.querySelector('.s-143').value;
    const out = document.querySelector('.out-14');
    let result;

    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else if (op === '*') {
        result = n1 * n2;
    } else if (op === '/') {
        
        result = n2 !== 0 ? n1 / n2 : 'Помилка (ділення на 0)';
    }
    out.innerHTML = result; 
}

document.querySelector('.b-14').onclick = f14;

// Task     15


function f15() {
  let f = document.querySelector('.s-151').value;
  let s = document.querySelector('.s-152').value;
  let oper = document.querySelector('.s-153').value;
  let result = 0;
  switch (oper){
    case '&&':
        result = (f === '1' && s === '1')? 1 : 0;
        break;

    case '||':
         result = (f === '1' || s === '1')? 1 : 0;
        break;
  }

  document.querySelector(' .out-15').textContent = result;
}


document.querySelector('.b-15').onclick = f15;


