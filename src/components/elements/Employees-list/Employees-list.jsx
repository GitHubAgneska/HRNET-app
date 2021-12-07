import Table from '../Table/Table'

const EmployeesList = ({sortedList, sortListBy}) => {

/*  if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    if ( list.get_status === 'pending') { return <span>LOADING</span>} */
    return (
        <section style={{height:'70vh'}}>
                <Table list={sortedList} sortListBy={sortListBy} />
        </section>
    )
}
export default EmployeesList