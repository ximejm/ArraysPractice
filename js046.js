//Dominante Positivo 
function posDom(arr) { 
    
    let posnum = 0;
    let negnum = 0; 

    arr.forEach(function(element) {
        if(element > 0) { // contador para numeros positivos
            posnum++;
        }
        else if (element < 0) { // contador para numeros negativos
            negnum++;
        }
    })
    console.log(`${posnum} positivos`);
    console.log(`${negnum} negativos`);
    
    if(posnum < negnum) {
        return false;
    }
    else if (posnum > negnum) {
        return true;
    }
    else {
        return false;
    }

}

posDom([-1, -3, -5, 4, 6767])
