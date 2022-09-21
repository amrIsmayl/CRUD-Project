
//global
var productName = document.getElementById("productName"); //input kolo
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var tableRow = document.getElementById("tableRow");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var productsList;
var searchInput = document.getElementById("search");
var upd;
(function () {

  if (localStorage.getItem("data") == null) {
    productsList = [];
  } else {
    productsList = JSON.parse(localStorage.getItem("data"));
    display(productsList);
  }
})();

function addProduct() {
  var productObj = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDesc.value,
  };
  productsList.push(productObj);
  localStorage.setItem("data", JSON.stringify(productsList));
  display(productsList);
  clearForm()
}

function display(list) {
  var box = ``;
  for (var i = 0; i < list.length; i++) {
    box += `  <tr>
       <td>${i + 1}</td>
       <td>${list[i].name}</td>
       <td>${list[i].price}</td>
       <td>${list[i].category}</td>
       <td>${list[i].desc}</td>
       <td><button  onclick=delFun(${i}) class="btn btn-danger">Delete</button></td>
       <td><button onclick=formUpdate(${i}) class="btn btn-primary">update</button></td>
     </tr>`;
  }

  tableRow.innerHTML = box;
}

function delFun(index) {
  productsList.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(productsList));
  display(productsList);
}

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";
  productCategory.value = "";
}

function formUpdate(updateForm) {
  upd = updateForm
  productName.value = productsList[updateForm].name
  productPrice.value = productsList[updateForm].price
  productCategory.value = productsList[updateForm].category
  productDesc.value = productsList[updateForm].desc




  updateBtn.classList.replace('d-none', 'd-inline-block');
  addBtn.classList.add('d-none')
}

function updateFun() {
  var productObj = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDesc.value,
  };

  productsList.splice(upd , 1 , productObj);

  localStorage.setItem("data", JSON.stringify(productsList));
  display(productsList);
  clearForm()
}


function searchProducts()
{
  term = searchInput.value;

  searchResult =[];

  for( var i = 0 ; i < productsList.length ; i++)
  {
    if(productsList[i].name.includes(term) === true )
    {
      searchResult.push(productsList[i]);
    }
  }
  display(searchResult);
  console.log(searchResult)
}


