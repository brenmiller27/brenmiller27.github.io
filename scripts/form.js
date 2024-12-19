document. addEventListener("DOMContentLoaded" , function () {
    const productArray = [
        {
          id: "fc-1888",
          name: "Site Plan",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "Travel Website",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "Trip plan",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "Accesibility",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "Guides",
          averagerating: 5.0
        }
      ];

    const productSelect =  document.getElementById('productName');

    productArray.forEach ((product) => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name ;
        productSelect.appendChild(option);

    });
});

if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
    document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${reviewCount} reviews.</p>`;
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

