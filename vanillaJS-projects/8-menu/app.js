// array items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    desc: `Cotton candy toffee cake carrot cake cupcake biscuit. Macaroon marshmallow wafer jelly beans jujubes carrot cake cheesecake sweet topping. Gummies carrot cake chocolate croissant toffee gummi bears chupa chups cake.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Carrot cake chocolate tiramisu carrot cake cheesecake pastry lollipop liquorice. Tiramisu ice cream cake marshmallow sugar plum gingerbread fruitcake. Gummi bears jelly beans lollipop cupcake muffin bear claw ice cream sesame snaps gingerbread. Cupcake sweet lollipop marzipan sesame snaps.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Soufflé jelly-o jelly jelly beans gingerbread shortbread. Donut cheesecake bear claw icing gingerbread cotton candy. Soufflé cotton candy biscuit topping jelly beans.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Candy canes cake donut cotton candy sweet halvah marzipan. Bonbon sesame snaps icing muffin carrot cake. Halvah sugar plum chocolate bar jelly-o halvah. Ice cream tootsie roll biscuit chocolate bar candy canes jelly beans biscuit.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNDU0MDMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Bonbon cake chocolate tiramisu oat cake donut. Gummi bears lemon drops chocolate bar danish danish sugar plum cake cheesecake cotton candy. Jelly beans soufflé toffee halvah oat cake dragée biscuit bonbon. Soufflé lemon drops muffin liquorice bear claw pie jujubes jujubes.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8OG0xR29DNXhEeVl8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
    desc: `Croissant lemon drops jujubes carrot cake chocolate cake shortbread chupa chups gummi bears biscuit. Topping croissant jelly-o lemon drops cake liquorice donut tootsie roll chocolate bar. Lemon drops icing brownie gummi bears topping ice cream. Bonbon danish gingerbread jelly jujubes.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Sweet marshmallow tootsie roll candy canes biscuit toffee cake ice cream. Tart cake chocolate cake croissant tootsie roll croissant. Wafer candy dragée chocolate jujubes cookie cake powder. Pastry cake cotton candy muffin cotton candy.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    desc: `Sweet roll fruitcake lollipop dragée jujubes chocolate pudding cotton candy. Cheesecake cake caramels candy canes halvah bonbon jelly shortbread wafer. Pie apple pie tiramisu chocolate chocolate bar jelly soufflé.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1499638309848-e9968540da83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTQ1NDAzMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
    desc: `Shortbread sweet croissant gummi bears macaroon shortbread candy canes chocolate cake. Sweet roll soufflé cake pudding liquorice jelly-o gummi bears powder toffee. Cookie dessert lemon drops caramels jelly. Gummi bears cupcake jelly beans cake sweet brownie.`,
  },
];

//select elements
const menu_container = document.querySelector(".menu-container");
const container_btn = document.querySelector(".btn-container");

// display all itmes when page loads
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
  displayMenyButtons();
});

//function to dynamically populate the HTML
function displayMenuItems(menuItems) {
  // loop over the array
  let displayMenu = menuItems.map(function(item) {
    // return new setup
    // add a string with HTML syntax
    return `
    <article class="menu-item">
      <img class="photo" src=${item.img} alt=${item.title}>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
      </div>
    </article>
    `;
  });
  // join everything together
  displayMenu = displayMenu.join('');
  // add as the data
  menu_container.innerHTML = displayMenu;
}

// function to dynamically add buttons
function displayMenyButtons(){
  // get only unique categories
const categories = menu.reduce(
  function(values, item) {
  // if value is not in the array, add it
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
}, 
// manually added 'all'
['all']          
);

// code to add buttons to HTML
const categoryBtns = categories.map(function(category) {
  return `
    <button
      class="filter-btn"
      type="button"
      data-id="${category}">
      ${category}
    </button>`
}).join("");
// add buttons to HTML
container_btn.innerHTML = categoryBtns;

// select filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
// function for the filter buttons
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }
  });
});
}