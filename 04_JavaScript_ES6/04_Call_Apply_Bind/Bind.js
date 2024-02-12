let UserDetails = {
    Name: "Mohd Sameer",
    Age: 19,
    Designation:"Software Engineer"
}
function Print() {
    console.log(this.Name);
}
let CopyData = Print.bind(UserDetails);
CopyData();