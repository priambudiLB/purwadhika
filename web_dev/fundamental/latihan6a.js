var nama = ["a", "b"];
nama.push("c");

for (var i in nama){            // a
    console.log(nama[i]);       // b
}                               // c

console.log(nama.pop());        // c
console.log(nama);              // Array(2) ["a", "b"]

nama.unshift("0");              
console.log(nama);              // Array(3) ["0", "a", "b"]

nama.shift();
console.log(nama);              // Array(2) ["a", "b"]
while (nama.length>0){
    nama.pop();
}
console.log(nama);              // Array(0) []