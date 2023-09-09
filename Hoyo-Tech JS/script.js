// 1. Write a JavaScript function that calculates the factorial of a given positive integer. Provide both the function definition and an example of its usage.

function Factiorial(number) {
    if (number < 0 || !Number.isInteger(number)) {
        return `Wrong input!!`;
    }

    if (number === 0) {
        return 1;
    }

    return number * Factiorial(number - 1);
}

const result = Factiorial(20);
console.log(result);

// 2. Create an array of objects in JavaScript, each representing a book with properties like title, author, and publication year. Write code to filter the books published after the year 2000 and display their titles.

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 2001
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 2010
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        publicationYear: 1997
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationYear: 2008
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813
    }
];

const filteredBooks = books.filter(x => x.publicationYear > 2000);
filteredBooks.forEach(x => {
    console.log(`${x.title}, ${x.author}, ${x.publicationYear}`);
})

// 3. Write a JavaScript function that sorts an array of numbers in ascending order without using the built-in sort() method. Provide the function definition and an example of how to use it.

function sorted(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j + 1];
                numbers[j + 1] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

const numbers = [5, 3, 9, 2, 8, 1, 7, 6, 4, 0];
console.log(sorted(numbers));

// 4. Write a JavaScript function that takes an array of strings as input and returns the longest string in the array. Provide both the function definition and an example of its usage.

function longestStringFinder(string) {
    if (string === 0) {
        return null;
    }

    let longestString = string[0];

    for (let i = 0; i < string.length; i++) {
        if (string[i].length > longestString.length) {
            longestString = string[i];
        }
    }

    return longestString;
}

const arrayOfStrings = ['phone', 'name', 'weather', 'people', 'thebiggeststringofthemall'];
const findTheString = longestStringFinder(arrayOfStrings);
console.log(findTheString);

// 5. Implement a JavaScript class representing a basic shopping cart. The class should allow users to add items to the cart, remove items, and calculate the total cost of items in the cart. Provide a usage example of this class.

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(itemName, price, quantity = 1) {
        const newItems = {
            name: itemName,
            price: price,
            quantity: quantity
        };
        this.items.push(newItems);
    }

    removeItem(itemName) {
        const item = this.items.findIndex(item => item.name === itemName)
        if (item !== -1) {
            this.items.splice(item, 1);
        }
    }

    calcTotal() {
        const totalPrice = this.items.price * this.items.quantity
        return totalPrice;
    }
}

const myCart = new ShoppingCart();

myCart.addItem("Shoes", 50, 2);
myCart.addItem("T-shirt", 200);
myCart.addItem("Jeans", 40);

console.log("Current cart items:", myCart.items);

myCart.removeItem("T-shirt");

console.log("Updated cart items:", myCart.items);

const totalCost = myCart.calcTotal();
console.log("Total cost of items in the cart: $" + totalCost);

// 6. Create a JavaScript function that makes an asynchronous HTTP GET request to an API endpoint and returns the data retrieved. Handle any potential errors that may occur during the request. Provide an example of calling this function and using the data it retrieves.

// Use the JSONPlaceholder API: https://jsonplaceholder.typicode.com/

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }

}

fetchData().then(data => {
    console.log(data);
})


// 7. Create a JavaScript function that implements a basic debounce mechanism. You can use an input or a button as an example. Provide an example of when and why you might use it in a web application.

function debounceMechanism(func, timeout = 1500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput() {
    console.log(`Press and wait`);
}
const processChange = debounceMechanism(() => saveInput());

document.getElementById('btn').addEventListener('click', function () {
    processChange();
})