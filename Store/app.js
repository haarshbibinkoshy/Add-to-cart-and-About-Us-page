const musicSection=document.getElementById('music-div')
const notification=document.querySelector('.notification')
const count=document.getElementById(`count`)
let countItem=0
let id;
musicSection.addEventListener('click',(e) => {
    
    if (e.target.innerHTML===`ADD TO CART`) {
        id=e.target.id
        notification.classList.add(`active`)
        setTimeout(() => {
            notification.classList.remove(`active`)
        }, 2000);
        notification.innerHTML=`<h3>Your product: ${id} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`
    }

})
console.log(count);

const merchSection =document.getElementById(`merch-section`)
merchSection.addEventListener(`click`,(e)=>{

     if (e.target.innerHTML===`ADD TO CART`) {
        id=e.target.id
        notification.classList.add(`active`)
        setTimeout(() => {
            notification.classList.remove(`active`)
        }, 2000);
        notification.innerHTML=`<h3>Your product: ${id} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`
}
})

