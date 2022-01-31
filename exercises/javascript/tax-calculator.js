let TaxCalculator = class TaxCalculator {
  constructor(year) {
    if (year === undefined) {
      let date = new Date();
      this.year = date.getFullYear();
    } else {
      this.year = year;
    }
  }

  getYear() {
    return this.year;
  }

  calculateTax(vehicle) {
    let taxPrice;
    const {co2Emissions, fuelType} = vehicle;

    const petrolPrice ={
      0: 0,
      50: 10,
      75: 25,
      90: 105,
      100: 125,
      110: 145,
      130: 165,
      150: 205,
      170: 515,
      190: 830,
      225: 1240,
      255: 1760,
      100000: 2070
    }

    const vehicleCo2 = Object.keys(petrolPrice).find(element => co2Emissions <= element);
    taxPrice = petrolPrice[vehicleCo2];

    return taxPrice;
    // throw new Error('You have to implement the method doSomething!');
  }


}

// let taxCalculatorTest = new TaxCalculator(2019);
// const vehicleTest = new Vehicle(50, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);


module.exports = { TaxCalculator: TaxCalculator }