var Person = require('../person/person')

class CheckBod extends Person {
  constructor(...args) {
    super(...args)
  }
      checkBOD() {
        var nik = super.getNik()
        var bod = super.getBod()
        //normalize BOD
        var bodNormalize = bod.replace(/-/g, "");
        //extract date
        var dateNik = nik.slice(6,8)
        var dateBod = bodNormalize.slice(6,8)
        //extract month
        var monthNik = nik.slice(8,10)
        var monthBod = bodNormalize.slice(4,6)
        //extract year
        var yearNik = nik.slice(10,12)
        var yearBod = bodNormalize.slice(2,4)
        if (dateNik === dateBod && monthNik === monthBod && yearNik === yearBod) {
          return "Yeay..., Tanggal Lahir dan NIK valid"
        } else {
          return "Opss..., Tanggal Lahir dan NIK tidak valid"
        }
      }
  }

  module.exports = CheckBod;