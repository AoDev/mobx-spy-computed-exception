
const mobx = require('mobx')
const {observable, decorate, computed} = mobx

// Dummy model with computed property fullName
function Person (firstName, lastName) {
  mobx.extendObservable(this, {
    firstName,
    lastName,
    get fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  })
}

const aPerson = new Person('John', 'Doe')

// Observing fullName computed property
mobx.autorun(() => {console.log(aPerson.fullName)})

// Setup Spy
mobx.spy((event) => {
  if (event.type === 'compute') {
    // Comment this line, no exception thrown.
    console.log(event.object.fullName)
  }
})

aPerson.firstName = 'Jane'
aPerson.lastName = 'Anonymous'
