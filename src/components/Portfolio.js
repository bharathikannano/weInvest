import React, { Component } from "react";
export default class Portfolio extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        const data = {...this.props.cData}, index = data[(this.props.location.state)-1], valForTab = index.constituents;
        const valueforTD = valForTab.map(ind => { 
            ind.instrument.weight = ind.weight
            return ind.instrument;
        }),
        valEquity = valueforTD.filter(value => value.type === "Equity"),
        valBond = valueforTD.filter(value => value.type === "Bond"),
        valCash = valueforTD.filter(value => value.type === "CASH");

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
    {valBond.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td><i className="material-icons">&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas'>&#xf055;</i><input className="inputFil" type="text" onChange="" value={value.weight}/><i className='fas'>&#xf056;</i></td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">Equity</th>
    <th scope="col">+Add Equity</th>
    <th scope="col">98.6%</th>
    <th scope="col">98.6%</th>
    </tr>
        {valEquity.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td><i className="material-icons">&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas'>&#xf055;</i><input className="inputFil" type="text" onChange="" value={value.weight}/><i className='fas'>&#xf056;</i></td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">CASH</th>
    <th scope="col">+Add CASH</th>
    <th scope="col">20%</th>
    <th scope="col">20%</th>
    </tr>
    {valCash.map((value, index) => {
        return(
        <React.Fragment>
    <tr key={index}>
        <td className="valign"><i className="material-icons">&#xe92b;</i>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td><i className='fas'>&#xf055;</i><input className="inputFil" type="text" onChange="" value={value.weight}/><i className='fas'>&#xf056;</i></td>
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