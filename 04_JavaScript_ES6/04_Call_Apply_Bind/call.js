let UserDetails = {
    name: "Mohd Sameer",
    Age: 18,
    Designation:"Software Engineer"
}
let UserDetails2 = {
    name: "Mohd",
    Age: 19,
    Designation:"Software Engineer"
}
let UserDetails3 = {
    name: "Sameer",
    Age: 20,
    Designation:"Software Engineer"
}

function Print() {
    console.log(this.name);
}
Print.call(UserDetails)
Print.call(UserDetails2)
Print.call(UserDetails3)