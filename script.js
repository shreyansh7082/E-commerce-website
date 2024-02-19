const wrapper = document.querySelector(".sliderWrapper");
console.log(wrapper);
const menuItem = document.querySelectorAll(".menuItem");

const product = [
  {
    id: 1,
    title: "Air Force",
    price: 99,
    colors: [
      {
        code: "#fff",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/765d30d8-2833-4686-8a15-a82103548ec1/variations/Default_white_air_jordan_sneaker_2_765d30d8-2833-4686-8a15-a82103548ec1_0.png",
      },
      {
        code: "darkblue",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/ce427f89-ba5d-4c83-957c-a1afdc7d85e6/variations/Default_nike_air_jordan_dark_blue_sneaker_1_ce427f89-ba5d-4c83-957c-a1afdc7d85e6_0.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 122,
    colors: [
      {
        code: "green",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/64978af8-f8a5-4daf-9790-fabbaa1dd930/variations/Default_green_air_jordan_sneaker_2_64978af8-f8a5-4daf-9790-fabbaa1dd930_0.png",
      },
      {
        code: "orange",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/fb5734ff-020c-4a8d-8407-52da9fea1af7/variations/Default_nike_air_jordan_orange_sneaker_2_fb5734ff-020c-4a8d-8407-52da9fea1af7_0.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 119,
    colors: [
      {
        code: "gray",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/cf883e79-4fa3-4313-aba8-d178a058ca42/variations/Default_nike_air_jordan_gray_sneaker_0_cf883e79-4fa3-4313-aba8-d178a058ca42_0.png",
      },
      {
        code: "darkblue",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/ce427f89-ba5d-4c83-957c-a1afdc7d85e6/variations/Default_nike_air_jordan_dark_blue_sneaker_1_ce427f89-ba5d-4c83-957c-a1afdc7d85e6_0.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 112,
    colors: [
      {
        code: "yellow",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/1cf3721e-8eb6-4a6d-bbea-75d1af8ae239/variations/Default_create_high_quality_image_with_air_jordan_shoe_in_yell_2_1cf3721e-8eb6-4a6d-bbea-75d1af8ae239_0.png?w=512",
      },
      {
        code: "darkblue",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/ce427f89-ba5d-4c83-957c-a1afdc7d85e6/variations/Default_nike_air_jordan_dark_blue_sneaker_1_ce427f89-ba5d-4c83-957c-a1afdc7d85e6_0.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 122,
    colors: [
      {
        code: "red",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/d06f89d4-7fee-4f7c-b49b-656ed964069a/variations/Default_create_high_quality_image_with_nike_shoe_3_d06f89d4-7fee-4f7c-b49b-656ed964069a_0.png",
      },
      {
        code: "darkblue",
        img: "https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/5e134d85-5475-41c2-bc7f-b651e3185e2f/variations/Default_nike_air_jordan_blue_sneaker_0_5e134d85-5475-41c2-bc7f-b651e3185e2f_0.png",
      },
    ],
  },
];

let choosenProduct = product[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    ///change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = product[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSize.forEach((size) => {
      size.style.backgroundColor = "#000";
      size.style.color = "#fff";
    });
    size.style.backgroundColor = "#fff";
    size.style.color = "#000";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
  payment.style.display = "block";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});
