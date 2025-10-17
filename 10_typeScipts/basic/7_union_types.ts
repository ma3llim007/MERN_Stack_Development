// Union is the types of different data types combination
let score: number | string = 33;

type User = {
    name: string;
    id: number;
};

type Admin = {
    name: string;
    id: number;
};

let john: User = {
    name: "john",
    id: 13,
};

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

getDbId(3);
getDbId("3");

// Array
const data: (string | number)[] = [1, 2, 3, "4"];

let seatAllotment: "asile" | "midde" | "window";
seatAllotment = "asile"
