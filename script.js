const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterAll = document.querySelector(".filter-all");

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return newValue
}

function showAll(productArray) {
    myLi = "";

    productArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `;
    });
    list.innerHTML = myLi;
}

function mapAllItens() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price - product.price * 0.1,
    }));
    showAll(newPrice);
}

function summAllItens() {
    const sumPrice = menuOptions.reduce((acc, product) => {
        return acc + product.price;
    }, 0);
    list.innerHTML = `
        <li>
            <p>A soma de todos os itens do menu é: <br>${formatCurrency(sumPrice)}</p>
        </li>
        `;
}

function filterAllItens() {
    const filterVegan = menuOptions.filter((product) => {
        if (product.vegan) return true;
        else return false;
    });
    showAll(filterVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
buttonSumAll.addEventListener("click", summAllItens);
buttonFilterAll.addEventListener("click", filterAllItens);
