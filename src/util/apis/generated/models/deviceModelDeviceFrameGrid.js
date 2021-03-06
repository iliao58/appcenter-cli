/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeviceModelDeviceFrameGrid.
 */
class DeviceModelDeviceFrameGrid {
  /**
   * Create a DeviceModelDeviceFrameGrid.
   * @property {number} [width]
   * @property {number} [height]
   * @property {string} [frameUrl]
   * @property {array} [screen]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceModelDeviceFrameGrid
   *
   * @returns {object} metadata of DeviceModelDeviceFrameGrid
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceModel_deviceFrame_grid',
      type: {
        name: 'Composite',
        className: 'DeviceModelDeviceFrameGrid',
        modelProperties: {
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          },
          frameUrl: {
            required: false,
            serializedName: 'frameUrl',
            type: {
              name: 'String'
            }
          },
          screen: {
            required: false,
            serializedName: 'screen',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceModelDeviceFrameGrid;
