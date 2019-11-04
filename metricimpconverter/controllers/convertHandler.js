/*
*
*
*       Complete the handler logic below
*
*
*/

const getNumPart = s => {
  const regExp = /[^0-9\.\/]$/ // ends with not (number or slash)
  while (regExp.test(s)) s = s.slice(0, -1)
  return s
}


class ConvertHandler {
  getNum (input) {
    const numPart = getNumPart(input) || '1'
    const parts = numPart
      .split('/')
      .map(s => Number.parseFloat(s, 10))
  
    if (parts.length > 2 || parts.some(Number.isNaN)) return 'invalid number'
    return parts.reduce((sum, n) => sum / n)
  }
  getUnit (input) {
    const x = unit => new RegExp(`${unit}s?$`, 'i').test(input)
    if (x('gal') || x('gallon')) return 'gal'
    if (x('l') || x('liter')) return 'l' // WARNING: gal also ends with l!
    if (x('lbs') || x('pound')) return 'lbs'
    if (x('kg') || x('kilogram')) return 'kg'
    if (x('mi') || x('mile')) return 'mi'
    if (x('km') || x('kilometer')) return 'km'
    return 'invalid unit'
  }
  getReturnUnit (initUnit) {
    const changes = {
      gal: 'l',
      l: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi',
    }
    return changes[this.getUnit(initUnit)]
  }
  spellOutUnit (unit, amount = 2) {
    const getUnitName = () => {
      const x = y => new RegExp(`${y}s?$`, 'i').test(unit)
      if (x('gal') || x('gallon')) return 'gallon'
      if (x('l') || x('liter')) return 'liter' // WARNING: gal also ends with l!
      if (x('lbs') || x('pound')) return 'pound'
      if (x('kg') || x('kilogram')) return 'kilogram'
      if (x('mi') || x('mile')) return 'mile'
      if (x('km') || x('kilometer')) return 'kilometer'
      return 'invalid unit'
    }
    return getUnitName() + (amount > 1 ? 's' : '')
  }
  convert (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    const changes = {
      gal: galToL,
      l: 1 / galToL,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
      mi: miToKm,
      km: 1 / miToKm,
    }

    return changes[(initUnit)] * initNum
  }
  getString (initNum, initUnit, returnNum, returnUnit) {
    const x = [
      initNum,
      this.spellOutUnit(initUnit),
      'converts to',
      Number.parseFloat(returnNum.toFixed(5)),
      this.spellOutUnit(returnUnit),
    ]
    return x.join(' ')
  }
}

module.exports = ConvertHandler;