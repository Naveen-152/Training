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
