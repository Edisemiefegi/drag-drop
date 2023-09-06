const left = document.getElementById('left')
const right = document.getElementById('right')
const listItem = document.getElementsByClassName('list-item')


for(list of listItem){
    console.log(list, listItem);
    list.addEventListener("dragstart", function(e){
        let selected = e.target;


        onDragover(right)
        onDrop(right, selected)
        
        onDragover(left)
        onDrop(left, selected)
     
    })
}

function onDragover (container){
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
    } )
}
function onDrop (container, selected){
    container.addEventListener('drop',()=>{
        container.appendChild(selected);
        selected = null;
    } )
}

