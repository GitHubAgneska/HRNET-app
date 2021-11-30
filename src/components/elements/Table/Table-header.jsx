import { Fragment } from "react"


let headers = [ 'firsName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']
const TableHeader = () => { 
    return (
        <Fragment>
            <tr>
                { headers.map(h => (
                    <th key={Math.random()}>{h}</th>
                ))}
            </tr>
        </Fragment>
    )
}
export default TableHeader