/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the StepReportDeviceScreenshotsItemScreenshot class.
 * @constructor
 * @member {object} [urls]
 * 
 * @member {string} [urls.original]
 * 
 * @member {string} [urls.small]
 * 
 * @member {string} [urls.medium]
 * 
 * @member {string} [urls.large]
 * 
 * @member {number} [rotation]
 * 
 * @member {boolean} [landscape]
 * 
 */
function StepReportDeviceScreenshotsItemScreenshot() {
}

/**
 * Defines the metadata of StepReportDeviceScreenshotsItemScreenshot
 *
 * @returns {object} metadata of StepReportDeviceScreenshotsItemScreenshot
 *
 */
StepReportDeviceScreenshotsItemScreenshot.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StepReport_deviceScreenshotsItem_screenshot',
    type: {
      name: 'Composite',
      className: 'StepReportDeviceScreenshotsItemScreenshot',
      modelProperties: {
        urls: {
          required: false,
          serializedName: 'urls',
          type: {
            name: 'Composite',
            className: 'StepReportDeviceScreenshotsItemScreenshotUrls'
          }
        },
        rotation: {
          required: false,
          serializedName: 'rotation',
          type: {
            name: 'Number'
          }
        },
        landscape: {
          required: false,
          serializedName: 'landscape',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = StepReportDeviceScreenshotsItemScreenshot;
