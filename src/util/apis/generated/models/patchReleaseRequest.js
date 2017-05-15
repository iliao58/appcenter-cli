/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PatchReleaseRequest class.
 * @constructor
 * @member {string} [status] updated status of release
 * 
 * @member {string} [destPublishId] Destination Publish Id
 * 
 */
function PatchReleaseRequest() {
}

/**
 * Defines the metadata of PatchReleaseRequest
 *
 * @returns {object} metadata of PatchReleaseRequest
 *
 */
PatchReleaseRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PatchReleaseRequest',
    type: {
      name: 'Composite',
      className: 'PatchReleaseRequest',
      modelProperties: {
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        destPublishId: {
          required: false,
          serializedName: 'dest_publish_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PatchReleaseRequest;
