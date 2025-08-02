//for of 

//["","","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]
// for(const num of arr){
// console.log(num);
// }

const greeting  = " Hello world"

// for(const greet of greeting){
//     console.log(greet)
// }

//maps 
const map = new Map()
map.set('IN',"India")
map.set('NP', "Nepal")
map.set('USA',"ameriaca")

// console.log(map)

// for(const [key,value] of map){
//     console.log(key, ': ', value);
// }

// const myObj = {
//     'game': 'NFS',
//     'game2':'Spiderman'
// }

// for(const[key,value] of myObj){
//     console.log(key,":",value);
// } // not itrable

const myObj = {
    js: 'javaScript',
    cpp : 'C++',
    rb: "ruby"
}

for (const key in myObj) {
   console.log(myObj[key]);
}
for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
}
