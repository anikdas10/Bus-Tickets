// btn onclicck
let totalPrice = 0;
const selectedSit1 = [];
const buttons = document.querySelectorAll('.js-btn');
const CoupnInput =  document.getElementById('input-coupn');
const CoupnButtton =  document.getElementById('coupne-button');
const GrandTotal = document.getElementById("Grand-total");

// navbar
const navBar = document.getElementById("navbar");
const BarIcon = document.getElementById("barIcon");
const crossIcon = document.getElementById("crossIcon");
BarIcon.addEventListener('click',function(){
   navBar.classList.remove("hidden"); 
   BarIcon.classList.add('hidden');
   crossIcon.classList.remove('hidden')
});
crossIcon.addEventListener("click",function(){
    navBar.classList.add("hidden"); 
   BarIcon.classList.remove('hidden');
   crossIcon.classList.add('hidden')
})

for( const button of buttons){
   button.addEventListener('click',function(){
    const selectedSit = document.getElementById("selected-sit");
         
         if(selectedSit1.includes(button.innerText)) {

            return alert('Seat already Added');
         }    
       
       else if(selectedSit1.length>3){
            alert('Maximum seat addded')
        }
        else{
             selectedSit1.push(button.innerText);
         selectedSit.innerHTML +=  `<li class= "flex justify-between font-normal"><span>${button.innerText}</span> <span>Economoy</span> <span>550</span></li>`;

        button.classList.add('bg-[#1DD100]');
         button.classList.add('text-white');
         document.getElementById("selected-sit-text").classList.add('hidden');

        const TotalBooked = document.getElementById("Total-booked");
        TotalBooked.innerText = selectedSit1.length;

        // update the price
        totalPrice +=550;
        document.getElementById('Price').innerText = totalPrice.toFixed(2);
        // active coupone button
        if(selectedSit1.length > 3){
           CoupnInput.removeAttribute("disabled");
           CoupnButtton.removeAttribute("disabled");
        }
        }

    })
}

// copun button

CoupnButtton.addEventListener("click",function(){
    let coupnSave = 0;
    
     if(CoupnInput.value === "NEW15"){
        coupnSave = totalPrice *.15;
         CoupnInput.value = "";
    }
    else if(CoupnInput.value === "Couple 20"){
        coupnSave = totalPrice * .20;
         CoupnInput.value = "";
    }
    else{ 
        alert("Your Provided Coupon is Not Valid");
        CoupnInput.value = "";
    }

    const ShowCouponPrice = document.getElementById("Show-coupon-price");
    ShowCouponPrice.innerHTML = `<p>Discount</p>
                    <h5><span>-BDT:</span>
                        <span >${coupnSave.toFixed(2)}</span>
                     </h5>`;
     ShowCouponPrice.classList.remove("bg-white") ;               
    const GrandTotalValu = totalPrice - coupnSave;
    GrandTotal.innerHTML = GrandTotalValu.toFixed(2);
})
// next button section

const nextBtn = document.getElementById("Next-button");
const PhoneInput = document.getElementById('Phone-number');
PhoneInput.addEventListener("input",function(){
    const inputValue = PhoneInput.value;
    if(inputValue.length>=11){
        nextBtn.removeAttribute("disabled")
    }
})
 
document.getElementById("Continue-btn").addEventListener("click", function(){
    window.location.reload();
});