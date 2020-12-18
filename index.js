var Person = require('./domain/person/person.js')
var Age = require('./domain/age/age.js')
var NIK = require('./domain/checkNIK/checkNIK.js')
var BOD = require('./domain/checkBod/checkBod.js')
  
  var person1 = new Person('Tata', '6403052010930001', '1993-10-20');
  if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

// ======

  var age1 = new Age('Tata', '6403052010930001', '1993-10-20');
  console.log(`Merupakan seorang ${age1.personByAge()}`)

var checkNik = new NIK('Tata', '6403052010930001', '1993-10-20');
console.log(`${checkNik.CheckNIK()}`)
var checkBod = new BOD('Tata', '6403052010930001', '1993-10-20');
console.log(`${checkBod.checkBOD()}`)