import moment from 'moment'
import { listState } from '../state/store'

export const searchSuggestions = (query, list) => (dispatch, getState ) => {
    if (!list.length>0) { list = listState(getState()).collection}
    console.log('LIST WHEN HITS SEARCH FUNCTION=>', list)
    let suggested = [];
    let suggestions = new Map()
    let reg = new RegExp(query, 'gi')

    query = query.toLowerCase()
    list.forEach(obj => {
        let objectValue = ''
        for (let [key, value] of Object.entries(obj)) {
            if ( key === 'dob' || key === 'startDate' ) { objectValue = moment(value).format('MM/DD/YYYY') }
            else if ( key === 'state' ) { objectValue = value.name }
            else if ( key === 'id' ) { objectValue = value.toString() }
            else { objectValue = value }
            
            console.log('OBJECT VALUE==>', objectValue)
            if ( objectValue.includes(query) || reg.test(objectValue) )  { 
                
                //let highligtedValue = `<span style={{backgroundColor:'yellow'}}>`+ objectValue + `</span>`
                
                if (suggestions.has(objectValue)) { suggestions.get(objectValue).push(obj) }
                else {
                    suggested.push(obj)
                    suggestions.set(objectValue, suggested)
                }
            }
            suggested = []
        }
    })
    return suggestions
}
