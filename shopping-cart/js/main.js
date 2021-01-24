let scoppingCart = document.getElementById('shopping-cart');
let itemsSection = document.querySelector('.items');
let ul = document.querySelector('.items ul');
let allItems = document.querySelectorAll('.items ul li');
let allItemsArr = Array.from(allItems);
let topButton = document.querySelector('.items .top');
let botButton = document.querySelector('.items .bot');

let h2 = document.querySelector('.items h2');
h2.textContent = `My Cart (${allItems.length} items)`;

scoppingCart.addEventListener('click',() => {
    itemsSection.classList.toggle('active');
})

topButton.addEventListener('click',() => {
    let firstItem = allItemsArr.shift();

    let deletedItem = ul.removeChild(firstItem);
    document.querySelector('.items ul').appendChild(deletedItem);

    allItemsArr.push(firstItem);
})

botButton.addEventListener('click',() => {
    let lastItem = allItemsArr.pop();

    let deletedItem = ul.removeChild(lastItem);
    document.querySelector('.items ul').prepend(deletedItem);
    
    allItemsArr.unshift(lastItem);
})