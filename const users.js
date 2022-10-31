const users = [
	{ id: "1", name: "John Smith", age: 20 },
	{ id: "2", name: "Ann Smith", age: 24 },
	{ id: "3", name: "Tom Jones", age: 31 },
	{ id: "4", name: "Rose Peterson", age: 17 },
	{ id: "5", name: "Alex John", age: 25 },
	{ id: "6", name: "Ronald Jones", age: 63 },
	{ id: "7", name: "Elton Smith", age: 16 },
	{ id: "8", name: "Simon Peterson", age: 30 },
	{ id: "9", name: "Daniel Cane", age: 51 },
];

var list = new Array(users);

//const ages = users.find(adult);

function lists(list){

	  while (list.length > 0)
    {
      if(list.age > 17){
	   return list}
     }
  }

console.log(list);