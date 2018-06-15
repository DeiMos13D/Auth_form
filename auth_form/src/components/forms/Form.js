import React, { Component } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import FourthStep from "../FourthStep";

class Form extends Component{
    state = {
        step: 1
    }

    nextStep = () =>{
        this.setState({step: this.state.step + 1})
    }

    prevStep = () =>{
        this.setState({step: this.state.step - 1})
    }

    render() {
        const { step } = this.state
        let Step
        if(step === 1){
            Step = <FirstForm key={step} onSubmit={this.nextStep}/>
        } else if(step === 2){
            Step = <SecondForm key={step} prev={this.prevStep} onSubmit={this.nextStep}/>
        } else if(step === 3) {
            Step = <ThirdForm key={step} prev={this.prevStep} onSubmit={this.nextStep}/>
        } else if(step === 4) {
            Step = <FourthStep key={step}/>
        }

        return(
            <div>
                {Step}
            </div>
        )
    }
}

export default Form
