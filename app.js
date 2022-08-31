var goUpBtn = document.getElementById("goUp");
var filterContainer = document.querySelector(".gallery-filter");
var categoriesImgs = document.querySelectorAll(".categories-img");
var productDom = document.getElementById("all-products");
var specialListDom = document.getElementById("special-list");
let cartContainer = document.getElementById("cart-container");
let cartIcon = document.getElementById("btn-add-cart");
let aboutUsSection = document.getElementById("myAbout");
let aboutUsParag = document.getElementById("about-parag");
var j = 0;
let myParagraph =
  "Nam debitis quo soluta dolor sint quas deserunt recusandae,quisquam repellendus mollitia earum a tempore quia. Nam debitis quo soluta dolor sint quas deserunt recusandae, quisquam repellendus mollitia earum a tempore quia. Nam debitis quo soluta dolor sint quas deserunt recusandae,quisquam repellendus mollitia earum a tempore quia. Nam debitis quo soluta dolor sint quas deserunt recusandae, quisquam repellendus mollitia earum a tempore quia.";
const buttons = document.querySelectorAll("[data-carousel-button]");

window.onscroll = function () {
  if (window.pageYOffset >= 600) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
  if (
    aboutUsSection.getBoundingClientRect().top +
      (aboutUsSection.offsetHeight - window.innerHeight) <
    window.innerHeight
  ) {
    setTimeout(() => {
      (function typeWriter() {
        if (j < myParagraph.length) {
          aboutUsParag.innerHTML += myParagraph.charAt(j);
          j++;
          setTimeout(typeWriter, 200);
        }
      })();
    }, 1000);
  }
};

goUpBtn.onclick = function () {
  window.scrollTo(0, 0);
};

var slideFunc = function (event) {
  const offset = event.dataset.carouselButton === "next" ? 1 : -1;
  const slides = event
    .closest("[data-carousel]")
    .querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex == slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
};
buttons.forEach((button) => {
  button.addEventListener("click", () => slideFunc(button));
});

setInterval(() => {
  let offset = 1;
  const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex == slides.children.length) newIndex = 0;
  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}, 4000);

filterContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("filter-item")) {
    filterContainer
      .querySelector(".active-filter-btn")
      .classList.remove("active-filter-btn");
    event.target.classList.add("active-filter-btn");
    const firstValue = event.target.getAttribute("data-filter");
    categoriesImgs = document.querySelectorAll(".categories-img");

    categoriesImgs.forEach((item) => {
      if (item.classList.contains(firstValue) || firstValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");

        item.classList.add("hide");
      }
    });
  }
});

// Cart Object Container

let product = [
  {
    id: "1",
    title: "Ray-ban Hero",
    category: "sunglasses",
    imageUrl: "./images/glasses-1.png",
    price: "49.99",
    sale: true,
  },
  {
    id: "2",
    title: "Veithdia Square",
    category: "sunglasses",
    imageUrl: "./images/glasses-2.png",
    price: "54.50",
  },
  {
    id: "3",
    title: "Bose Rondo",
    category: "sunglasses",
    imageUrl: "./images/glasses-3.png",
    price: "65",
  },
  {
    id: "4",
    title: "Black Polo Wallet",
    category: "wallets",
    imageUrl: "./images/wallet-1.png",
    price: "24.99",
    sale: true,
  },
  {
    id: "5",
    title: "Brown Polo Wallet",
    category: "wallets",
    imageUrl: "./images/wallet-2.png",
    price: "49.99",
  },
  {
    id: "6",
    title: "Iphone 12 Pro blue",
    category: "tech",
    imageUrl: "./images/swappie-iphone-12-pro-pacific-blue.avif",
    price: "459.99",
    sale: true,
  },
  {
    id: "7",
    title: "Iphone 12 Purple",
    category: "tech",
    imageUrl: "./images/swappie-iphone-12-purple.avif",
    price: "399.99",
    sale: true,
  },
  {
    id: "8",
    title: "Blazer Nike",
    category: "sneakers",
    imageUrl: "./images/blazer.png",
    price: "43",
  },
  {
    id: "9",
    title: "Air Jordan Nike",
    category: "sneakers",
    imageUrl: "./images/air.png",
    price: "49.99",
    sale: true,
  },
  {
    id: "10",
    title: "Air Jordan Nike",
    category: "sneakers",
    imageUrl: "./images/air2.png",
    price: "49.99",
    sale: true,
  },
  {
    id: "11",
    title: "Air Jordan Nike",
    category: "sneakers",
    imageUrl: "./images/blazer2.png",
    price: "49.99",
    sale: true,
  },
  {
    id: "11",
    title: "Air Jordan Nike",
    category: "sneakers",
    imageUrl: "./images/jordan.png",
    price: "49.99",
    sale: true,
  },
];

let specialProduct = [
  {
    id: "12",
    title: "Ray-ban Hero",
    category: "sunglasses",
    imageUrl: "./images/crater2.png",
    price: "49.99",
    sale: true,
  },
  {
    id: "13",
    title: "Veithdia Square",
    category: "sunglasses",
    imageUrl: "./images/hippie2.png",
    price: "54.50",
    sale: true,
  },
  {
    id: "14",
    title: "Bose Rondo",
    category: "sunglasses",
    imageUrl: "./images/crater.png",
    price: "65",
    sale: true,
  },
  {
    id: "15",
    title: "Brown Polo Wallet",
    category: "wallets",
    imageUrl: "./images/hippie.png",
    price: "24.99",
    sale: true,
  },
];
let finalDom = [];
// show products
function showProduct(items, elementDom) {
  for (let i = 0; i < items.length; i++) {
    let showProductItem = `<div class=" col-md-4 col-lg-4 col-xl-3 text-center p-4 categories-img ${
      items[i].category
    }">
    <div class="collection-img position-relative">
    <img src="${items[i].imageUrl}" alt="image" class='product-item-image'>
    ${
      items[i].sale
        ? `<span class="position-absolute bg-primary d-flex text-white align-items-center justify-content-center">Sale</span>`
        : " "
    }
              
          </div>
    <div class='text-center'>
    <div class="text-capitalize text-unmuted text-center product-item-details my-1">
    ${items[i].title}
    </div>
     <span class='fw-bold'>$${items[i].price}</span>
     <p class='fw-light'>Lorem Posem Porduct</p>

    <div class="product-item-actions">

     <button class="add-to-cart btn btn-primary mt-3" onclick="addToCart(${items[i].id})" >Add to cart</button>
     <i class="fa-regular fa-heart"></i>
    </div>
    </div>
   </div>`;
    elementDom.innerHTML += showProductItem;
  }
}
showProduct(product, productDom);
showProduct(specialProduct, specialListDom);

let cartDom = document.getElementById("cart-items");
let badgeDom = document.getElementById("cart-badge");
let cartProductItem = document.getElementById("cart-items");
let dollarsAmount = document.getElementById("dollars-amount");
var splittedAmount = dollarsAmount.innerHTML;

function addToCart(id, myItems) {
  let clickedItem = product.forEach((item) => {
    if (item.id == id) {
      cartDom.innerHTML += `<img src="${item.imageUrl}" alt="${item.title}" class='cart-imgs'> <div class="cart-title"> <p> 
      ${item.title}</p> <p class='cart-product-amount'>$${item.price}</p></div><hr>`;

      dollarsAmount.innerHTML =
        "$" +
        (parseInt(dollarsAmount.innerHTML.split("$")[1]) +
          parseInt(item.price));
    }
  });
  let cartDomLength = document.querySelectorAll(".cart-imgs");
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartDomLength.length;
}

function openCartMenu() {
  if (cartDom.innerHTML !== "") {
    if (cartContainer.style.display == "block") {
      cartContainer.style.display = "none";
    } else {
      cartContainer.style.display = "block";
    }
  } else {
    alert("please add to cart first");
  }
}

cartIcon.addEventListener("click", openCartMenu);
