
import React from 'react';

class Output extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <p>{this.props.username}</p>
      <p>{this.props.password}</p>
      </>
      
    );
  }

}

export class Login extends React.Component {
    constructor(props) {
        super(props);
      this.state = {user:"",password:"", showOutput: false};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.output = this.output.bind(this);
      
    }
    output() {
       this.setState({showOutput:true});
      
    }
    handleSubmit(e) {
      e.preventDefault();
      
    }

    render() {
      return (
        <div>
          <h2>Form</h2>
          <form onSubmit={this.handleSubmit}>
          <label >User Name</label>
            <input type="change" name="username" id="name" value={this.state.user} onChange={(text)=>{
                this.setState({user:text.target.value})
            }}   /> 
            <label >Password</label>
            <input type="password" name="password" id="psw" value={this.state.password} onChange={(even) => {
                this.setState({password:even.target.value});
            }} /> 
            <input type="submit" name="submit" value="submit" onClick={this.output} />
          </form>
            
          <h3>Output</h3>
          {this.state.showOutput && <Output username ={this.state.user} password={this.state.password} />}
        </div>
        );
      }
    }
   export class Expense extends React.Component {
      constructor(props) {
        super(props);
        this.state = {oldamount:0,newamount:0};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        e.preventDefault();
        

      }
      alertUser() {
        alert("Enter the Number in Field");
      }
      async addAmount() {
        try {
          let amount = await this.state.newamount;
          return amount;
          
        }
        catch(err) {
          alert("Enter the number in field");
        }
      }

      increment(callback) {
          this.addAmount().then((data)=> {
              callback(data,"Add");
              let increament_amount =+data;
              let old_value =+this.state.oldamount;
              let total = increament_amount+old_value;
              return total
          }).then((data)=> {
            this.setState({oldamount:data});
          });
        }
       decrement(callback) {
          let reduceamount = new Promise((resolve,reject)=> {
            let present = this.state.newamount;
            if (present) {
              resolve(present);
            } else {
              reject("error");
            }
          });
          reduceamount.then((data)=> {
            callback(data,"Remove")
            let old_value =+this.state.oldamount;
            let reduction = old_value-Number(data);
            this.setState({oldamount:reduction});
          }).catch((err)=> {
            this.alertUser()
          });
        }
      transaction(amount,reference) {
          let date = new Date();
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let seconds = date.getSeconds();
          if (amount!=0) {
            let parent = document.getElementById("transaction")
            let para = document.createElement("p");
            let childnode = document.createTextNode(`Date: ${date.toDateString()} Time: ${hours}:${minutes}:${seconds} - Rs:${amount} - ${reference}`);
            para.appendChild(childnode);
            parent.appendChild(para);
          }
          else {
            alert("enter");
          }
        }
      render() {
        return (
          <div className="main">
            <h3 className="head">Expense Tracker-Basics</h3>
            <div className="balance">
              <h4>Balance:<span id="increment">{this.state.oldamount}</span></h4>
              <form onSubmit={this.handleChange}>
                <input type="number" name="amount" step="5" id="amount" value={this.state.amount} onChange={(e) => this.setState({newamount:e.target.value})}/>
                <input type="submit" name="submit" value="add" onClick={(e)=> this.increment(this.transaction)} />
                <input type="submit" name="submit" value="remove" onClick={(e)=> this.decrement(this.transaction)} />
              </form>
            </div>
            <div id="transaction">
              <h4>transaction</h4>

            </div>
          </div>
        )
      }

    }
   