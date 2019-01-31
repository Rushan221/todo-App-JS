var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

var removeAllButton = document.getElementById('removeall')
removeAllButton.addEventListener('click', removeAll)

function addItem() {
  console.log('Add btn clicked');

}

function removeItem() {
  li = ul.children

  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index])
    }

  }


}

function removeAll() {
  li = ul.children

  for (let index = 0; index < li.length; index++) {
    while (li[index] || li[index].children[0].checked) {
      ul.removeChild(li[index])
    }

  }
}