var lst = document.getElementById('task_list');
var input = document.getElementById('input');
var span = document.createElement('span');
span.innerText = 'new';

function add(){
    var value = input.value;
    
    if(input.value != ''){
        var li = document.createElement('li');
    li.innerText = input.value;
    li.appendChild(span);
    lst.appendChild(li);

    input.value = '';
    }else{
        input.value = '';
    }
    
}


