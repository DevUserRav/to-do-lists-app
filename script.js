'use strict';

const input = document.getElementById('input');
const listContainer = document.getElementById('list_container');

const addTask = () => {
    if (input.value) {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }else {
        alert('You must write something!!!');
    }
    input.value = '';
    saveData();
};

listContainer.addEventListener('click',(e) => {
    if(e.target.localName === 'li'){
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
}
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
};
showTask();