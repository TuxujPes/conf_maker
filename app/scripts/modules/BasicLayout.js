'use strict';

var React = require('react');
var Header = require('./Header');
var Menu = require('./Menu');
var LocationMap = require('./LocationMap');
var Speakers = require('./Speakers');
var Partners = require('./Partners');
var Schedule = require('./Schedule');
var Footer = require('./Footer');
var Overview = require('./Overview');
var config = require('../config');

var configModules = [];
config.modules.map(function(item) {
  if (item.isRendering) {
    return configModules.splice(item.order, 0, item.title);
  } else {
    return;
  }
});

var reactModules = {
  overview: <Overview />,
  speakers: <Speakers />,
  schedule: <Schedule />,
  location: <LocationMap />,
  partners: <Partners />,
  footer: <Footer />
};
var modulesToRender = configModules.map(function(item) {
  return reactModules[item];
});

var LayoutBasic = React.createClass({
  render: function() {
    return (
      <div className="page-wrap">
        <Header />
        <Menu items={configModules} />
        { modulesToRender }
        <Footer />
        // <section id="registration" className="page-wrap">
        // <h2 className="module-header">Registration</h2>
        //   <div className="container">
        //     here to be inserted registration module
        //   </div>
        // </section>
      </div>
    );
  }
});

module.exports = LayoutBasic;
