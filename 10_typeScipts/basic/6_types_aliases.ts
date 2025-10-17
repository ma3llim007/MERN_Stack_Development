type User = {
    readonly _id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    creditCard?: number;
};

let userObj: User = {
    _id: "1234",
    name: "test",
    email: "test@test.com",
    password: "password01",
    isActive: false,
};

type cardNumber = {
    cardnumber: string;
};
type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber &
    cardDate & {
        cvv: number;
    };

let cardDetailsObj: cardDetails = {
    cardnumber: "123",
    cardDate: "10-06-2025",
    cvv: 123,
};
