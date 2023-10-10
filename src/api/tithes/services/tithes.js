'use strict';

/**
 * tithes service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tithes.tithes');
