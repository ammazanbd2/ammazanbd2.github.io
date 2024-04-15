class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Perform login validation here
    // Replace the if condition with your own validation logic
    temp_dict = {'admin1@gmail.com': 'admin2024', 'admin2@gmail.com': 'admin2025'}
    console.log(temp_dict[this.state.email])
    if (this.state.password == temp_dict[this.state.email]) {
      window.location.href = 'ammazanbd-pro.html';
    } else {
      alert('Invalid email or password');
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));