import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'

class SecondForm extends Component{
    render() {
        const { handleSubmit, prev } = this.props
         return(
            <div>
                <div className='square'>
                    <div className='square_top'>
                        <h3>Step 2 / 3</h3>
                    </div>
                    <div className='square_bottom'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="standard">Standard Package</label>
                                <Field id='standard' name='radio' component='input' type='radio' value='standard' selected/>
                            </div>
                            <div>
                                <label htmlFor="premium">Premium Package</label>
                                <Field id='premium' name='radio' component='input' type='radio' value='premium'/>
                            </div>
                            <button onClick={prev}>Previous</button>
                            <button type='submit'>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'auth',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SecondForm)