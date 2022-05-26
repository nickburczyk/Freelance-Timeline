export const sortObjArray = (array:any[], sortKey:string, direction:sortDirection = 'asc'):any[] => {
  array.sort( (a, b):number => {
    if ( direction === 'desc') {
      return a[sortKey] < b[sortKey] ? 0 : -1
    }
    return a[sortKey] > b[sortKey] ? 0 : -1
  })
  return array
}

type sortDirection = "asc" | "desc"