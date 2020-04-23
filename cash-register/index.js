const currentToValue = {
  PENNY: .01,
  NICKEL: .05,
  DIME: .1,
  QUARTER: .25,
  ONE: 1,
  DOLLAR: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
}

function checkCashRegister(price, cash, cid) {
  let diff = Math.abs(price - cash)
  const change = []

  const sortedCid = cid.map(x => Array.from(x)).sort(([c1], [c2]) => currentToValue[c2] - currentToValue[c1]) // sort by current's value

  for (let i = 0; i < sortedCid.length; i++) {
    const [currentName, currentAmount] = sortedCid[i]
    const currentValue = currentToValue[currentName]

    if (currentAmount !== 0 && currentValue <= +diff.toFixed(2)) {
      diff -= currentValue
      sortedCid[i][1] -= currentValue
      const sameCurrent = change.length > 0 && change[change.length - 1][0] === currentName
      if (sameCurrent) change[change.length - 1][1] += currentValue
      else change.push([currentName, currentValue])
      i-- // repeat currency
    }
  }

  if (diff > Number.EPSILON) return {status: "INSUFFICIENT_FUNDS", change: []}

  const isCashEmpty = sortedCid.every(([_, amount]) => amount < Number.EPSILON)

  if (isCashEmpty) {
    return {
      status: 'CLOSED',
      change: cid //.sort(([c1], [c2]) => currentToValue[c1] - currentToValue[c2]),
    }
  }
  return {
    status: 'OPEN',
    change: change.map(([name, amount]) => ([name, +amount.toFixed(3)])),
  }

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
