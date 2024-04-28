function loadingData(callback) {
    setTimeout(() => {
        console.log("1). Loading Data");
        callback();
    }, 1000);
}

function collectingData(callback) {
    setTimeout(() => {
        console.log("2). Collecting Data");
        callback();
    }, 2000);
}

function approvingData(callback) {
    setTimeout(() => {
        console.log("3). Approving Data");
        callback();
    }, 3000);
}

function approved() {
    setTimeout(() => {
        console.log("4). Approved Data");
    }, 2000);
}

// CallBack Hell
loadingData(function () {
    collectingData(function () { 
        approvingData(function () {
            approved();
        });
    });
});