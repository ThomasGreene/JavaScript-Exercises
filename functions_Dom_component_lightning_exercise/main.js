// DOM component lightning exercise
let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]
// referencing person - either method works
family.forEach( function(person) {
      document.querySelector("#family").innerHTML += `<h3>${person.name}</h3>`
  })

//   referencing family[i] - either method works
for ( let i = 0; i < family.length; i++) {
    document.querySelector("#family").innerHTML += `<h3>${family[i].name}</h3>`
}
