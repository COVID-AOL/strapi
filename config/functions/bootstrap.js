'use strict'

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  // Requiring the module
  const reader = require('xlsx')

  // Reading our test file
  const file = reader.readFile('./data/data.xlsx')

  let data = []

  const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[1]])
  temp.forEach((res) => {
    data.push(res)
  })

  data.forEach(entry => {
    strapi.services.bed.create({
      hospitalName: entry.hospitalName,
      contact: entry.contact,
      pincode: entry.pincode,
      email: entry.email,
      website: entry.website,
      paid: (entry.paid.toLowerCase() === 'yes'),
      verified: (entry.verified.toLowerCase() === 'yes'),
      city: entry.city,
      address: entry.address,
    })
  })

}
