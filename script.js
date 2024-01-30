let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');

function addNote(){
    if(inputBox.value === ''){
        alert("Please add some text");
    }else{
        listContainer.innerHTML+= `<li>${inputBox.value}<span></li>`;
        inputBox.value="";
        inputBox.placeholder='Add your text';   
    }
    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();
