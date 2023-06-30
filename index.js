const displayData=(data)=>{
    container.innerHTML=""
    data.map((item,index)=>{
        container.innerHTML+=`<div>
        <h2>${item.title}</h2>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button class='priceButton'>$${item.price}</button>
        <button class="ratingButton">Rating - ${item.rating.rate}</button>
        </div>`

    })
}

let data;
console.log(data);
const callApi =async ()=>{
    const response =await fetch('https://fakestoreapi.com/products')
    data =await response.json()
    console.log(data)
    displayData(data)
    
}
callApi()
const assending=()=>{
    data.sort(function(a,b){ return a.price-b.price; })
    displayData(data)
}

const dessending=()=>{
    data.sort(function(a,b){ return b.price-a.price; })
    displayData(data)
}


// const singlog=document.querySelector('#singlog')
const container = document.querySelector('.container')
const input=document.querySelector('.serchInput')

