import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signup({ user: this.state })
            .then(
                () => this.props.createPost({ post })
            );
    }

    render() {
        const { username, password } = this.state;

        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <label>Username
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleInput("username")}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        value={password}
                        onChange={this.handleInput("password")}
                    />
                </label>

                <input type="submit" value="Sign Up" />
            </form>
        );
    }
}

export default Signup;