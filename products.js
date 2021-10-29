const products = [
    {
        product_id: 1001,
        product_name: 'iPhone 13 Pro Max',
        product_price: 38900,
        stock: 10,
        product_image: './products_image/p1001.png',
    },
    {
        product_id: 1002,
        product_name: 'iPhone 13 Pro',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1002.png',
    },
    {
        product_id: 1003,
        product_name: 'iPhone 13',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1003.png',
    },
    {
        product_id: 1004,
        product_name: 'iPhone 13 Mini',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1004.png',
    },
    {
        product_id: 1005,
        product_name: 'iPhone 12 Mini',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1005.png',
    },
    {
        product_id: 1006,
        product_name: 'iPhone 12',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1006.png',
    },
    {
        product_id: 1007,
        product_name: 'iPhone SE',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1007.png',
    },
    {
        product_id: 1008,
        product_name: 'iPhone 11',
        product_price: 10000,
        stock: 10,
        product_image: './products_image/p1008.png',
    },
];

const divProducts = document.querySelector('#products');

for (const pd of products) {
    let divEachProduct = document.createElement('div');
    divEachProduct.setAttribute('id', pd.product_id);
    divEachProduct.setAttribute('class', 'group relative');

    let divName = document.createElement('div');
    divName.setAttribute('class', 'mt-4 flex justify-center text-3xl');
    divName.textContent = pd.product_name;
    divEachProduct.appendChild(divName);

    let pStock = document.createElement('p');
    pStock.setAttribute('class', 'mt-1 flex justify-center');
    pStock.textContent = `Stock : ${pd.stock}`;
    divEachProduct.appendChild(pStock);

    let divImage = document.createElement('div');
    divImage.setAttribute(
        'class',
        'w-full min-h-80 transition duration-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer'
    );
    let imgElem = document.createElement('img');
    imgElem.setAttribute('src', pd.product_image);
    imgElem.setAttribute(
        'class',
        'w-full h-full object-center object-cover lg:w-full lg:h-full'
    );
    divImage.appendChild(imgElem);
    divEachProduct.appendChild(divImage);

    let divPriceAdd = document.createElement('div');
    divPriceAdd.setAttribute('class', 'mt-4 flex justify-between');

    let divPrice = document.createElement('div');
    divPrice.setAttribute('class', 'mt-3 text-2xl text-gray-900 pr-10');
    divPrice.textContent = `${pd.product_price}฿`;

    let divAdd = document.createElement('button');
    divAdd.setAttribute('type', 'submit');
    divAdd.setAttribute(
        'class',
        'mt-0 w-full bg-blue-500 transition duration-200 border border-transparent rounded-2xl py-3 px-3 flex items-center justify-center text-base font-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    );
    divAdd.textContent = 'Add to bag';

    divPriceAdd.appendChild(divPrice);
    divPriceAdd.appendChild(divAdd);
    divEachProduct.appendChild(divPriceAdd);

    divProducts.appendChild(divEachProduct);
}
