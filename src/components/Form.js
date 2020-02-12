import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date_course : "",
            dist_course : "",
            temps_course : "",
            week_course : "",
        };
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.parentCallback(event.target.name, event.target.value)
    }

    render() {
        return (
            <form>
                <label>
                    Date :
                    <input type="date" name="date_course" value={this.state.date_course} onChange={event => this.updateInputValue(event)}/>
                </label>
                <label>
                    Distance (km) :
                    <input type="number" name="dist_course" value={this.state.dist_course} onChange={event => this.updateInputValue(event)}/>
                </label>
                <label>
                    Temps (h) :
                    <input type="number" name="temps_course" value={this.state.temps_course} onChange={event => this.updateInputValue(event)}/>
                </label>
                <label>
                    Semaines :
                    <select name="week_course" value={this.state.week_course} onChange={event => this.updateInputValue(event)}>
                        <option value=""> ? </option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                    </select>
                </label>
                {/* <label>
                    Musculation :
                    <select name="muscu_course" value={this.state.muscu_course} onChange={event => this.updateInputValue(event)}>
                        <option value=""> ? </option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </label> */}
            </form>
        )
    }
}