import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <div class='ui inverted vertical footer segment'>
                <div class='ui center aligned container'>
                    <div class='ui stackable inverted divided grid'>
                        <div class='eight wide column'>
                            <h4 class='ui inverted header'>GrocerSub!</h4>
                            <p>GrocerSub was founded with one ambition - to reinvent how bulk purchasing works. We package together Products at a competitive price point, without compromising on quality. By cutting out the middleman and keeping our inventory lean we can keep our costs down and extend the savings to you. </p>
                        </div>
                        <div class='four wide column'>
                            <h4 class='ui inverted header'>About Us</h4>
                            <div class='ui inverted link list'>
                                <a href='#' class="item">Our Story</a>
                                <a href='#' class="item">Careers</a>
                                <a href='#' class="item">Press and Media</a>
                                <a href='#' class="item">Contact Us</a>
                            </div>
                        </div>
                        <div class='four wide column'>
                            <h4 class='ui inverted header'>Shopping With Us</h4>
                            <div class='ui inverted link list'>
                                <a href='#' class="item">How to Buy</a>
                                <a href='#' class="item">Shipping and Delivery</a>
                                <a href='#' class="item">Privacy Policy</a>
                                <a href='#' class="item">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div class='ui inverted section divider'></div>
                    <div><i class="orange large shopping basket icon"></i></div>
                    <div class='ui horizontal inverted small divided link list'>
                        <a href='#' class="item">Site Map</a>
                        <a href='#' class="item">Contact Us</a>
                        <a href='#' class="item">Terms and Condition</a>
                        <a href='#' class="item">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;