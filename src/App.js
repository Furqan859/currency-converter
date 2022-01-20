import React,{useState} from 'react';
import CurrencyRow from './Converter/CurrencyRow';
import './App.css'

function App() {
  const [pkr , setPkr]  = useState();
  const [usa ,setUsa ] = useState();
  const [exchangeRate ,setExchangeRate] = useState(true)
  

  let toAmount , fromAmount 
  if(exchangeRate){
    fromAmount = pkr
    toAmount = fromAmount / 176
  }
  else{
    toAmount = usa
    fromAmount = usa * 176
  }
  
 

  function handleFromClick (e){
  setPkr(e.target.value);
  setExchangeRate(true)
  }

  function handleToClick (e){
    setUsa(e.target.value);
    setExchangeRate(false)
  }
  
  
  return (
    <div>
    <h1>Currency Converter</h1>
    <h3>PKR</h3>
      <CurrencyRow amount={fromAmount}    onChangeState={handleFromClick}/>
      <div className="equals">=</div>
      <h3>USA</h3>
      <CurrencyRow  amount={toAmount}   onChangeState={handleToClick}/>
    </div>
  );
}




export default App;