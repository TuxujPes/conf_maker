
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

var Registration = require('./Registration');
var config = require('../config');

var menuItems = [];

var Modules = React.createClass({
  getInitialState: function() {
    return {
      moduleFiles: {
        location: <LocationMap />,
        speakers: <Speakers />,
        partners: <Partners />,
        schedule: <Schedule />
      }
    }
  },

  render: function() {
    if (this.props.data.isRendering) {
      menuItems.push(this.props.data.title);
      return (
        <section id={this.props.data.title} className="page-wrap">
          <h2 className="module-header">{this.props.data.title}</h2>
          {this.state.moduleFiles[this.props.data.title]}
        </section>
      );
    } else {
      return <div className="rejected-module"></div>
    }
  }
});

var LayoutBasic = React.createClass({
    getInitialState: function() {
    return {
      modules: config.modules,
      menuItems: menuItems
    }
  },

  render: function() {
    var modulesToRender = this.state.modules.map(function(module) {
      return <Modules key={module.title} data={module} />
    });

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
