
import PropTypes from 'prop-types'
import React from 'react'

const Thing = ({ prop1, prop2 }) => (
  <div className='something'><label htmlFor={prop1}>{prop1}</label>{prop2}</div>
)

Thing.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string,
}

export default Thing
