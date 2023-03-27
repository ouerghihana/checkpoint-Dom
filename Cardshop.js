
var btnMoins = document.querySelectorAll('.btn-link > .fas.fa-minus');
var btnPlus = document.querySelectorAll('.btn-link > .fas.fa-plus');
var quantities = document.querySelectorAll('.quantity');
var prices = document.querySelectorAll('.prx');
var total = document.getElementById('prix-total');

for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener('click', function() {
    if (quantities[i].innerText > 0) {
      quantities[i].innerText--;
      total.innerText = parseInt(total.innerText) - parseInt(prices[i].innerText);
    }
  });
}

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener('click', function() {
    quantities[i].innerText++;
    total.innerText = parseInt(total.innerText) + parseInt(prices[i].innerText);
  });
}


//partie coeur 

var heartbtn = document.getElementsByClassName('fa-heart')

console.log('hearts',heartbtn)

for ( let btn of heartbtn){
    btn.addEventListener('click',function(){
        if(btn.style.color === "gray"){
            btn.style.color = "red"
        }else{
            btn.style.color = "gray"
        }
    })
}




//partie croix 

var deletbtn = document.querySelectorAll('.btn-delete')
console.log('delet',deletbtn)

for (let k=0;k<deletbtn.length;k++){

deletbtn[k].addEventListener('click',()=>{
deletbtn[k].parentElement.parentElement.remove()

//update de la totalite de mon pannier 

totalPrice()
})


}




