export const sortObjArray = (array:any[], sortKey:string, direction:sortDirection = 'desc'):any[] => {
  array.sort( (a, b):number => {
    if ( direction === 'asc') {
      return a[sortKey] > b[sortKey] ? 0 : -1
    }
    return a[sortKey] < b[sortKey] ? 0 : -1
  })
  return array
}

type sortDirection = "asc" | "desc"