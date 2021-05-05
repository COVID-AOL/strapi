'use strict'
const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByCity(ctx) {
    let entities

    entities = await strapi.services.oxygenRefill.findByCity(ctx.query, ctx.params.id)

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.oxygenRefill }))
  }
}
