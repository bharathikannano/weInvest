import React, { Component } from "react";
export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state={
            valEquity:[],
            valBond:[],
            valCash:[]
        }
    }
    incrementDecrement(props, data, index, action) {
            console.log(props, data, index);
            var decrement = data.map((item,i) => {
                var temp = Object.assign({}, item);
                if ( i === index) {
                    if (action === "ADD"){
                    temp.weight = parseFloat(temp.weight) + 1 + "%";
                    }else{
                    temp.weight = parseFloat(temp.weight) - 1 + "%";
                }
            }
                return temp;
            });
            switch(data[index].type){
                case "Equity":
                    this.setState({
                        valEquity: decrement
                    });
                break;
                case "Bond":
                    this.setState({
                        valBond : decrement
                    });
                break;
                default:
                    this.setState({
                        valCash: decrement
                    });
            }
    }

    deletRow(props, data, index) {
        var dec = Object.assign({}, data);
        delete dec[index];
        var decrement = Object.values(dec);
            switch(data[0].type){
                case "Equity":
                    this.setState({
                        valEquity: decrement
                    });
                break;
                case "Bond":
                    this.setState({
                        valBond : decrement
                    });
                break;
                default:
                    this.setState({
                        valCash: decrement
                    });
            }

    }
    componentDidMount() {
        const data = {...this.props.cData}, index = data[(this.props.location.state)-1], valForTab = index.constituents;
        const valueforTD = valForTab.map(ind => { 
            ind.instrument.weight = ind.weight
            return ind.instrument;
        });
        this.setState({
                valEquity:valueforTD.filter(value => value.type === "Equity"),
                valBond:valueforTD.filter(value => value.type === "Bond"),
                valCash:valueforTD.filter(value => value.type === "CASH")
        });
        
    }
    render(){
        return(
            <React.Fragment>
        <div className="container">
  <div className="row margRight">
        <div className="col-md-4">
      <a className="navbar-brand">Portfolio Constituents</a>
		</div>
		<div className="col-md-4">
		</div>
        <div className="col-md-4">
        <button className="btn btn-primary navbar-btn">Reset</button>
    <button className="btn btn-primary navbar-btn">Rebalance</button>
    <button className="btn btn-primary navbar-btn">Save&Continue</button>
		</div>
	</div>

<table className="table">
    <tr>
      <th scope="col">Category/Stock</th>
      <th scope="col"></th>
      <th scope="col">Model Weight(%)</th>
      <th scope="col">Weight(100%)</th>
    </tr>
  <tbody>
    <tr>
    <th scope="col">Bond</th>
    <th scope="col">+Add Bond</th>
    <th scope="col">98.6%</th>
    <th scope="col">98.6%</th>
    </tr>
    {this.state.valBond.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td><i className="material-icons" onClick={() => this.deletRow(this, this.state.valBond, index)}>&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas' onClick={() =>this.incrementDecrement(this, this.state.valBond, index, "ADD")}>&#xf055;</i><input className="inputFil" type="text" onChange={value.weight} value={value.weight}/><i className='fas' onClick={() => this.incrementDecrement(this, this.state.valBond, index, "SUB")}>&#xf056;</i></td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">Equity</th>
    <th scope="col">+Add Equity</th>
    <th scope="col">98.6%</th>
    <th scope="col">98.6%</th>
    </tr>
        {this.state.valEquity.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td><i className="material-icons" onClick={() => this.deletRow(this, this.state.valEquity, index)}>&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas' onClick={() =>this.incrementDecrement(this, this.state.valEquity, index, "ADD")}>&#xf055;</i><input className="inputFil" type="text" onChange={value.weight} value={value.weight}/><i className='fas' onClick={() => this.incrementDecrement(this, this.state.valEquity, index, "SUB")}>&#xf056;</i></td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">CASH</th>
    <th scope="col">+Add CASH</th>
    <th scope="col">20%</th>
    <th scope="col">20%</th>
    </tr>
    {this.state.valCash.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td className="valign"><i className="material-icons" onClick={() => this.deletRow(this, this.state.valCash, index)}>&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas' onClick={() =>this.incrementDecrement(this, this.state.valCash, index, "ADD")}>&#xf055;</i><input className="inputFil" type="text" onChange={value.weight} value={value.weight}/><i className='fas' onClick={() => this.incrementDecrement(this, this.state.valCash, index, "SUB")}>&#xf056;</i></td>
    </tr>
        </React.Fragment>)
    })}
  </tbody>
</table>
  </div>
</React.Fragment>
        );
    }
}