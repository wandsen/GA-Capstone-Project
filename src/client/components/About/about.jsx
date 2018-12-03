import React from 'react';

import PropTypes from 'prop-types';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Ever wondered if you could automate the boring parts of the shopping experience? We believe that shopping should not be a chore and should not be repetitive. Hence we came up with a subscription service to help you automatically recieve essential products such as cleaning products, food staples (e.g. rice) so you would not have to worry about it the next time you go shopping!</p>
        </div>
    );
  }
}

export default About;