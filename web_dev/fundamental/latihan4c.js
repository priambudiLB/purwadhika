var massa = 70;
var tinggi = 1.78;

var IMT = massa/Math.pow(tinggi,2);
var status = "";

if (IMT<18.5){
    status = "kurang";
} else if(IMT<24.9){
    status = "ideal";
} else if(IMT<29.9){
    status = "berlebih";
} else if(IMT<39.9){
    status = "sangat berlebih";
} else {
    status = "obesitas";
}
console.log("IMT = "+IMT+", Berat badan anda "+status);