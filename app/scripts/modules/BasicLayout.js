'use strict';

var React = require('react');
var Header = require('./Header');
var Menu = require('./Menu');
var LocationMap = require('./LocationMap');
var Speakers = require('./Speakers');
var Partners = require('./Partners');
var Schedule = require('./Schedule');
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
        <header id="header">
          <Header />
        </header>
        <div id="menu" className="module-wrapper">
          <Menu items={this.state.menuItems} />
        </div>

        {modulesToRender}

        <footer id="footer" className="page-wrap">
          <div className="container">
            here to be inserted footer module
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = LayoutBasic;
