var form =document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event 
form.addEventListener('submit',addItem);

//delete event 
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    //get input value 
    var newItem = document.getElementById('item').value;
    //create new li elemewnt 
var li = document.createElement('li');
//add class
li.className='list-group-item';
// add text node with input value 
li.appendChild(document.createTextNode(newItem));
//create delete button element 
var deleteBtn = document.createElement('button');
//add classes to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('x'));
li.appendChild(deleteBtn);

// append li to list 

itemList.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('are you sure')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}


// Edit event








