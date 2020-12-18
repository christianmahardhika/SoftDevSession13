class Person {
    constructor(name, nik, bod) {
      this.name = name;
      this.nik = nik;
      this.bod = bod;
    }
        getWeekType(){
          let day = new Date(this.bod).getDay()
          if (day > 0 && day < 6) {
            return "Weekday" 
          } else if(day === 0 || day === 6) {
            return "Weekend"      
          } else {
            return "Birth of date not valid"  
          }
        }
        getAge(){
          var birthOfDate = Date.parse(this.bod)
          var now = Date.now()
          var diff = now - birthOfDate
          var diffDate = new Date(diff)
          return Math.abs(diffDate.getUTCFullYear() - 1970)
        }
  }

    module.exports = Person;