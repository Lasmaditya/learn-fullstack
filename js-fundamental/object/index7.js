// Object

let student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduated: true,
    skils: ["js", "c", "flutter"],
    profile: {
      city: "Jakarta",
      address: "Kebon Jeruk",
    },
    "cek status": "yes",
    100: 5,
};
  
// let temp =  100
// // typeof utk cek tipe data
// console.log(student[temp]);
// console.log(student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["cek status"]);
// console.log(student["100"]);
  
// for(let key in student) {//     console.log(key)
//     console.log(student[key])
// }

let height = 160;

let caca = {
  name: "Caca",
  weight: 45,
  height: 155,
  hobbies: ["nonton", "makan"],
  mentionHobbies: function () {
    console.log("Hobby Caca: ");
    for (let i = 0; i < this.hobbies.length; i++) {
      console.log(i + 1 + ". " + this.hobbies[i]);
    }
  },
  cacaHeight: function () {
    console.log(this.height);
  },
};

// console.log(caca);
// caca.mentionHobbies();
// caca.cacaHeight()

// =============================
// Array of objects

let items = [
  {
    id: 1,
    name: "Apple Envy USA",
    type: "fruit",
    price: 75000,
    stock: 10,
  },
  {
    id: 2,
    name: "Carrot Jakarta",
    type: "vegetables",
    price: 50000,
    stock: 5,
  },
  {
    id: 3,
    name: "Dragon Fruit",
    type: "fruit",
    price: 55000,
    stock: 7,
  },
  {
    id: 4,
    name: "Pepaya",
    type: "fruit",
    price: 55000,
    stock: 7,
  },
  {
    id: 5,
    name: "Melon",
    type: "fruit",
    price: 55000,
    stock: 7,
  },
];

function showItems() {
  console.log("Item list: ");
  for (let i = 0; i < items.length; i++) {
    console.log(
      items[i].id + ". " + items[i].name + ", Rp. " + items[i].price + "/kg."
    );
  }
  console.log(items);
}

function addItem(name, type, price, stock) {
  let lastIndex = items.length - 1;
  let id = items[lastIndex].id + 1;
  let tempObj = {
    id,
    name,
    type,
    price,
    stock,
  };
  items.push(tempObj);
}

addItem("Jeruk", "fruit", 100000, 10);
addItem("Sawi", "Vegetables", 5000, 5);
showItems();

// console.log(items);
/**
1. Buatlah sebuah function showItems
Item list:
1. Apple Envy USA, Rp. 75000/kg
2. Carrot Jakarta, Rp. 50000/kg
3. Dragon Fruit, Rp. 55000/kg

2. Buatlah sebuah function addItem
Parameter ada name, type, price, stock
 */