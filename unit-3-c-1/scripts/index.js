


//store the products array in localstorage as "products"
 document.querySelector("#products").addEventListener("submit",addproduct);
 var arrayProducts =JSON.parse(localStorage.getItem("products"))||[];
 function addproduct(){

        event.preventDefault();
        var type= document.querySelector("#type").value;
        var description=document.querySelector("#desc").value;
        var price=document.querySelector("#price").value;
        var image=document.querySelector("#image").value;

        function productList(type,description,price,image){
                this.type=type;
                this.description=description;
                this.price=price;
                this.image=image;
        }

                var products= new productList(type,description,price,image);
                arrayProducts.push(products);
                localStorage.setItem("products",JSON.stringify(arrayProducts));
}

 