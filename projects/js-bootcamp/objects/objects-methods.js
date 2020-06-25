const restaurant = {
  name: 'Nolio',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    // this - references the object where the method is defined in
    // console.log(this)
    return (this.guestCapacity - this.guestCount) >= partySize
  },
  seatParty: function(partySize) {
    if (this.checkAvailability(partySize)) {
      this.guestCount += partySize
      return true
    } else {
      return false
    }
  },
  removeParty: function(partySize) {
    if (this.guestCount >= partySize) {
      this.guestCount -= partySize
      return true
    } else {
      return false
    }
  }
}

// const status = restaurant.checkAvailability(4)

// console.log(status)

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(3)
console.log(restaurant.checkAvailability(4))
