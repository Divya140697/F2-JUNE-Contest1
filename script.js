/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "Developer" },
    { id: 2, name: "jack", age: "20", profession: "Developer" },
    { id: 3, name: "karen", age: "19",profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
  

  let a =  arr.filter(d => d.profession === "Developer");
   a.map(d => console.log(d));
  }
  
  function PrintDeveloperbyForEach() {
 

   arr.forEach(e => {
      if(e.profession === "Developer")
      {
         console.log(e);
      }
   })
  }
  
  function addData() {
   
    let newStudent = {id:4, name:"susan", age:"20" , profession:"intern"};
    arr.push(newStudent);
    console.log(arr);
  }
  
  function removeAdmin() {
  

   let ans = arr.filter(a => a.profession !== "admin");
   console.log(ans);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let new_Arr = [
      { id: 4, name: "ovaid", age: "24", profession: "Software Engineer" },
      { id: 5, name: "suhaib", age: "16",  profession: "Software Trainee"  },
      { id: 6, name: "tafim", age: "16",  profession: "Trainer"  },
    ];
  
    let concatenatedArr = arr.concat(new_Arr);
    console.log(concatenatedArr);
  }