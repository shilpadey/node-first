const multiply = (a,b) => {
    return a * b;
};


const student = {
    name : 'Manish',
    age : 31,
    greet () {
        console.log('HI , I am ' + this.name);
    },
    greeting : () => {
        console.log('Hi, I am ' + this.name);
    }
};

student.greet();
student.greeting();
//console.log(multiply(2,5));