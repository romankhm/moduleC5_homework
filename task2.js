const parser = new DOMParser();

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const jsonObject = JSON.parse (jsonString)

var list1=[];

var i;
for (i = 0; i < jsonObject.list.length; i++) {
  var student_var = jsonObject.list[i];
  list1[i]= {'name': student_var.name, 'age':student_var.age, 'prof':student_var.prof}
}

var resutls = {'list': [list1]}
console.log(resutls)