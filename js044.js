const userName = ["mocking99", "JoeyPunch", "glassedFer"]; 

function OnlineStatus (arr) {
const count = userName.length; 
let res; 
if (count===1) {
    res =`${arr[0]} está en linea`;
} else if (count===2) {
    res =`${arr[0]}, ${arr[1]} están en linea`;
}  else { 
    res =`${arr[0]}, ${arr[1]} and ${count - 2} más están en linea`;
}
    return res;
}
console.log (OnlineStatus); 
