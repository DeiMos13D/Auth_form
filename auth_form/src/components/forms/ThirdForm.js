import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../ErrorField'
import validate from './validate'

class ThirdForm extends Component{
    render() {
        const { prev, pristine, submitting, handleSubmit } = this.props
        return(
            <div>
                <div className='square'>
                    <div className='square_top'>
                        <h3>Step 3 / 3</h3>
                    </div>
                    <div className='square_bottom'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name='cc_number' type='text' component={ErrorField} placeholder='Credit Card number'/>
                            </div>
                            <div>
                                <Field name='cc_name' type='text' component={ErrorField} placeholder='Credit Card name'/>
                            </div>
                            <div>
                                <Field name='cc_cvc' type='text' component={ErrorField} placeholder='Credit Card cvc'/>
                            </div>
                            <div>
                                <Field name='cc_exp_date' type='text' component={ErrorField} placeholder='Credit Card expiration date (mm/yy)'/>
                            </div>
                            <button type='button' onClick={prev} disabled={pristine || submitting}>Previous</button>
                            <button type="submit" >
                                Submit
                            </button>
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
})(ThirdForm)