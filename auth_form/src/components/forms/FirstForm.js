import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import ErrorField from '../ErrorField'
import validate from './validate'

class FirstForm extends Component{

    render() {
        const { handleSubmit } = this.props
        return(
            <div>
                <div className='square'>
                    <div className='square_top'>
                        <h3>Step 1 / 3</h3>
                    </div>
                    <div className='square_bottom'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name='firstName' type='text' component={ErrorField} placeholder='First Name'/>
                            </div>
                            <div>
                                <Field name='lastName' type='text' component={ErrorField} placeholder='Last Name'/>
                            </div>
                            <div>
                                <Field name='country' type='text' component={ErrorField} placeholder='Country'/>
                            </div>
                            <div>
                                <Field name='city' type='text' component={ErrorField} placeholder='City'/>
                            </div>
                            <div>
                                <Field name='address' type='text' component={ErrorField} placeholder='Address'/>
                            </div>
                            <div>
                                <Field name='address_2' type='text' component={ErrorField} placeholder='Address 2'/>
                            </div>
                            <div className='legal_select'>
                                <div>Legal</div>
                                <Field name='legal' type='select' component={ErrorField} />
                            </div>
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
})(FirstForm)