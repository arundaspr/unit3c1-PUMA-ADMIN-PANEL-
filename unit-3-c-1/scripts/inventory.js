


var productdata = JSON.parse(localStorage.getItem("products"))||[];

productdata.map(function(element,index){
        var pro = document.createElement("div");

        var image=document.createElement("img");
        image.src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/365215/01/sv01/fnd/IND/fmt/png/PUMA-Smash-v2--Unisex-Sneakers";
        image.setAttribute("class","pic");

        var info= document.createElement("div");
        info.setAttribute("class","info");

        var description =document.createElement("h1");
        description.innerText = element.description;

        var type =document.createElement("h1");
        type.innerText = element.type;

        info.append(type,description);

        var price= document.createElement("h3");
        price.innerText = element.price;

        var bttn = document.createElement("button");
        bttn.innerText="Remove Button";

        bttn.setAttribute("id","remove_product");
        bttn.addEventListener("click",function(){
                removeProduct(element,index)
        });

        pro.append(image,info,price,bttn);
        document.querySelector("#all_products").append(pro);


})

function removeProduct(element,index){
        productdata.splice(index,1);
        localStorage.setItem("products",JSON.stringify(productdata));
        window.location.reload();
}