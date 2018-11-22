var React = require("react");

class NewUser extends React.Component {
  render() {
    return (
      <html>
        <head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
        </head>
        <body>
            <h1 class='ui center aligned header'>Registration</h1>
            <div class='ui container'>
                <form class='ui form' method="POST" action="/users">
                  <div class='field'>
                    <label>Username</label>
                    <input name="name" placeholder='First Name' />
                  </div>
                  <div class='field'>
                    <label>Password</label>
                    <input name="password" placeholder='Password' />
                  </div>
                  <div class='field'>
                    <label>Email</label>
                    <input name="email" placeholder='Email' />
                  </div>
                  <div class='field'>
                    <label>Location</label>
                    <input name="location" placeholder='Location' />
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

module.exports = NewUser;