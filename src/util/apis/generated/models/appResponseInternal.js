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
 * Initializes a new instance of the AppResponseInternal class.
 * @constructor
 * @member {array} [featureFlags] The feature flags that are enabled for this
 * app
 * 
 * @member {array} [memberPermissions] The permissions of the calling user
 * 
 * @member {array} [repositories] The repositories associated with this app
 * 
 */
function AppResponseInternal() {
  AppResponseInternal['super_'].call(this);
}

util.inherits(AppResponseInternal, models['AppResponse']);

/**
 * Defines the metadata of AppResponseInternal
 *
 * @returns {object} metadata of AppResponseInternal
 *
 */
AppResponseInternal.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppResponseInternal',
    type: {
      name: 'Composite',
      className: 'AppResponseInternal',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        appSecret: {
          required: true,
          serializedName: 'app_secret',
          type: {
            name: 'String'
          }
        },
        azureSubscriptionId: {
          required: false,
          serializedName: 'azure_subscription_id',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: true,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        iconUrl: {
          required: false,
          serializedName: 'icon_url',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        os: {
          required: true,
          serializedName: 'os',
          type: {
            name: 'String'
          }
        },
        owner: {
          required: true,
          serializedName: 'owner',
          type: {
            name: 'Composite',
            className: 'Owner'
          }
        },
        platform: {
          required: true,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        },
        origin: {
          required: true,
          serializedName: 'origin',
          type: {
            name: 'String'
          }
        },
        featureFlags: {
          required: false,
          serializedName: 'feature_flags',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        memberPermissions: {
          required: false,
          serializedName: 'member_permissions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        repositories: {
          required: false,
          serializedName: 'repositories',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'AppResponseInternalRepositoriesItemElementType',
                type: {
                  name: 'Composite',
                  className: 'AppResponseInternalRepositoriesItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = AppResponseInternal;
