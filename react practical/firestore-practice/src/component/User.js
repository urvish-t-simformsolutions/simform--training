import React from 'react';
import firestore from "../firestore";
import firebase from 'firebase'
class User extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            fullname: ""
        };
    }
    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: "",
          email: ""
        });
      };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    onChange={this.updateInput}
                    value={this.state.fullname}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Full name"
                    onChange={this.updateInput}
                    value={this.state.email}

                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default User;

