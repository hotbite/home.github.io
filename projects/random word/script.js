var ran = document.getElementById('random');
var a = ['aple','mangle','orange'];

function btn(arr){
    var ri = Math.floor(Math.random() * a.length);
    var word= a[ri];
    ran.innerText = word;
}