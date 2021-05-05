'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  findByCity(query, id, populate) {
    const regex = new RegExp(id, 'i') // i for case insensitive
    query.city = { $regex: regex }
    return strapi.query('oxygenCylinder').find(query, populate)
  }
}
