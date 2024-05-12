const screen = document.getElementById("display")

function appendToDisplay(inp){
    screen.value += inp
}

function clearScreen(){
    screen.value = "";
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch(err){
        screen.value = "Err" ;
    }
}

function backspace(){
    let currentValue = screen.value;
    let newValue = currentValue.slice(0, -1);
    screen.value = newValue;
}

function power(){
    let curr = parseFloat(screen.value)
    let res = Math.pow(curr, 2)
    screen.value = res
}


function factorial(n){
    if(n === 0 || n ===1){
        screen.value = 1
    }
    else{
        let c=1
        for (let i = 2; i<=n; i++){
            c *= i 
        }
        return c
    }
}

function calFactorial(){
    let curr = screen.value
    let res = factorial(curr)
    screen.value = res
}

// function factorial(){
//     let curr = parseInt(screen.value)
//     function fact(curr){
//         if(curr === 0 || curr ===1){
//             screen.value = 1
//         }
//         else{
//             let c=1
//             for (let i = 2; i<=curr; i++){
//                 c *= i 
//             }
//             return c
//         }
//     }
//     screen.value = fact(curr)
// }

function oneBy(){
    let curr = screen.value
    let res = 1/curr
    screen.value = res
}