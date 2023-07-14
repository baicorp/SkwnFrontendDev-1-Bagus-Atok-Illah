$(document).ready(function () {
  fetch("https://dummyjson.com/products/category/furniture")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
      for (product of data.products) {
        const imgItem = createImgItem(
          product.thumbnail,
          product.price,
          product.title
        );
        $(".product-img").append(imgItem);
      }
    });

  $(".product-img-container");

  $("#left-arrow").click(() => {
    console.log("kiri");
  });
  $("#right-arrow").click(() => {
    console.log("kanan");
  });

  function createImgItem(productImgThumbnail, productPrice, productName) {
    const productImgItem = $("<div>").addClass("product-img__item");

    const image = $("<img>")
      .attr("src", `${productImgThumbnail}`)
      .attr("alt", "");
    const productImg = $("<div>").attr("id", "product-img");

    const price = $("<p>")
      .addClass("product__price product-img__price")
      .text(`${productPrice}`);
    const name = $("<p>").addClass("product-img__name").text(`${productName}`);

    productImg.append(price, name);
    productImgItem.append(image, productImg);
    return productImgItem;
  }
});
