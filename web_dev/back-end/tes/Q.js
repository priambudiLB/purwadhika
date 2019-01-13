/*jshint esversion: 6 */

let os = require('os');

var namaCPU = os.hostname();
var osTipe = os.type();
var osPlatform = os.platform();
var osRilis = os.release();
var dirAwal = os.homedir();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();
var cpu = os.cpus();

console.log(cpu.length);
console.log(osTipe);
console.log(osPlatform);
console.log(osRilis);
console.log(dirAwal);
console.log(ramSisa);
console.log(ramTotal);