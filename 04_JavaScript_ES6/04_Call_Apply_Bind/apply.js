let UserDetails = {
    Name: "Mohd Sameer",
    Age: 19,
    Designation:"Software Engineer"
}

function Print(state,country) {
    console.log(this.Name + " " + state + " " + country);
}
Print.apply(UserDetails,["Hyderabad","Telangana"]);