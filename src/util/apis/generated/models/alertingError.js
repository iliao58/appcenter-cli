/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the AlertingError class.
 * @constructor
 * Alerting service error
 *
 * @member {object} [error]
 * 
 * @member {number} [error.code] The status code return by the API. It can be
 * 400 or 409 or 500.
 * 
 * @member {string} [error.requestId] Unique request identifier for tracking
 * 
 * @member {string} [error.message] The reason for the request failed
 * 
 */
function AlertingError() {
}

/**
 * Defines the metadata of AlertingError
 *
 * @returns {object} metadata of AlertingError
 *
 */
AlertingError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertingError',
    type: {
      name: 'Composite',
      className: 'AlertingError',
      modelProperties: {
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'AlertingErrorError'
          }
        }
      }
    }
  };
};

module.exports = AlertingError;
