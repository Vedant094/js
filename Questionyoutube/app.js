class User{
name="Vedant"
email="raturivedant69@gmail.com"
viewData(){
    console.log(`Hey ${this.name} your email is (${(this.email)})`);
}
};
class Admin extends User{
editdata(){
    console.log(`The details you want to edit are as follows. Name= ${this.name} , email= ${this.email}`);
}
};
let obj=new Admin();
obj.editdata();