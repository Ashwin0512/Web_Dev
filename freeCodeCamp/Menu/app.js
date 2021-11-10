const menu = [
    {
        id: 1,
        title: "Paani Puri",
        category: "breakfast",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg",
        cost: 50,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        title: "Tikka Masala",
        category: "breakfast",
        img: "https://sukhis.com/wp-content/uploads/2018/10/shutterstock_620407940-1024x683.jpg",
        cost: 190,
        desc: "In volutpat erat vitae tellus egestas feugiat. Vestibulum vitae nisi ac arcu pellentesque elementum. Aliquam gravida tristique metus."
    },
    {
        id: 3,
        title: "Chai",
        category: "beverages",
        img: "https://sukhis.com/wp-content/uploads/2017/06/Indian-Chai.jpg",
        cost: 15,
        desc: "The Indian name for tea is Chai. You make chai by cooking a certain ration of water to milk, then add sugar as a sweetener and black tea together. "
    },
    {
        id: 4,
        title: "diner double",
        category: "lunch",
        cost: 500,
        img: "https://c.ndtvimg.com/2020-09/if4pp5j8_vegetarian_625x300_30_September_20.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 5,
        title: "godzilla milkshake",
        category: "beverages",
        cost: 450,
        img: "https://thumbs.dreamstime.com/z/austria-forest-fruits-milkshake-cottage-two-long-glasses-placed-table-mountain-hut-filled-each-glass-has-green-147381447.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 6,
        title: "country delight",
        category: "breakfast",
        cost: 650,
        img: "https://www.dairyfoods.com/ext/resources/DF/2019/September/desserts/dfx0919-Outlook-img-open.jpg?1567616676",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 7,
        title: "egg attack",
        category: "lunch",
        cost: 799,
        img: "https://c.ndtvimg.com/2019-11/aud73doo_egg-curry_625x300_04_November_19.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 8,
        title: "oreo dream",
        category: "beverages",
        cost: 199,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLgnUPlGEMCHtmbTTr-DmBeUd5jI-slnW2Q&usqp=CAU",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 9,
        title: "american classic",
        category: "lunch",
        cost: 189,
        img: "https://media.istockphoto.com/photos/homemade-memorial-day-hamburger-picnic-picture-id531564300?k=20&m=531564300&s=612x612&w=0&h=j8y_MXtEORMI14XvyuzpzrB3msBOwzl-DeWhEHyMFWk=",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 10,
        title: "quarantine buddy",
        category: "beverages",
        cost: 245,
        img: "https://robbreport.com/wp-content/uploads/2021/08/mojito_adobe_stock.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 11,
        title: "bison steak",
        category: "lunch",
        cost: 469,
        img: "https://c.ndtvimg.com/2020-05/0ug0nbfo_chicken-masala_625x300_28_May_20.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 12,
        title: "Chhole Bhature",
        category: "dinner",
        cost: 269,
        img: "https://img-global.cpcdn.com/recipes/1d9ce5d3344e6a34/1200x630cq70/photo.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
]

const allItems = document.querySelector(".items");
const buttons = document.querySelector(".buttons");

function displayMenuItems(menuItems)    {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="item-img">
        <div class="item-info">
            <div class="item-name-section">
                <h4 class="item-name">${item.title}</h4>
                <h4 class="cost">Rs. ${item.cost}</h4>
            </div>
            <div class="item-name-underline"></div>
            <p class="info-text">
                ${item.desc}
            </p>
        </div>
    </article>`
    });

    displayMenu = displayMenu.join("");
    allItems.innerHTML = displayMenu;
}

function displayButtons(menuItems)   {
    const categories = menuItems.reduce(function(values,item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },['all']);

    const categoryButtons = categories.map(function(item){
        return `<button class="btn" data-id=${item}>${item}</button>`
    }).join("");
    buttons.innerHTML = categoryButtons;
    const button = document.querySelectorAll(".btn");

    console.log(button);

    button.forEach(function(button){
        button.addEventListener("click", function(event) {
            const category = event.currentTarget.dataset.id;
    
            const menuCaterory = menu.filter(function(menuItem){
                if(menuItem.category === category)  {
                    return menuItem;
                }
            });
    
            if(category === "all")  {
                displayMenuItems(menu);
            } else  {
                displayMenuItems(menuCaterory);
            }
        })
    })
}

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayButtons(menu);
});
