class User {
    constructor(public _name: string, public age: number) {}

    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}
let u1 = new User("sam", 25);
