import Table from '../Table/Table'

const EmployeesList = ({list, sortedList, sortListBy}) => {
    
    const listToDisplay = sortedList??[]

    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    if ( list.get_status === 'pending') { return <span>LOADING</span>}
    
    return (
        <div>

            { listToDisplay &&  <Table list={listToDisplay} sortListBy={sortListBy} /> }
            { ! listToDisplay &&  <Table list={list.currentList} sortListBy={sortListBy} /> }

        </div>
    )
}
export default EmployeesList