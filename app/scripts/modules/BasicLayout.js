
'use strict';

var React = require('react');
var Header = require('./Header.js');
var Menu = require('./Menu.js');
var LocationMap = require('./LocationMap.js');
var Speakers = require('./Speakers.jsx');
var Partners = require('./Partners.js');
var Schedule = require('./Schedule.jsx');
var Footer = require('./Footer.js');
var Overview = require('./Overview.js');
var Registration = require('./Registration.jsx');
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
  registration: <Registration />,
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
    getInitialState: function() {
    return {
      modules: config.modules
    }
  },

  render: function() {
    return (
      <div className="page-wrap">
        <Header />
        <Menu items={configModules} />
          { modulesToRender }
        <Footer />
      </div>
    );
  }
});

module.exports = LayoutBasic;
