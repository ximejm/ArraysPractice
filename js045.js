//Arrays Multiplos 

function MultArr(number, lenght) { 
    arr1 = [];
    for(let i = 1; i <= lenght; i++) {  
        arr1.push(number*i)
    }
    console.log(`${arr1}`)
}

MultArr(2,3) 
MultArr(17,6)