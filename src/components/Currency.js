// src/components/IndexPage.js
import React from 'react';

export default class Currency extends React.Component {
	constructor(props) {
    super(props);

}
	onDelEvent() {
    this.props.onDelEvent(this.props);

  }
  render() {
    return (
            <div class='row bg-light col-md-12 col-lg-12 mb-5 mb-lg-0 mb-lg-3'>
				<div class='col-lg-9 col-md-3'>  
					<div class='row col-lg-12 col-md-12'>  
						<div class='col-lg-6 col-md-6'>  
							<h5 class="currText">{this.props.symbol}</h5>
						</div>
						<div class='col-lg-6 col-md-6'>  
							<p class='lead mb-0'>{parseFloat(this.props.currdata*this.props.currAmt).toFixed(4)}</p>
						</div>
					</div>
					<div class='row col-lg-12 col-md-12'> 
						<span class="initialText">1 USD= {this.props.symbol} {parseFloat(this.props.currdata).toFixed(4)}</span>
					</div>
				</div>
				<div class='del-btn col-lg-3 col-md-3 '>
					<a href="#" onClick={this.onDelEvent.bind(this)}>(-)</a>

				</div>
            </div>
	   
    );
  }
}