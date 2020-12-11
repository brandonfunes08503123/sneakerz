import React, { Component } from 'react';

class SessionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    handleInputChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    rnederErrors(){
        let { errors } = this.props;
        return(
            <ul>
                { errors.map( (error, i) => ( 
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        let { formType } = this.props;
        let { email, password } = this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}
                <label>Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={ email }
                    onChange={this.handleInputChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onChange={this.handleInputChange}
                />
                { password.length > 4 ?
                    <button className="btn">{ formType }</button> :
                    <button disabled>{ formType }</button>
                }
            </form>
        )
    }
}


export default SessionForm;