var productName= document.getElementById("productName");
var productPrice= document.getElementById("productPrice");
var productModel= document.getElementById("productModel");
var productDesc= document.getElementById("productDesc");
var productList;
var currentIndex;
var addProductBtn =document.getElementById("addProductbtn");
var updateProductBtn =document.getElementById("updateProductbtn");

if(localStorage.getItem("productList")==null){
    productList=[];
}else{
    productList=JSON.parse(localStorage.getItem("productList"));
    console.log(productList)
    displayProduct(productList);
}

function addProduct(){
    var product={
    name:productName.value,
    price:productPrice.value,
    model:productModel.value,
    desc:productDesc.value,

    }
productList.push(product);
displayProduct(productList)
localStorage.setItem("productList",JSON.stringify(productList));
// clearForm()
console.log(productList)

}

function clearForm(){
    productName.value="",
    productPrice.value="",
    productModel.value="",
    productDesc.value=""
}




function displayProduct(product){
    var productBox=``;
    
    for(var i=0;i<product.length;i++){
        
        productBox+=`<tr>
        <td>${i}</td>
        <td>${product[i].newName?product[i].newName:product[i].name}</td>
        <td>${product[i].price}</td>
        <td>${product[i].model}</td>
        <td>${product[i].desc}</td>
        <td>
            <button onclick="updateProduct(${i})" class="btn btn-warning btn-sm">Update</button>
        </td>
        <td>
            <button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">delete</button>
        </td>

    </tr>`;
    }
    document.getElementById("tBody").innerHTML=productBox;
    
}

function deleteProduct(index){
    productList.splice(index,1)
    console.log(productList)
    localStorage.setItem("productList",JSON.stringify(productList));
    displayProduct(productList)
}



function searchByName(x){
var foundedList=[];
    for(var i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(x.toLowerCase())==true){
            productList[i].newName=productList[i].name.toLowerCase().replace(x.toLowerCase(),`<span class="text-danger">${x}</span>`)

            console.log("founded in",i)
            foundedList.push(productList[i]);


        }
    }
    displayProduct(foundedList)
}

function updateProduct(index){
    addProductBtn.classList.add("d-none") 
    updateProductBtn.classList.replace("d-none","d-block")          // fe moshkelaaa hnaaaaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
currentIndex = index
   productName.value=productList[index].name;
   productPrice.value=productList[index].price;
   productModel.value=productList[index].model;
   productDesc.value=productList[index].desc;


}
function updateProductNewValue() {
    console.log("Updated");
    var product={
        name:productName.value,
        price:productPrice.value,
        model:productModel.value,
        desc:productDesc.value,
    
        }
        console.log(currentIndex);
        productList.splice(currentIndex,1, product)
        
        displayProduct(productList)
}







