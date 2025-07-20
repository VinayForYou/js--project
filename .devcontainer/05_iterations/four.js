const myObject = {
  js : 'JavaScript',
  py : 'Python',    
  cpp : 'C++',
  swift : 'Swift',
}
for (const key in myObject) {
   // console.log(`${key} : ${myObject[key]}`);

}

const programming = ["JavaScript", "Python", "C++", "Swift"];
for (const index in programming) {
   console.log(programming[index]);
}