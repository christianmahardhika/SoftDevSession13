var Person = require('./domain/person/person.js')
var Age = require('./domain/age/age.js')
  
  var person1 = new Person('Christian', '<PUT_YOUR_IDNUMBER(KTP)>', '<PUT_YOUR_BOD(YYYY-MM-YY)>');
  if (person1.getWeekType() === 'Weekday' || person1.getWeekType() === 'Weekend') {
    console.log(`${person1.name} lahir pada tipe minggu ${person1.getWeekType()}`)
  } else {
    console.log(`Tanggal lahir ${person1.name} bermasalah`)  
  }
  console.log(`Saat ini berumur ${person1.getAge()}`)

// ======

  var age1 = new Age('Christian', '<PUT_YOUR_IDNUMBER(KTP)>', '1<PUT_YOUR_BOD(YYYY-MM-YY)>');
  console.log(`Merupakan seorang ${age1.personByAge()}`)
