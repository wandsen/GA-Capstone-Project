var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
        </head>
        <body>
            <h1 class='ui center aligned header'>Login</h1>
            <div class='ui container'>
                <form class='ui form' method="POST" action="/users/login">
                  <div class='field'>
                    <label>Username</label>
                    <input name="name" placeholder='Username' />
                  </div>
                  <div class='field'>
                    <label>Password</label>
                    <input name="password" placeholder='Password' />
                  </div>
                  <button type='submit' class='ui button' role='button'>
                    Submit
                  </button>
                  <a href='/' class='ui button'>Back</a>
                </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;