var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

// var removeAllButton = document.getElementById('removeall')
// removeAllButton.addEventListener('click', removeAll)

function addItem() {
  var input = document.getElementById('input');
  var newItem = input.value
  ul = document.getElementById('list');
  var textnode = document.createTextNode(newItem)

  if (newItem === '') {
    return false;
    // const errMsg = document.createElement('p')
    // errMsg.textContent = 'Please enter the ToDo item'

    // input.appendChild(input)
  }

  else {
    //create li
    li = document.createElement('li');

    //create check box
    var checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'check');

    //create label
    var label = document.createElement('label');
    label.setAttribute('for', 'item')

    //Add these elements on Webpage
    ul.appendChild(label);
    li.appendChild(checkBox);
    label.appendChild(textnode);
    li.appendChild(label);

    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = 'visual';
    }, 1);

    input.value = '';
  }
}

function removeItem() {
  li = ul.children

  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index])
    }
  }
}

// function removeAll() {
//   li = ul.children

//   // console.log(li);

//   for (let i = 0; i < li.length; i++) {
//     //console.log(li[i]);
//     li.remove(li[i])
//   }

//}



