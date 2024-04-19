const datas = [
    { name: 'sam', Profression: "Software Engineer" },
    { name: 'jam', Profression: "Software Engineer" },
    { name: 'doe', Profression: "Software Engineer" }
];

function GetDatas() {
    setTimeout(() => {
        let output = '';
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        });
        document.querySelector("body").innerHTML = output;
    }, 1000);
}

function CreateUserData(newData,callback) {
    setTimeout(() => {
        datas.push(newData);
        callback();
    }, 2000);
}
CreateUserData({ name: 'doe2', Profression: "Software Engineer" }, GetDatas);