'use strict';

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer" className="page-wrap footer">
        <div className="footer__container">
          <p className="footer__par">&copy; Taras Kharuk</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
