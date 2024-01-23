// Symbol in Object



const MySyb = Symbol("Sameer");

const UserList = {
    name:"Name",
    class: 12,
    [MySyb]: "Key",
    
}
console.log(UserList);
console.log(UserList[MySyb]);