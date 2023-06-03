
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter =document.getElementById('filter');

//form submit event 
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

// add item 
function addItem (e){
  e.preventDefault();
  //get input value 
var newItem = document.getElementById('item').value;
var newDescription = document.getElementById('description').value;

//Create new li element 
var li = document.createElement('li');

//add class
li.className = 'list-group-item';

//add text node with input value 
li.appendChild(document.createTextNode(newItem + ': ' + newDescription));
//li.appendChild(document.createTextNode(newItem));

//create delete button element 
var deleteBtn = document.createElement('button');

//add classes to delete button
deleteBtn.className='btn btn-danger ntm-sm float-right delete';

//append text node 
deleteBtn.appendChild(document.createTextNode('x'));

li.appendChild(deleteBtn);

//append li to list 
itemList.appendChild(li);




}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure!')){
      var li= e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // get list
  var items = itemList.getElementsByTagName('li');

  // convert to an array
  Array.from(items).forEach(function (item) {
    var itemText = item.firstChild.textContent.toLowerCase(); // Get the full item text
    var itemParts = itemText.split(': ');
    
    if (itemParts.length >= 2) {
      var itemName = itemParts[0]; // Extract the item name from the text
      var itemDescription = itemParts[1]; // Extract the item description from the text

      if (itemName.includes(text) || itemDescription.includes(text)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    } else if (itemParts.length === 1) {
      var itemName = itemParts[0];

      if (itemName.includes(text)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    } else {
      item.style.display = 'none';
    }
  });
}