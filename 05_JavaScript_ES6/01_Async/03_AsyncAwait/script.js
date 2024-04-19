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

function CreateUserData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (error) {
                resolve();
            } else {
                reject("Something Went Wrong");
            }
        }, 2000);    
    })
    
}
async function start(){
    await CreateUserData({ name: 'doe2', Profression: "Software Engineer" }).catch(error=>console.log(error));
    GetDatas();
}
start();