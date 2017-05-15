/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NotificationConfigWindows class.
 * @constructor
 * WNS notification configuration.
 *
 * @member {string} packageSid Package security identifier (SID).
 * 
 * @member {string} secretKey Secret key.
 * 
 */
function NotificationConfigWindows() {
  NotificationConfigWindows['super_'].call(this);
}

util.inherits(NotificationConfigWindows, models['NotificationConfig']);

/**
 * Defines the metadata of NotificationConfigWindows
 *
 * @returns {object} metadata of NotificationConfigWindows
 *
 */
NotificationConfigWindows.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NotificationConfigWindows',
    type: {
      name: 'Composite',
      className: 'NotificationConfigWindows',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        packageSid: {
          required: true,
          serializedName: 'package_sid',
          type: {
            name: 'String'
          }
        },
        secretKey: {
          required: true,
          serializedName: 'secret_key',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationConfigWindows;
