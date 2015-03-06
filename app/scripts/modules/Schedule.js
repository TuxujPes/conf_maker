'use strict';

var React = require('react');

var Schedule = React.createClass({
  getInitialState: function() {
    return {
      conferences:[]
    }
  },
  componentDidMount: function() {
    var req = new XMLHttpRequest();
    req.open('get', './dev/json/schedule.json', true);
    req.onreadystatechange = function() {
      this.setState({conferences:JSON.parse(req.responseText)})
    }.bind(this);
    req.send();
  },
  render: function() {
    var conferences = this.state.conferences.map(function(conference) {
      return (<Conference key={conference.name} days={conference.days} name={conference.name} />)
    });
    return (
      <div className="schedule">
        {conferences}
      </div>
    );
  }
});

var Conference = React.createClass({
  getInitialState: function() {
    return {
      activeTable:this.props.days[0],
      activeDay:this.props.days[0].day_id,
      confIsVisible:true
    }
  },
  ChangeTab: function(day) {
    this.setState({
      activeTable:day,
      activeDay: day.day_id
    });

  },
  ChangeConfRepresent: function() {
    this.state.confIsVisible ? this.setState({confIsVisible:false}) : this.setState({confIsVisible:true});
  },
  // RendConference:function() {
  //   var days = this.props.days.map(function(day) {
  //     return <li onClick={this.ChangeTab.bind(null, day)} key={day.day_id}><span>{day.day_name}</span></li>
  //   }.bind(this));
  //   var timetable = this.props.days.map(function(day) {
  //     if (day.day_id == this.state.activeDay) {
  //       return <Timetable sessions={day.timetable} key={day.day_id}/>
  //     };
  //   }.bind(this));
  //     if (this.state.confIsVisible) {
  //       return (
  //     } else {return }
  //   }.bind(this),
  render: function() {
    var days = this.props.days.map(function(day) {
      return <li onClick={this.ChangeTab.bind(null, day)} key={day.day_id} className={(this.state.activeDay==day.day_id)?"conference__tab--active":null}><span>{day.day_name}</span></li>
    }.bind(this));
    var timetable = this.props.days.map(function(day) {
      if (day.day_id == this.state.activeDay && this.state.confIsVisible) {
        return <Timetable sessions={day.timetable} key={day.day_id}/>
      };}.bind(this));
    return (
      <div className="conference">
        <div className="conference__title">
          <h3>Shedule: {this.props.name}</h3>
          <input type="button" onClick={this.ChangeConfRepresent} className={this.state.confIsVisible ? "up-arrow" : "down-arrow"}/>
        </div>
        {this.state.confIsVisible ? <ul>{days}</ul> : null}
        {timetable}
      </div>
    );
  }
});

var Timetable = React.createClass({
  getInitialState:function() {
    return {
      sessions:this.props.sessions
    }
  },
  // changeSession: function(newSession) {
  //   var newSessions = this.state.sessions.map(function(oneSession) {
  //     if (oneSession.article == newSession.article) {
  //       oneSession = newSession;
  //     }
  //     return oneSession
  //   }.bind(this));
  //   console.log(newSessions);
  //   this.setState({sessions:newSessions})
  // },
  render: function() {
    var sessions = this.state.sessions.map(function(session) {
      return <Session key={session.article} session={session} /*onChange={this.changeSession}*//>
    }.bind(this));
    return (
      <div className="timetable">
        {sessions}
      </div>
    );
  }
});

var Session = React.createClass({
  getInitialState: function() {
    return {
      session:this.props.session,
      hidedContent:null
    }
  },
  ChangeAbout: function(current) {
    
  },
  render: function() {
    return (
      <div className="session" key={this.state.session.article}>
        <div className="session__time">{this.state.session.time}</div>
        <div className="session__arrangement">
          <h4 className="session__arrangement--name">{this.state.session.article}</h4>
          <div className="session__arrangement--speaker">
            <span className="speaker__name">{this.state.session.speaker.name}</span>
            <span className="speaker__pos">{this.state.session.speaker.position}</span>
          </div>
          <input type="button" onClick={this.ChangeAbout.bind(null,this.state.session)}/>
          <div className="session__arrangement--about">{this.state.session.about}</div>
        </div>
      </div>
    )
  }
});

module.exports = Schedule;