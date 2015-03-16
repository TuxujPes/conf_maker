
'use strict';

var React = require('react');
var Header = require('./Header');
var Menu = require('./Menu');
var LocationMap = require('./LocationMap');
<<<<<<< HEAD
var Speakers = require('./Speakers.jsx');
var Partners = require('./Partners.js');
var Schedule = require('./Schedule.jsx');
var Registration = require('./Registration.jsx');
=======
var Speakers = require('./Speakers');
var Partners = require('./Partners');
var Schedule = require('./Schedule');
>>>>>>> Added modules array to config. Improved basicLayout to render modules due to config file. Replaced module  wrappers from basicLayout to aproppriate module files. Fixed and improved on scroll function. Improved styles for menu. Created footer module and aproppriate scss file. Created Overview module.
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
<<<<<<< HEAD
  registration: <Registration />,
=======
>>>>>>> Added modules array to config. Improved basicLayout to render modules due to config file. Replaced module  wrappers from basicLayout to aproppriate module files. Fixed and improved on scroll function. Improved styles for menu. Created footer module and aproppriate scss file. Created Overview module.
  speakers: <Speakers />,
  schedule: <Schedule />,
  location: <LocationMap />,
  partners: <Partners />,
  footer: <Footer />
};
var modulesToRender = configModules.map(function(item) {
  return reactModules[item];
});
<<<<<<< HEAD

var LayoutBasic = React.createClass({
    getInitialState: function() {
    return {
      modules: config.modules
    }
  },
=======
>>>>>>> Added modules array to config. Improved basicLayout to render modules due to config file. Replaced module  wrappers from basicLayout to aproppriate module files. Fixed and improved on scroll function. Improved styles for menu. Created footer module and aproppriate scss file. Created Overview module.

var LayoutBasic = React.createClass({
  render: function() {
    return (
      <div className="page-wrap">
        <Header />
        <Menu items={configModules} />
<<<<<<< HEAD
          { modulesToRender }
        <Footer />
=======
        { modulesToRender }
        <Footer />
        // <section id="registration" className="page-wrap">
        // <h2 className="module-header">Registration</h2>
        //   <div className="container">
        //     here to be inserted registration module
        //   </div>
        // </section>
>>>>>>> Added modules array to config. Improved basicLayout to render modules due to config file. Replaced module  wrappers from basicLayout to aproppriate module files. Fixed and improved on scroll function. Improved styles for menu. Created footer module and aproppriate scss file. Created Overview module.
      </div>
    );
  }
});

module.exports = LayoutBasic;
