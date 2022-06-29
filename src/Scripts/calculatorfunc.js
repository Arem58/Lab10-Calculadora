const getMapKeys = {
  mapKeys: {
    48: { type: 'input', value: '0' },
    49: { type: 'input', value: '1' },
    50: { type: 'input', value: '2' },
    51: { type: 'input', value: '3' },
    52: { type: 'input', value: '4' },
    53: { type: 'input', value: '5' },
    54: { type: 'input', value: '6' },
    55: { type: 'input', value: '7' },
    56: { type: 'input', value: '8' },
    57: { type: 'input', value: '9' },
    190: { type: 'input', value: '.' },
    88: { type: 'operation', value: 'exponent' },
    47: { type: 'operation', value: 'division' },
    221: { type: 'operation', value: 'multiply' },
    189: { type: 'operation', value: 'subtract' },
    187: { type: 'operation', value: 'sum' },
    67: { type: 'clear', value: 'clear' },
    13: { type: 'result', value: null },
    8: { type: 'delete', value: 'delete' },
    84: { type: 'toggle', value: 'toggle' },
  },
  getButtonTyoe(valeuCode) {
    return getMapKeys.mapKeys[valeuCode]
  },
}

const setNumber = (newNumber, Number, length) => {
  let oldNumber = Number
  if (newNumber === '.' && oldNumber.includes('.')) {
    return oldNumber
  }
  if (oldNumber.length === length) {
    return oldNumber
  }
  if (oldNumber === '0' && newNumber === '.') {
    oldNumber = '0.'
  } else if (oldNumber === '0' && newNumber !== '.') {
    oldNumber = newNumber
  } else {
    oldNumber += newNumber
  }
  return oldNumber
}

const deleteNumber = (number) => {
  let newNumber = number.slice(0, -1)
  if (newNumber === '') {
    newNumber = '0'
  }
  return newNumber
}

const getResult = (oldNumber, newNumber, currentOp) => {
  const oldValue = parseFloat(oldNumber)
  const newValue = parseFloat(newNumber)
  let resultOP = 0
  if (currentOp === 'multiply') {
    resultOP = oldValue * newValue
  }
  if (currentOp === 'division') {
    if (newValue === 0) {
      resultOP = 'ERROR'
    }
    resultOP = oldValue / newValue
  }
  if (currentOp === 'subtract') {
    resultOP = oldValue - newValue
  }
  if (currentOp === 'sum') {
    const multiplierFix = 1000000000
    resultOP = (((oldValue * multiplierFix) + (newValue * multiplierFix)) / multiplierFix)
  }
  if (currentOp === 'exponent') {
    resultOP = oldNumber % newValue
  }
  resultOP += ''
  return resultOP.substring(0, 10)
}

export default getMapKeys
export {
  setNumber,
  getMapKeys,
  deleteNumber,
  getResult,
}
