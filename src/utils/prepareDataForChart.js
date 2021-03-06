export const prepareData = (arr) => {
  let result = {};
  let dates = Array.from(new Set(arr.map(elem => elem.date)))
  arr.forEach(elem => {
    if (result[elem.name]) {
      result[elem.name].push({ ...elem })
    } else {
      result[elem.name] = [{ ...elem }]
    }
  })


  dates.forEach( date => {
    Object.values(result).forEach( (company, idx) => {
      if(!(company.some( (elem) => elem.date === date))) {
            company.push({date, price: null})
      } 
    })
  })

  return {
    data: Object.values(result).map(elem => elem.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })),
    labels: [...dates.sort( (a, b) => {
      return new Date(a) - new Date(b)
    })]
  }
}



