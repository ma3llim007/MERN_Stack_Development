// Expression 1 is executed (one time) before the execution of the code block
// Expression 2 defines the condition for executing the code block
// Expression 3 is executed (every time) after the code block has been executed


// exercises
    // Example
    function ForOne(){
        for(let i=1;i<=5;i++){
            console.log(i);
        }
    }
    // ForOne()

    // 01 Two Square Calculator
    function SquareCalculator(arr) {
        for (let i = 0; i <arr.length; i++){
            console.log('The square of ' + arr[i] +' is ' + arr[i]*arr[i]);
        }
    }
    // SquareCalculator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // 02 Sum of Even Numbers
    function SumOfEvenNumber(arr) {
        let sum = 0;    
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 ==0) {
                sum = sum+arr[i];
            }
        }
        console.log(`The sum of even numbers from ${arr[0]} to ${arr[9]} is ${sum}`);
    }
    // SumOfEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // 03 Multiplication Table
    function MultiplicationTable(num) {
        for (let i = 1; i <= 10; i++)  {
            console.log(`${num} x ${i} = ${ num * i }`);
        }
    }
    // MultiplicationTable(9)

    // 04 Reverse The Array
    function ReverseArray(Array) {
        const ReverseArray = Array.reverse();
        console.log(ReverseArray);
    }
    // ReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
