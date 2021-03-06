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
 * Class representing a GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem.
 */
class GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem {
  /**
   * Create a GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem.
   * @property {string} [deviceSnapshotId]
   * @property {string} [status]
   * @property {number} [timestamp]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem
   *
   * @returns {object} metadata of GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetTestReportOKResponse_featuresItem_testsItem_runsItem_stepsItem_stepExecutionsItem',
      type: {
        name: 'Composite',
        className: 'GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem',
        modelProperties: {
          deviceSnapshotId: {
            required: false,
            serializedName: 'device_snapshot_id',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GetTestReportOKResponseFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem;
