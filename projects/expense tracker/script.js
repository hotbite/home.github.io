
var nm = document.getElementById('name');
var dt = document.getElementById('dt');
var ct = document.getElementById('ct');
ct.value = '';
var amount = document.getElementById('amount');
var table = document.getElementById('table');


    

function add(){
    if(nm.value ||dt.value ||ct.value || amount.value != ''){
     
var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');

var edt = document.createElement('button');
edt.innerText = 'Edit';
edt.style.backgroundColor = 'lime';
var del = document.createElement('button');
del.innerText = 'Delete';
del.style.backgroundColor = 'red';

    td1.innerText = nm.value;
    td2.innerText = amount.value;
    td2.id = 'amt';
    td3.innerText = ct.value;
    td4.innerText = dt.value;
    td5.appendChild(edt);
    td5.appendChild(del);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
    
    var lst = [];
    lst.push(amount.value);
    var lst_toatal = document.getElementById('lst_total');
    var li = document.createElement('li');
    li.innerText = lst;
    li.id = 'bkg';
    lst_toatal.appendChild(li);


    nm.value = '';
        dt.value = '';
        ct.value = '';
        amount.value = '';

    }else{
        nm.value = '';
        dt.value = '';
        ct.value = '';
        amount.value = '';
    }
    
}
