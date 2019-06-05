// Setting and Accessing Values on Objects
// Arrays as Values
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// ("fullTimeIn:", nashvilleSoftwareSchool.instructors.fullTime);
// ("partTimeIn:", nashvilleSoftwareSchool.instructors.partTime);
// ("specificInOne:", nashvilleSoftwareSchool.instructors.fullTime[4]);
// ("specificInTwo:", nashvilleSoftwareSchool.instructors.partTime[0]);






// Practice: Accessing Property Values
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

let bassPlayer = beatles.members[1].name
let yearFormed = beatles.history.formed
let yearDisbanded = beatles.history.disbanded
let bassPlayerBirth = beatles.members[1].birth
let magicalTour = beatles.albums[3]
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. 
// He contributed heavily to the Magical Myster Tour Album.
console.log(`${bassPlayer} was in the Beatles from ${yearFormed} to ${yearDisbanded}.  
He was born in ${bassPlayerBirth}.  He constributed heavily to the ${magicalTour} Album.`)


// Selecting and looping through objects lightning exercise
// exercise #1 - Loop through this array of objects and console.log "_name_'s job title is _title_."
let employees = [
    {
      name: "Bob",
      department: "sales",
      title: "sales manager"
    },
    {
      name: "Tina",
      department: "finance",
      title: "director of finance"
    },
    {
      name: "Randy",
      department: "IT",
      title: "hardware guy"
    },
    {
      name: "Glenda",
      department: "C-suite",
      title: "CEO"
    }
  ]

  employees.forEach( function(employee) {
      console.log(`${employees.name}'s job title is ${employees.title}.`);
  });

//   OR you can do it this way

  for (let i = 0; i < employees.length; i++) {
      console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
    }

    // Example:
// let nums = [1,2,3,4,5]

// nums.forEach( function(item) {
//     console.log("this is a number:", item)
// })


// exercise #2 
// Functions can return a value that we can capture:
// 1. Write a function that takes a string of a dog breed as an argument (like 'border collie')
// 2. Have the function return "my favorite dog breed is" plus the passed in string. 
// If no argument is passed to the function, return "I like cats".
// 3. Execute the function in a way that captures the returned value in a variable.
// 4. Console.log the string "When it comes to pets," plus the returned value of the function.

function printFaveDog(breed) {
    if (breed) {
        return`my favorite dog breed is ${breed}.`;
    }
    else {
        return "I like cats."
    }
}

let message = printFaveDog("Aussie/Border Collie mix")
console.log(`When it comes to pets,`, message );

let sad = printFaveDog()
console.log(`When it comes to pets, `, sad)






console.log(`hello`);
// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const pet = {
    name: "Murphis",
    species: "Aussie mix",
    nicknames: ["Murph", "Poochie Bone", "Mr. Fuzzy Man"],
    age: 4,
    goOut: function(action) {
        let nick = this.randomNick()
        return `${nick} wants to go out an ${action}`
    },
    randonNick: function() {
        return this.nicknames[2]
    }
}

// let msg = myPet.goOut("chase chipmunks");

// document.querySelector(".dog-msg").textContent = msg;







// lightning exercises
// #1 Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life) /*this is creating a reference to the object and dug into each key to find what we were looking for*/
let meaning = "meaning_of_life"
console.log(hitchhikers_guide.random_facts.ultimate_answer[meaning]);
// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`








// 2 ## An object's properties can be accessed by dot notation or bracket notation

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}


// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
console.log(`Our company's lawyer is ${employee.name}`)

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
console.log(`Jeff was hired on ${employee["hire_date"]}.`)

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. 
// Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
employee.vacation_days = "20";

let eom = "employee_of_the_month";
// 4. Use the variable above to add a new property to `employee`. 
// Set its value to `false`. Should you use dot or bracket notation?
employee[eom] = false
console.log(employee)




// #3 ## Objects' keys can contain values of any type, even functions.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  action: paintStroke(),
},

// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

// BONUS:
// Add a method that allows us to add new tools for the painter.

addService: function(need) {
    this.service.push(need);
    console.log(`${need} has been added to service!`);
},
action: function(object) {
    return `The painter will paint the ${object}`;
},
newTools: function(tool) {
    this.tools.push(tool);
    console.log(`${tool} has been added!`);
},

console.log(painter);

painter.addService('paint-job');
painter.addService('redo');

console.log(painter.action('wall'));
painter.newTools('water-bucket');