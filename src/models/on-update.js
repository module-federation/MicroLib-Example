
'use strict'

import { processUpdate } from './mixins';

/**
 * Callback invoked to handle model update request. 
 */
const onUpdate = {
  /**
   * Callback invoked on update
   * @param model - current model
   * @param changes - object containing changes
   * @returns updated model
   */
  onUpdate: (model, changes) => processUpdate(model, changes)
}

export default onUpdate;

