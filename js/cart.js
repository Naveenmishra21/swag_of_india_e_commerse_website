
let productsListUrl2 = './product.json';

fetch(productsListUrl2)
    .then(response => response.json())
    .then(data => {
        const products = data.Products;
        console.log(products);
        localStorage.setItem("products", JSON.stringify(products));
        // if (!localStorage.getItam("cart")) {
        //     localStorage.setItem("cart", "[]");
        // }

    });

let products  =  JSON.parse(localStorage.getItem("products"));
   console.log(products);
let cart=JSON.parse(localStorage.getItem("cart"))||[];

    function addTocart(productId){
        console.log(products);
        let myproducts  =  JSON.parse(localStorage.getItem("products"));  
        let product = myproducts.find(function(item){
         return item.id == productId;
        });
        var temp="";
       if(cart==null){
        temp=[];
        temp.push({
            ...product,quantity:1
        });
        }
      else{
        temp=cart;
        for(let i=0 ; i<temp.length;i++){
                 if(temp[i].id==productId ){
                    temp[i].quantity+=1;
                    product=null;
                    break;
                 }
        }
        if(product!= null){
            temp.push({
                ...product,quantity:1
            });
        }
      }
      localStorage.setItem("cart",JSON.stringify(temp));
    }
    

function removeitem( productId){
    let product = cart.filter(function(item){
        return item.id != productId;
       });
  localStorage.setItem("cart",JSON.stringify(product));

    
  }

  function emptyall(){
    localStorage.setItem("cart","[]");   
  }


function increseqty(productId){
       for(let product of cart){
          if(product.id==productId){
            product.quantity+=1;
            document.getElementById("cart-qty").innerHTML=product.quantity;
          }
       }
       localStorage.setItem("cart",JSON.stringify(cart));
       getprice();
       updatecart();
}


function decreseqty(productId){
    for(let product of cart){
       if(product.id==productId){
         product.quantity-=1;
         document.getElementById("cart-qty").innerHTML=product.quantity;
       }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    getprice();
    updatecart();
}

function getcupans(){
       let input= document.getElementById("input-cupn").value
       console.log(input);
        document.getElementById("apply").innerHTML=input
}

function getprice(){
    if(cart.lenth===0)
    {
         document.getElementById("total").innerHTML="Rs.0"
    }
    else{
          let temp1=cart.map(item=>{
            return parseFloat( item.priceAfterDiscount)*item.quantity
          })
         let temp2=temp1.reduce((privious,next)=>{
            return privious+next;
         },0)
         let temp3=cart.map(item=>{
            return parseFloat( item.price)*item.quantity
          })
         let temp4=temp3.reduce((privious,next)=>{
            return privious+next;
         },0)
         let discount = Math.floor(temp4-temp2)
         document.getElementById("discounted-price").innerHTML=`Rs.${temp2}`
         document.getElementById("total").innerHTML=`Rs.${temp2}`
         document.getElementById("actual-price").innerHTML=`Rs.${Math.floor(temp4)}0`
         document.getElementById("discount").innerHTML=`Rs.${discount}`
         document.getElementById("sum-total").innerHTML=`Rs.${temp2+99}`
            }

}
   

updatecart();
getprice();
    function updatecart(){
        let cards="";
        cart.forEach(element =>{
         cards=cards+
                       `<div class="row left-side">
                       <div class="col-2 imag">
                           <img src="./images/${element.imageName}.png" alt="" height="100px" width="105">
                       </div>
                       <div class="col-4 text1">
                           <font size="-1">
                               <h1>${element.name}</h1>
                           </font><BR>
                           <font size="-1">
                               <h2>COLOR : WHITE</h2>
                           </font><BR>
                           <font size="-1">
                               <h1>SOLD BY : CALFILINE DESIGN PRIVATE LIMITED</h1><br>
                           </font>
                           <div class="select2">
                            <span>   <select name="s1" id="sl1" class="sl">
                                   <option value="india">size:onesize</option>
                               </select>
                               <button id="increse" onclick="increseqty(${element.id})">+ </button>
     
                               <p> <span id="cart-qty">Qty:${element.quantity}</span></p>
                                <button id="decrese" onclick="decreseqty(${element.id})">- </button>
                           </div>
                       </div>
                       <div class="col-2 text2">  
                           <font size="-1">
                               <h1>${element.price}</h1><br>
                           </font>
                           <h5 class="red"><strike>1099</strike>(60%OFF)</h1><br>
                               <font size="-1">
                                   <h5>DELIVORY IN 4 TO 6 DAYS </h5>
                               </font>
                       </div>
     
                   </div>
     
                   <div class="row lastr">
                       <div class="col-3 cl">
                           <button onclick="removeitem(${element.id})" id="remove"class="c1">
                               <font size="-1">
                                   <h1>REMOVE</h1>
                               </font>
                           </button>
                       </div>
                       <div class="col-2 cl1">
                           <button class="c2">
                               <font size="-1">
                                   <h1>MOVE TO WISHLIST</h1>
                               </font>
                           </button>
                       </div>
                   </div>
               </div>`
     });
     document.getElementById("cartpage").innerHTML=cards;
    }
