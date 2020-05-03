import React from 'react'
import './styles/PageError.css'

const PageError = (props) => {
  return(
    <div className="PageError">
      😱{props.error}😱
    </div>
  )
}

export default PageError;