class Shery {
    static version = 1.0;
}

class Payment {
    constructor(protected amount: number) {}

    isPaymentValid(amount: number) {
        return amount > 0;
    }
}
