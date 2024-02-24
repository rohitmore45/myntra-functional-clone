
let bagItems;
onLoad();

function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    if (bagItems.includes(itemId)) {
        alert('Item is already in cart!!')
    } else {
        bagItems.push(itemId);
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        displayBagIcon();
        alert('Item added')
        // console.log(bagItems)
    }

}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = "visible"
        bagItemCountElement.innerText = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = "hidden";
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `<div class="item-container">
                <img src="${item.image}" alt="item image" class="item-image">
                <div class="rating">
                    ${item.rating.stars}⭐ |${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}/- </span>
                    <span class="original-price">Rs ${item.original_price}/- </span>
                    <span class="discount">(${item.discount_percentage}% off)</span>
                </div>
                <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
                </div>`
    });

    itemsContainerElement.innerHTML = innerHtml;
}
