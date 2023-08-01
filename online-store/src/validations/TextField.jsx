import { useField } from 'formik'
import React from 'react'

const TextField = (props) => {
    const[field, meta] = useField(props.name)
  return (
    <div>
        <input type="text" {...field} {...props} />
        <span style={{color: 'red'}}>{meta.error}</span>
    </div>
  )
}

export default TextField