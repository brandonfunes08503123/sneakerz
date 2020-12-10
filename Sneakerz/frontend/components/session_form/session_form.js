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



    render(){
        let { formType } = this.props;
        let { email, password } = this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>
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
                { password.length > 3 ?
                    <button className="btn">{ formType }</button> :
                    <button disabled>{ formType }</button>
                }
            </form>
        )
    }
}


export default SessionForm;