import React from 'react'

const Clicker = props => {

  const { count, dark, onClick, onReset } = props
  const theme = dark ? "dark" : ""

  return (
    <div className={`clickerLayout ${theme}`}>
      <div className="row">
        <div className="col py-3 px-lg-5 pointer" onClick={onClick} >
          {count}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Clicker