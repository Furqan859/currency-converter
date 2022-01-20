import React from 'react';

function CurrencyRow(props) {
const {amount,onChangeState } = props;
  return (
    <>
      <input type="number" className="input" value={amount}  onChange={onChangeState}/ >
    </>
  );
}

export default CurrencyRow;