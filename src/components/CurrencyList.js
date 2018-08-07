import React, {Component} from 'react';
import axios from 'axios';
import Currency from './Currency';


class CurrencyList extends Component{
	constructor(props) {
    super(props);

    this.state = {
      currdata: [],
	  newCurr :'',
	  currAmt:'1',
	  hideForm:true,
	}
	    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
		this.handleSubmitValue = this.handleSubmitValue.bind(this);
		this.AddMoreCurr=this.AddMoreCurr.bind(this);
}
  componentDidMount() {
    axios.get('https://exchangeratesapi.io/api/latest?base=USD&symbols='+this.props.symbol)
      .then(res => {
		 const currency = res.data.rates;
		 const currdata =currency;
		
		  this.setState({currdata});


      })
  }

  /*called when delete currency from list*/
  handleRowDel(symbol) {
    var index = this.props.symbol.indexOf(symbol.tes);
	var currencySize=this.props.symbol.length;
    this.props.symbol.splice(index, 1);
	var currdata=this.state.currdata;
	 delete currdata[symbol.tes];
	 this.setState({currdata});

  };
  
  
   /*called when add new currency to list*/
   handleSubmit(event) {
	this.props.symbol.push(this.state.newCurr);
    axios.get('https://exchangeratesapi.io/api/latest?base=USD&symbols='+this.props.symbol)
      .then(res => {
		 const currency = res.data.rates;
		 const currdata =currency;
		
		  this.setState({currdata});
		this.setState({hideForm:true});


      })
    event.preventDefault();
  }
  /*trigerred when onKeyPress new amount of currency*/
  handleChange(event) {
    this.setState({newCurr: event.target.value});

  }
  /*trigerred when onKeyPress add currency list*/
   handleChangeValue(event) {
    this.setState({currAmt: event.target.value});
	    event.preventDefault();


  }
   handleSubmitValue(event) {
	var valueInput=this.state.currAmt;
   this.setState({currAmt: valueInput});
	 event.preventDefault();

  }
  AddMoreCurr(){
	  this.setState({hideForm:false});
  }
  
 render(){
    var rowDel = this.props.onRowDel;

	return (
		<div class=''>
	
	<form onSubmit={this.handleSubmitValue}>  {/* for input currency amount*/}
			<div class="container header">
			<div class='row col-lg-12 col-md-12'> 
				<p>United States Dollar</p>
			</div>
			<div class='row col-lg-12 col-md-12'> 
						<div class='col-lg-6 col-md-6'>  
							<h5 class="currText">USD</h5>
						</div>
						<div class='col-lg-6 col-md-6'>  
							<input type="text" value={this.state.currAmt} onChange={this.handleChangeValue} />				

						</div>
			</div>
			</div>
		</form>
			
		 { this.props.symbol.map(sym =>  /* for show currency list*/
			 <Currency
              symbol={sym}
			  currAmt={this.state.currAmt}
              currdata={this.state.currdata[sym]} onDelEvent={this.handleRowDel.bind(this)}/>
			
		 )}
		
		<div class="container ">
		  <div class='row bg-light newCurr col-md-12 col-lg-12 mb-5 mb-lg-0 mb-lg-3 '>

			  <a href="#" onClick={this.AddMoreCurr} style={{display: this.state.hideForm ? 'block' : 'none' }}>(+) Add More Currencies</a>
			  <div id="hideForm" style={{display: this.state.hideForm ? 'none' : 'block' }}>
			   <form onSubmit={this.handleSubmit} > {/* for add new currency to list*/}
					<label>
						<input type="text" value={this.state.newCurr} onChange={this.handleChange} />				
					</label>
					<input type="submit" value="Submit" />
				</form> 
				</div>
			</div>
			</div>
		</div>
	)
 } 
}
export default CurrencyList;