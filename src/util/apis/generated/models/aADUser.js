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
 * an AAD user's id and tenant id
 *
 */
class AADUser {
  /**
   * Create a AADUser.
   * @property {uuid} objectId the aad user's id
   * @property {uuid} tenantId the aad user's tenant id
   */
  constructor() {
  }

  /**
   * Defines the metadata of AADUser
   *
   * @returns {object} metadata of AADUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AADUser',
      type: {
        name: 'Composite',
        className: 'AADUser',
        modelProperties: {
          objectId: {
            required: true,
            serializedName: 'object_id',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: true,
            serializedName: 'tenant_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AADUser;