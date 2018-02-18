export const sortField = (field, order='asc') => {
  return function compare(eventA, eventB) {
    let sorted = []
    switch (field) {
      case 'name': {
          order === 'asc'
          ? sorted = eventA[field].localeCompare(eventB[field])
          : sorted = eventB[field].localeCompare(eventA[field])
          return sorted
        }
        break
      case 'temp': {
          let sorted = eventA[field] - eventB[field]
          return order === 'asc' ? sorted : sorted * -1
        }
        break
    }
  }
}
