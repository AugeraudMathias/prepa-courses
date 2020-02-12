import React from 'react';


import Form from './Form';
import Calcul from './Calcul';


export default class Formulaire extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            date_course : null,
            week_course : null
        }
    }

    callbackFunction = (name, value) => {
        this.setState({[name] : value})
    }

    render() {
        return (
            <section className="body-formulaire">
                <h2>Formulaire</h2>
                <Form 
                    parentCallback={this.callbackFunction}
                />
                <Calcul 
                    date_course={this.state.date_course}
                    week_course={this.state.week_course}
                    dist_course={this.state.dist_course}
                    temps_course={this.state.temps_course}
                />
            </section>
        )
    }
}