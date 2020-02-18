import React from 'react';
import {connect} from 'react-redux';

const Events = (props) => {

  return(
    <div>
      {props}
    </div>
  )
}

const mapStateToProps = (state) => {
  debugger
  return {
    state
  }
}

export default connect(mapStateToProps)(Events)
