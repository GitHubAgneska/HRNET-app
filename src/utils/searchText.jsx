import moment from 'moment'

// search each employee (object) of list for a match
// return suggestions array matching word
export const searchSuggestions = (term, list) => {
    let suggestions = []
    let suggested = {}
    let reg = new RegExp(term, 'gi')
    term = term.toLowerCase()
    list.forEach(obj => {
        console.log('SEARCHING CURRENT OBJECT =', obj)

        let val= ''
        for (let [key, value] of Object.entries(obj)) {
            if ( key === 'dob' || key === 'startDate' ) { val = moment(value).format('MM/DD/YYYY') }
            else if ( key === 'state' ) { val = value.name }
            //else if ( typeof(value) === 'number') { val = value.toString() }
            else if ( key === 'id' ) { val = value.toString() }
            else { val = value; }

            console.log('CURRENT VAL =', val, typeof(val))
            
            if ( val.includes(term) || reg.test(val) )  { 
                suggested.key = val;
                suggested.value = obj;
                suggestions.push(suggested);
            }
        }
    })
    return Array.from(new Set(suggestions)) // ---- TO REVIEW: dont allow doublons to be pushed instead
}

const normalizeValuesForSearch = (objValues) => {

}