//Excercise 1
String.prototype.filter = function (filterArr) {
    if (filterArr.length == 0) 
        return this;
    var result = this;
    for(let i=0; i<filterArr.length;i++) {
        result = result.replace(filterArr[i],"");
    }
    return result;
}

console.log ("Excercise 1");
console.log ("This is not".filter(["is"]));
//Excercise 2
Array.prototype.bubbleSort = function() {
    
 for(var i = 0; i < this.length; i++){
    
   for(var j = 0; j < ( this.length - i -1 ); j++){

     if(this[j] > this[j+1]){
        
       var temp = this[j]
       this[j] = this[j + 1]
       this[j+1] = temp
     }
   }
 }

 return this;
}

console.log ("Excercise 2");
console.log ([4,5,3,2,1].bubbleSort());


//Excercise 3
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  subject;
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach(subject) {
    console.log(this.name + " is now teaching " + subject)
  };
}

console.log ("Excercise 3");
const teacher = new Teacher("Taha");
teacher.teach("WAP");


//Excercise 4
class Person4 {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  greeting() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.year} years old.`);
  }
  salute() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
}

class Professor41 extends Person4 {
  department;
  constructor(name, year, department) {
    super(name);
    this.department = department;
  }

  greeting() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.”`);
  }
}

class Student41 extends Person4 {
  major;
  constructor(name, year, major) {
    super(name);
    this.major = major;
  }

   greeting() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
  }
}

console.log ("Excercise 4.1");
const professor = new Professor41("Taha", 45, "CS");
professor.greeting();
professor.salute();
const student = new Student41("Hoang", 33, "WAP");
student.greeting();
student.salute();


function Professor42(name, year, department){
    this.name = name;
    this.year = year;
    this.department = department;
}

function Student42(name, year, major){
    this.name = name;
    this.year = year;
    this.major = major;
}

Professor42.prototype = Object.create(Person4.prototype);
Professor42.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.”`);
}
Student42.prototype = Object.create(Person4.prototype);
Student42.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
}


console.log ("Excercise 4.2");
const professor1 = new Professor42("Taha", 45, "CS");
professor1.greeting();
professor1.salute();
const student1 = new Student42("Hoang", 33, "WAP");
student1.greeting();
student1.salute();

