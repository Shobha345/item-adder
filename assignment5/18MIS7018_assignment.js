var form = document.getElementById('form');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('text').value;
    if (newItem == "") {
        alert("Enter the Text");
    } else {

        if (isNaN(newItem)) {
            // Create new li element
            var li = document.createElement('li');
            // Add class
            li.className = 'list-group-item';
            // Add text node with input value
            li.appendChild(document.createTextNode(newItem));

            // Create del button element
            var deleteBtn = document.createElement('button');



            // Add classes to del button
            deleteBtn.className = 'delete';


            // Append text node
            deleteBtn.appendChild(document.createTextNode('X'));

            // Append button to li
            li.appendChild(deleteBtn);

            // Append li to list
            itemList.appendChild(li);
        } else {
            alert("Numbers are not allowed");
        }
    }
}


// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function ReverseItem() {
    var i = itemList.childNodes.length;
    while (i--) {
        itemList.appendChild(itemList.childNodes[i]);
    }
}