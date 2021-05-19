/*
 The books array contain the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY
*/
window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];



///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 
*/
function renderBook(book) {
  const { title, authors, description, price, rating, quantity } = book;
  const content = `
  <div class="book">
    <div class="details">
      <div class="title">
        ${title}
        <span class="rating">${rating}</span>
      </div>
      <div class="authors">${authors}</div>
      <div class="description">
        ${description}
      </div>
      <button class="removeBtn">"Remove from cart"</button>
    </div>
    <div class="quantity">${quantity}</div>
    <div class="price">${price}</div>
  </div>
  `;
  return content;
};

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {
  let sum = 0;

  if (window.books.length > 0) {
    window.books.forEach(book => {
      sum += book.price * book.quantity;
    });
  }

  return sum;
}
/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".

/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {
  const cartItems = document.querySelector("#cartItems");
  const totalPrice = document.querySelector('.total-price');
  const content = window.books.map(renderBook).join("");
  
  if (content === '') {
    cartItems.innerText = 'Nothing in cart';
  } else {
    cartItems.innerHTML = content;
  }

  const total = calculateTotal();

  totalPrice.innerText = '$' + total;
}

/*
  Sort the books array by price in ascending order then call render()
*/
function sortByPrice() { // i stole this from the module and idk
  window.books.sort((book1, book2) => {
    if (book1.price > book2.price) {
      return 1;
    } else if (book1.price < book2.price) {
      return -1;
    } else {
      return 0;
    }
  })
  render();
}


/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call render()
*/
function main() {
  const sortBtn = document.querySelector('#sortBtn');
  sortBtn.addEventListener('click', () => {
    sortByPrice();
  });
  render();
}

window.addEventListener("DOMContentLoaded", main);






/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;




///////////////
// ASSIGNMENT ABOVE THIS LINE - 20.7

//   const totalPrice = `

//   <div class="price">${price}*${quantity}</div>
//   // return total
// `;

// return totalPrice
// }


  // const render = () => {
//   // get the parent element
//   const main = document.querySelector("main");

//   // 1. empty the parent element
//   main.innerHTML = "";

//   // 2. get the parks HTML
//   const content = books.map(renderOneBook).join("");

//   // 3. Set innerHTML of parent element
//   main.innerHTML = content;
// };



/*

const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#parkForm");
  const formData = new FormData(form);

  // Keep track of if any errors are found
  let hasErrors = false;

  // Validation code skipped for brevity
  // ...

  // If there are no errors
  if (!hasErrors) {
    // Create an empty object
    const park = {
      name: formData.get("parkName"),
      location: formData.get("parkLocation"),
      description: formData.get("parkDescription"),
      established: formData.get("parkEstablished"),
      area: formData.get("parkArea"),
      rating: formData.get("parkRating"),
    };

    parks.push(park);

    render();
  }
};


*/

// function validateExists(value) {
//     return value && value.trim();
//   }
  
//   function validateForm(formData) {
//     const errors = {};
  
//      // check if rating was entered
//      if (!validateExists(formData.get("rating"))) {
//       errors.rating = "Please enter a rating";
//     } else {
//       //check if the rating is a number
//       if (!validateNumber(formData.get("rating"))) {
//         errors.rating = "Rating must be a number";
//       } else {
//         // since it is a number, convert it
//         const rating = Number.parseFloat(formData.get("rating"));
//         //check that the rating is between 1 and 5 inclusive
//         if (!validateRange(rating, 1, 5)) {
//           errors.rating = "Rating must be between 1 and 5 inclusive";
//         }
//       }
//     }
  
//   const submitHandler = (event) => {
//     event.preventDefault();
    
//     const form = event.target;
//     const formData = new FormData(form);
  
//     const errors = validateForm(formData);
  
//   // clear all previous errors
//   const errorElements = document.querySelectorAll(".error");
//   for (let element of errorElements) {
//     element.style.display = "none";
//   }
  
//   // display any new errors
//   Object.keys(errors).forEach((key) => {
//     // find the specific error element
//     const errorElement = document.querySelector(`#park_${key} .error`);
//     errorElement.innerHTML = errors[key];
//     errorElement.style.display = "block";
  
//     // if there are no errors
//   if (!Object.keys(errors).length) {
//     //create a new element
//     const parkSection = document.createElement("section");
  
//     // add the park class
//     parkSection.classList.add("park");
  
//     // construct the HTML for this element
//     const content = `
//       <h2>${formData.get("name")}</h2>
//       <div class="location">${formData.get("location")}</div>
//       <div class="description">${formData.get("description")}</div>
//       <button class="rateBtn" title="Add to Favourites"></button>
//       <div class="stats">
//         <div class="established stat">
//           <h3>Established</h3>
//           <div class="value">${moment(formData.get("established")).format(
//             "MMMM D, YYYY"
//           )}</div>
//         </div>
//         <div class="area stat">
//           <h3>Area</h3>
//           <div class="value">${formData.get("area")}</div>
//         </div>
//         <div class="rating stat">
//           <h3>Rating</h3>
//           <div class="value">${formData.get("rating")}</div>
//         </div>
//       </div>
//       `;
  
//     // set the innerHTML
//     parkSection.innerHTML = content;
  
//     //append to the main element
//     document.querySelector("main").appendChild(parkSection);
//   }
//   });
//   };
  
//   const main = () => {
//     // Get the form element
//     const form = document.querySelector("#parkForm");
  
//     // Attach the submit handler
//     form.addEventListener("submit", submitHandler);
//   };
  
//   window.addEventListener("DOMContentLoaded", main);
  