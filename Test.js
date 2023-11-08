let kids = ["Natalie", "Brittany", "Zachary"];
kids.sort(); // Sorts the array
let numKids = kids.length;
for(let i = 0; i < numKids; i++) {
 console.log(kids[i]);
}

function compareAscendingNumber(a, b) {
    if (a < b) return -1; // right order
    else if (a == b) return 0; // same values
    else return 1; // swap, wrong order
   }


