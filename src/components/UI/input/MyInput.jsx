import React from 'react'
// eslint-disable-next-line no-unused-vars
import classes from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return <input {...props} className='clasess.myInput' />
})

export default MyInput
