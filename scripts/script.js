function buttonClick() {
    var element = document.getElementById('basket');
    if (element.style.display == 'block') {
        element.style.display = 'none';
    }
    else {
        element.style.display = 'block';
    }
}


class GoodsItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="goods-button">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(goods) {
        this.goods = goods
    }
    onClickGoodButton() {
        let item = document.querySelectorAll('.goods-item')

        Array.from(item).forEach(function (i, a) {
            i.addEventListener('click', function (e) {
                let busketcount = document.querySelectorAll(".basket-count")
                busketcount[a].innerText++
                ggg()
                console.log(busketcount[a].innerText)
                console.log(e.currentTarget.querySelector('p').innerText);
            })

        })

    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class BasketItem {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    render() {
        return `<div class="busket-item"><h3>${this.title}</h3><p>${this.price}</p><p class ="basket-count">${this.count}</p></div>`;
    }
}

class BasketList {
    constructor() {
        this.purchases = [];
    }

    fetchPurchases(goods) {
        this.purchases = goods;
    }
    countBasketPrice() {
        let listHtml = ''
        var allPrice = 0
        this.purchases.forEach(purchases => {
            allPrice += purchases.price * purchases.count
        })
        listHtml = allPrice
        document.querySelector('.basket-price').innerHTML = listHtml;
    }
    render() {
        let listHtml = '';
        this.purchases.forEach(purchase => {
            const purchaseItem = new BasketItem(purchase.title, purchase.price, purchase.count);
            listHtml += purchaseItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
    }
}

var goods = [
    { id: 1, title: 'Shirt', price: 150, count: 0 },
    { id: 2, title: 'Socks', price: 50, count: 0 },
    { id: 3, title: 'Jacket', price: 350, count: 0 },
    { id: 4, title: 'Shoes', price: 250, count: 0 },
]
function ggg() {
    let busketcount = document.querySelectorAll(".basket-count");
    let busketitem = document.querySelectorAll(".busket-item");
    busketcount.forEach((i, a) => {
        if (busketcount[a].innerText == 0) {
            busketitem[a].style.display = 'none'
        }
        else {
            busketitem[a].style.display = 'block'
        }

        console.log(busketcount[a])
    });
}

const list = new GoodsList();
list.fetchGoods(goods);
list.render();
const list1 = new BasketList();
list.onClickGoodButton();
list1.fetchPurchases(goods);
list1.render();
list1.render();
list1.countBasketPrice();
ggg()
