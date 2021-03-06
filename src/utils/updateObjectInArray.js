export function updateObjectInArray(arr, action) {
    return arr.map((elem, index) => {
      if (index !== action.payload.idx) {
        return elem
      }
      return {
        ...elem,
        ...action.payload.data
      }
    })
  }
  