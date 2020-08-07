  //let a = 100;
       // var b = 500;
      //  let sum = a + b

        //let first = "Linda";
      //  let last = "Fosu";
       //console.log(first + last);

        //console.log(sum);

        // let fullName = "Linda Fosu";
        // let fullname = "Awudu Linda";

        // console.log(fullName);
        // console.log(fullname);


       // console.log("true or false:", "0" === 0);

      // let age = 89;
      // alert("Hello, I am " + age + "years old");

     


     // function displayinfo() {

      //  let res =prompt("What is your name?");
     // let res =prompt("what is your age?");
     // alert("Hey, " + res + "you are" + 89 + "year old");
     // }

     // displayinfo();
     let car = {
       name: "Range Rover",
       model: "Sport",
       year: 2020,
       used: true,
       start() {
         return "Vrummmm!!!";
       },

     };
    // alert(car.name);
    // alert(car.start());
    let person = {
      name: "Fosu",
      likes: "Reading",
      age: 406,
      fair: false,
      start() {
        return "Wonderful";
      },
    };
    person.age = 400;
    
   // alert(person["age"]);

    let laptop = {
      brand: "lenovo",
      colour: "black",
      ram: 4,

      start() {
        return "wonderful";
      },
    };
    laptop.ram = 4
   // alert(laptop["ram"]);


   let scores = [30, 10, 22, 65, 67, 90];
  // alert(scores[5]);
  let myself = ["Fosu", 40, 7.1, "Female"];
 // alert(myself[3]);

  let people = [
    { name: "Evans", age: 20 },
    {name: "Emelia", age: 14},
    {name: "Edith", age: 25},
  ];

 // alert(people[2].name);

 // let endOfTerm = {
  //  scores: [50, 20, 85, 45],
  //  subjects: ["Social", "Economics", "Creative arts"],
 // };
 // alert(endOfTerm.scores[1]);

 let age = 15;

 if (age > 15) {
   alert("above 15");
 }
 else {
   alert("not above 15");
 }

 let date = new Date();
 alert(date);
 alert(date.getMonth());
 
 let grade = [57, 68, 55, 78, 40, 89];
 let sum = 0;
 

 for ( index in grade ){
sum = sum + grade[index];
 }

 //alert("sum after loop:" + sum);

 let score = 0;
 let num = 3;

 while (true) {
   if (num % 3 === 0) {
     let a = prompt("please input a multiple");
     score += num;
     num = parseInt(a);

   } else {
     alert("Game over, your score: " + score);
     break;
   }
 }  


 
 


























    








      


       

