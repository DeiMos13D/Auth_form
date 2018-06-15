import React, { Component } from 'react'

class ErrorField extends Component{

    render() {
        const {input, type, meta: {error, touched}, id, placeholder/*, errorFunc*/} = this.props
        let item
        if(type === 'select') {
            if(touched && error) {
                item = <select  {...input} className='error_style'>
                    <option></option>
                    <option value='company'>Company</option>
                    <option value='individual'>Individual</option>
                </select>
            } else {
                item = <select {...input} >
                    <option></option>
                    <option value='company'>Company</option>
                    <option value='individual'>Individual</option>
                </select>
            }
        } else {
            item = (touched && error) ?
                <input {...input} type={type} id={id} placeholder={placeholder} className='error_style'/> :
                <input {...input} type={type} id={id} placeholder={placeholder} />
        }
        return(
            <div style={{width: '100%'}}>
                {item}
            </div>
        )
    }
}

export default ErrorField