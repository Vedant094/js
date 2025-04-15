const student={
    fullName:"Vedant Raturi",
    marks:93.5,

    printMarks: function(){
        console.log("marks= ",this.marks);
    },
};

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
}

 const V={
    salary:5000,
    calcTax(){
        console.log("Tax rate is 20%");
    },
}
const V2={
    salary:5000,
}
const V3={
    salary:5000,
}
const V4={
    salary:5000,
}

V.__proto__=employee;
V2.__proto__=employee;
V3.__proto__=employee;
V4.__proto__=employee;

class bot{
    charge(){
        console.log("Charge me");
    }
};
class bot1 extends bot{
    constructor(){
        super();//to invoke the parent constructor
        console.log("This is the improved version of bot.");
    }
    work(){
        super.charge();
        console.log("Let's work");
    }
};
let obj=new bot1();

obj.work();