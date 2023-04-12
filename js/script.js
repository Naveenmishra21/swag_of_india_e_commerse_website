// let contacts ={
// india:"+919989765432"
// usa:"+1234543210"
// uae:"+7766453427"
// cannada:"+4455834210"
// }

let contacts=new Map()
contacts.set('india','919989765432')
contacts.set('usa','1234543210')
contacts.set('uae','7766453427')
contacts.set('canada','4455834210')

// contects.get('india')
document.getElementById("select1").addEventListener ('change', ()=> {
    let country=document.getElementById("select1").value;
    document.getElementById('contact').innerHTML= contacts.get(country);
    document.getElementById('flag').src=`./images/${country}.png`;

})



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// for makeing the header sticky
 if(scroll<150){
  document.getElementById("myheader").classList.remove("sticky-bar");
 }
 else{
  document.getElementById("myheader").classList.add("sticky-bar");
 }
 