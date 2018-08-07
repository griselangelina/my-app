import React, { Component } from 'react';
import CurrencyList from './components/CurrencyList';


class App extends Component{
	 constructor() {
    super()

    this.state = {
      symbol: ['EUR', 'GBP'],
    }
  }



 render(){
   return (
      <div className="app-container">
            
   

   
    <section class="features-icons text-center">
      <div class="container bg-light-dark">
        <div class="">
            <CurrencyList symbol={this.state.symbol} />
        </div>
      </div>
    </section>


    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</div>
)
 } 
}

export default App;
