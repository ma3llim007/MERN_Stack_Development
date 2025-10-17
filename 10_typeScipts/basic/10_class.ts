class User {
    private _courseCount = 1;
    private readonly city: string = "Hyderabad";
    constructor(public email: string, public name: string) {}

    get getAppleEmail(): string {
        return `Apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count Should Be More Than 1");
        }
        this._courseCount = courseNum
    }
}

const sameer = new User("sameer@gmail.com", "Mohd Sameer");
