function calc(){
    var user = document.getElementById('name').value;
    var wage = document.getElementById('wage').value;
    var days = document.getElementById('days').value;

    var pay = parseFloat(wage);
    var result1 = "Employee's name: "+user+'.';
    var result2 = "Basic Salary: "+pay.toFixed(2)+'.';

    document.getElementById('output').innerHTML = result1+'<br>'+result2;
    
}