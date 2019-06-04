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