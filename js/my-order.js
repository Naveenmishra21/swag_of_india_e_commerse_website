


    // function addTocart(productId){
    //     console.log(products);
    //     let myproducts  =  JSON.parse(localStorage.getItem("products"));  
    //     let product = myproducts.find(function(item){
    //      return item.id == productId;
    //     });
    //     var temp="";
    //    if(cart==null){
    //     temp=[];
    //     temp.push({
    //         ...product,quantity:1
    //     });
    //     }
    //   else{
    //     temp=cart;
    //     for(let i=0 ; i<temp.length;i++){
    //              if(temp[i].id==productId ){
    //                 temp[i].quantity+=1;
    //                 product=null;
    //                 break;
    //              }
    //     }
    //     if(product!= null){
    //         temp.push({
    //             ...product,quantity:1
    //         });
    //     }
    //   }
    //   localStorage.setItem("cart",JSON.stringify(temp));
    // }
 
    myorder();
    function myorder(){
        let cart  =  JSON.parse(localStorage.getItem("cart"));
        let cards="";
        console.log(cart);
        cart.forEach(element =>{
         cards=cards+
                       `<div class="row second-row">
    <!-- ========= right side of div=========== -->
    <div class="col-2">
        <img src="./images/${element.imageName}.png" alt="" height="100px" width="105" class="prod3-img">
    </div>

    <div class="col-3.5">
        <div class="txt">
            <font size="-1">
                <h1>${element.name}</h1>
            </font><br><BR>

            <font size="-1">
                <h1>
                    <font color="gray">COLOR:MULTICOLOR</font>
                </h1><br>
            </font>
            <font size="-1">
                <h1>
                    <font color="gray">SELLER:KRISHNACLOTHSLIMITED</font>
                </h1><br>
            </font>

        </div>
    </div>

    <div class="col-1 RS">
        <font size="-1">
            <h1>${element.priceAfterDiscount}</h1>
        </font>
    </div>

    <div class="col-3.5 DELIVORY">
        <font size="-1">
            <h1> DELIVORY EXPECTED BY JULY 28 </h1>
        </font><BR>

        <font size="-1">
            <h1>
                <font color="gray">YOUR ORDER HAS BEEN PLACED</font>
            </h1><br>
        </font>
        <a href="####">
            <h1>TRACK YOUR ORDER</h1>
        </a>
    </div>
</div>`
     });
     console.log(cards);
     if(cards!=0){
        document.querySelector("#myorders").innerHTML=cards;
     }
     else{
        document.querySelector("#myorders").innerHTML=`
                    <h1>cart</h1>`;
     }
     
     localStorage.setItem("cart","[]");   
    }











