
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
var Registration = require('./Registration');
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
