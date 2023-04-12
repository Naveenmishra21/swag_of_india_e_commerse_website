
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
function addTowishlist(productId){
   
        console.log(productId);
        let myproducts  =  JSON.parse(localStorage.getItem("products"));  
        let product = myproducts.find(function(item){
         return item.id == productId;
        });
        console.log(product);
        var temp="";
       if(wishlist==null){
        temp=[];
        temp.push({
            ...product,quantity:1
        });
        }
      else{
        temp=wishlist;
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
      localStorage.setItem("wishlist",JSON.stringify(temp));
    }

   

    
function removeItem(productId){
    console.log("hii");
    let wishlist=JSON.parse(localStorage.getItem("wishlist"));

    let product = wishlist.filter(function(item){
        return item.id != productId;
       });
       console.log(product);
  localStorage.setItem("wishlist",JSON.stringify(product));

  
  }


    function updatewishlist(){
        let cards="";
        wishlist.forEach(element =>{
         cards=cards+
                       `<div class="row second-row">
                         <div class="col-3">
                             <img src="./images/${element.imageName}.png" alt="" height="100px" width="105" class="prod3-img">
                         </div>
     
                         <div class="col-7">
                             <div class="txt">
                                <font size="-1">
                                 <h1>${element.name}</h1>
                                </font><br>
     
                                <p><i class="fa fa-star clourd"></i>
                                 <i class="fa fa-star clourd"></i>
                                 <i class="fa fa-star clourd"></i>
                                 <i class="fa fa-star-o"></i>
                                 <i class="fa fa-star-o"></i> (2850)</p><br>
     
                                <font size="-1">
                                 <h1>Rs.${element.priceAfterDiscount} <strike>Rs.${element.price}</strike>
                                     <font color="orange">(60%OFF)</font>
                                 </h1><br>
                                </font>
                                <select name="" id="" class="select">
                                 <option value="">select pack of</option>
                                </select><br><br>
                                <button id="bytns1" onclick="addTocart(${element.id})" >add to cart</button>
                                <button id= "bytns2" onclick="removeItem(${element.id})">remove from wishlist</button>
                             </div>
                         </div>
                             <!-- ========= right side of div ends=========== -->
     
     
                     </div>`
     });
         document.getElementById("wishlist-page").innerHTML=cards;
    }
  updatewishlist();