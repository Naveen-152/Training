'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

//Expenses Track


function alertUser() {
  alert("Enter the Number in Field");
}

async function addAmount() {
  let amount = await document.getElementById("amount").value;
  if (amount) {
    return amount;
  } else {
    reject("error")
  }
}

function increment(callback) {
  addAmount().then((data)=> {
    callback(data,"Add");
      let increament_amount =+data;
      let old_value =+document.getElementById("increment").innerHTML;
      let total = increament_amount+old_value;
      return total
  }).then((data)=> {
    let select = document.getElementById("increment");
    select.innerHTML =+data;
  }).catch((err)=> {
    alertUser();
  });
}

function decrement(callback) {
  let reduceamount = new Promise((resolve,reject)=> {
    let present = document.getElementById("amount").value;
    if (present) {
      resolve(present);
    } else {
      reject(err);
    }
  });
  reduceamount.then((data)=> {
    callback(data,"Remove")
    let old_value =+document.getElementById("increment").innerHTML;
    let reduction = old_value-Number(data);
    document.getElementById("increment").innerHTML=reduction;
  }).catch((err)=> {
    alertUser()
  });
}

function transaction(amount,reference) {
  let date = new Date();
  let parent = document.getElementById("transaction")
  let para = document.createElement("p");
  let childnode = document.createTextNode(`${date.toISOString()}-${amount}-${reference}`);
  para.appendChild(childnode);
  parent.appendChild(para);
}

//Calculation of 10% of all staff salary using reduce method

let staff =[
  {name:"naveen",salary:200},
  {name:"pradeep",salary:300},
  {name:"mani",salary:300},
  {name:"gobi",salary:400},
  {name:"praveen",salary:500},
  {name:"sathish",salary:600},
  {name:"anbumani",salary:300},
  {name:"vivek",salary:300}
];
let staffinfo = staff.reduce((total,current)=> {
  var percentage = current.salary*0.1;
  total.percentage_amount+=percentage;
  total["total-amount"]+=current.salary;
  return total;
},{percentage_amount:0,"total-amount":0});

document.getElementById("reduce").innerHTML =`reduce method output :${JSON.stringify(staffinfo)}`;

//array destructuring
let [staff1,staff2] = staff;
document.getElementById("arrdest").innerHTML=`Array Destructuring output :${JSON.stringify(staff1)},${JSON.stringify(staff2)}`;

//object destructuring
let {name,salary} = staff[0];
document.getElementById("objdest").innerHTML=`Object Destructuring output :${name},${salary}`;

//spread operator
let pets = ["cat","dog","rabbits"];
let carnivorous = ["lion","tiger","leopard","wolf"];
let animal = [...pets,...carnivorous];
document.getElementById("spread").innerHTML =`spread operator output :${animal}`;

//rest operator
function rest(a,b,...c) {
  document.getElementById("rest").innerHTML = c;
}
rest(1,2,3,4,5,6,7,8,9,10);

//optional chaining 
var obj = {
  fullname:"naveenkumar",
  age:21,
  hoppies:{morning:"exercise",evening:"listening music"}
};
document.getElementById("optchain").innerHTML=`optional chaining output :${obj?.hoppies?.night}`;


//map method
var arraynum = [1,2,3,4,5,6,7,8,9,10];
var maparray = arraynum.map((value)=> {
  return value*2;
});
document.getElementById("map").innerHTML=`map method output :${maparray}`;

//find method
var nums = [10,20,3,5,7,45,60,80];
var findarr = nums.find((value)=> {
  return value>30;
});
document.getElementById("find").innerHTML = `find method output :${findarr}`;









