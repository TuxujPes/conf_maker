'use strict';

var config = (function() {
  return {
    path: {
      schedule: './dev/json/schedule.json',
      speakers: './dev/json/speakers.json',
      partners: './dev/json/partners.json'
    },
    modules: [
      {
        title: 'overview',
        isRendering: true,
        order: 3
      },
      {
        title: 'speakers',
        isRendering: true,
        order: 4
      },
      {
        title: 'shedule',
        isRendering: true,
        order: 5
      },
      {
        title: 'location',
        isRendering: true,
        order: 6
      },
      {
        title: 'registration',
        isRendering: true,
        order: 7
      },
      {
        title: 'partners',
        isRendering: true,
        order: 8
      }
    ]
  }
})()

module.exports = config;
