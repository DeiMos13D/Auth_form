import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './forms/Form'
import NotFound from './NotFound'

class StepRoutes extends Component{

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/' component={Form} exact/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default StepRoutes