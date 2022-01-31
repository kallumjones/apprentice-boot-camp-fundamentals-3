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

    const taxPrices = {
      'Petrol' : {
        256: 2070,
        226: 1760,
        191: 1240,
        171: 830,
        151: 515,
        131: 205,
        111: 165,
        101: 145,
        91: 125,
        76: 105,
        51: 25,
        1: 10,
        0: 0
      }
    }
    
    const vehicleCo2 = Object.keys(taxPrices[fuelType])
            .sort((a,b) => b - a)
            .find(element => co2Emissions >= element);

    taxPrice = taxPrices[fuelType][vehicleCo2];

    return taxPrice;
    // throw new Error('You have to implement the method doSomething!');
  }


}

// let taxCalculatorTest = new TaxCalculator(2019);
// const vehicleTest = new Vehicle(50, FuelType.PETROL, FIRST_OF_JAN_2020, 20000);


module.exports = { TaxCalculator: TaxCalculator }