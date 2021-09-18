const reviews = [
    {
        id: 1,
        name: "nehal nenawati",
        role: "analyst",
        image: "https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "shreya maheshwari",
        role: "electrical enginner",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "ashwin raj singh",
        role: "intern",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "aditya somani",
        role: "the boss",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
      {
        id: 5,
        name: "arundhati bajaj",
        role: "web developer",
        image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
      }
];

const img = document.getElementById("profile-image");
const author = document.getElementById("name");
const role = document.getElementById("role");
const text = document.getElementById("text");
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const surprise = document.getElementById("surprise");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function()  {
    const item = reviews[currentItem];
    img.src = item.image;
    author.textContent = item.name;
    role.textContent = item.role;
    text.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.image;
    author.textContent = item.name;
    role.textContent = item.role;
    text.textContent = item.text;
}

next.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1)    {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prev.addEventListener("click",function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

function randomPerson() {
    return Math.floor(Math.random()*reviews.length);
}

surprise.addEventListener("click", function() {
    const item = reviews[randomPerson()];
    img.src = item.image;
    author.textContent = item.name;
    role.textContent = item.role;
    text.textContent = item.text;
});
