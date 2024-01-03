let list = document.querySelector('ul')
let buttonShowAll = document.querySelector('.show-all')
let buttonMapll = document.querySelector('.map-all')
let buttonReduce = document.querySelector('.sum-all')
let buttonFilter = document.querySelector('.filter-all')

formatCurrency = (value) =>{
    const newValue = new Intl.NumberFormat('pt-BR',{
    style: 'currency', currency:'BRL'

    }).format(value)

    return newValue

}


showAll = (productsArray) => {  
    let myLi = ``

    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li> 
        
        `

    });




    list.innerHTML = myLi
}


mapAll = () =>{
    const newPrices = menuOptions.map((product) =>({
        ...product, //Spread Operador 
        price: product.price *0.9, 
        
       
        
    }))

    showAll(newPrices)
    console.log(newPrices)

}


sumAll = () =>{
    const totalValue = menuOptions.reduce((acc, valueCurrent) =>  acc + valueCurrent.price, 0)
    list.innerHTML = `
    
    <li>
        <p>O valor total dos itens é R ${formatCurrency (totalValue)}</p>
    </li>
    `
    
}

filterAll = () =>{
    const filterItem = menuOptions.filter(filterAll => filterAll.vegan === true)
       
    showAll(filterItem)

}


buttonFilter.addEventListener('click', filterAll)
buttonReduce.addEventListener('click', sumAll)
buttonMapll.addEventListener('click', mapAll)
buttonShowAll.addEventListener('click', () => showAll(menuOptions))