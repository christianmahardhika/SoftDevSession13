var Person = require('../person/person')

class CheckNIK extends Person {
  constructor(...args) {
    super(...args)
  }
      CheckNIK() {
        if (super.getNik().length === 16) {
          return "NIK Valid"
        } else {
          return "NIK Tidak Valid"
        }
      }
  }

  module.exports = CheckNIK;