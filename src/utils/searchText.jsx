import moment from 'moment'

// search each employee (object) of list for a match
// return suggestions array matching word
export const searchSuggestions = (query, list) => {
    let suggested = [];
    let suggestions = new Map()
    let reg = new RegExp(query, 'gi')
    query = query.toLowerCase()
    list.forEach(obj => {
        // console.log('SEARCHING CURRENT OBJECT =', obj)
        let objectValue = ''
        for (let [key, value] of Object.entries(obj)) {
            if ( key === 'dob' || key === 'startDate' ) { objectValue = moment(value).format('MM/DD/YYYY') }
            else if ( key === 'state' ) { objectValue = value.name }
            //else if ( typeof(value) === 'number') { objectValue = value.toString() }
            else if ( key === 'id' ) { objectValue = value.toString() }
            else { objectValue = value; }

            // console.log('CURRENT VAL =', objectValue, typeof(objectValue))
            
            if ( objectValue.includes(query) || reg.test(objectValue) )  { 
                
                if (suggestions.has(objectValue)) {
                    suggestions.get(objectValue).push(obj)
                }
                else { 
                    suggested.push(obj)
                    suggestions.set(objectValue, suggested);
                }
            }
        }
    })
    return suggestions
}

const normalizeValuesForSearch = (objValues) => {

}