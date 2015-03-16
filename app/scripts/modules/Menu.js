var React = require('react');

var Menu = React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },

  toggleMenu: function() {
    return this.setState({active: !this.state.active});
  },

  menuLinkHandler: function(e) {
    e.preventDefault();
    this.toggleMenu();

    var menuHeight = document.querySelector('.menu-wrapper').offsetHeight;
    var hash = e.target.href.substr(e.target.href.indexOf('#') + 1);
    var anchor = document.getElementById(hash);
    var startY = window.pageYOffset;
    var targetY = anchor.offsetTop - menuHeight;

    animate(document.body, 'scrollTop', '', startY, targetY, 350, true);
  },

  render: function() {
    var menuCls = this.state.active ? 'menu menu--visible' : 'menu';
    var darkCls = this.state.active ? 'darkenScreen--hidden darkenScreen--visible' : 'darkenScreen--hidden';

    var itemsToRender = this.props.items.map(function(data) {
      return <a href={'#' + data} className="menu__item" onClick={this.menuLinkHandler}>{data}</a>
    });
    return (
      <div className="menu-wrapper">
        <div id="cm_toggleWrapper" className="toggleWrapper">
          <div id="cm_menuToggle" className="menuToggle" onClick={this.toggleMenu}>
            <div className="menuToggle__stripe"></div>
            <div className="menuToggle__stripe"></div>
            <div className="menuToggle__stripe"></div>
          </div>
        </div>
        <nav id="cm_menuItems" className={menuCls}>
          {itemsToRender}
        </nav>
        <div id="cm_darkenScreen" className={darkCls} onClick={this.toggleMenu}></div>
      </div>
    );
  }
});

//var Item = React.createClass({
//  render: function() {
//    return <a href={'#' + this.props.text} className="menu__item" onClick={this.menuLinkHandler}>{this.props.text}</a>
//  }
//});

//fix menu when scrolling os make static due to window.pageYOffset
window.onscroll = function() {
  var menu = document.getElementById('menu');
  var header = document.getElementById('header');
  var overview = document.getElementById('overview');
  var pageScroll = window.pageYOffset;
  var menuStyle = menu.style;
  var manuHeight = menu.offsetHeight;
  var headerHeight = header.offsetHeight;

  if (pageScroll >= headerHeight) {
    menuStyle.position = 'fixed';
    menuStyle.width = '100%';
    menuStyle.top = '0';
    overview.style.paddingTop = menu.offsetHeight + 'px';
  } else {
    menuStyle.position = 'static';
    overview.style.paddingTop = '0px';
  }
};

function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) {
    return;
  }
  var start = new Date().getTime();
  var timer = setInterval(function() {
    var step = Math.min(1, (new Date().getTime() - start) / time);
    if (prop) {
      elem[style] = (from + step * (to - from)) + unit;
    } else {
      elem.style[style] = (from + step * (to - from)) + unit;
    }
    if (step == 1) {
      clearInterval(timer);
    }
  }, 25);
  elem.style[style] = from + unit;
}

module.exports = Menu;
