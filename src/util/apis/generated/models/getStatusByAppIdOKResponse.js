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
 * Class representing a GetStatusByAppIdOKResponse.
 */
class GetStatusByAppIdOKResponse {
  /**
   * Create a GetStatusByAppIdOKResponse.
   * @property {string} [status]
   * @property {string} [service]
   * @property {string} [message]
   * @property {string} [url]
   * @property {number} [validUntil]
   * @property {string} [os]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetStatusByAppIdOKResponse
   *
   * @returns {object} metadata of GetStatusByAppIdOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetStatusByAppIdOKResponse',
      type: {
        name: 'Composite',
        className: 'GetStatusByAppIdOKResponse',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          service: {
            required: false,
            serializedName: 'service',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          validUntil: {
            required: false,
            serializedName: 'valid_until',
            type: {
              name: 'Number'
            }
          },
          os: {
            required: false,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetStatusByAppIdOKResponse;
