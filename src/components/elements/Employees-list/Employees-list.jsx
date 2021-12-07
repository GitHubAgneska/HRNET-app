import Table from '../Table/Table'

const EmployeesList = ({sortedList, sortListBy}) => {
    
    return (
        <section style={{height:'70vh'}}>
                <Table list={sortedList} sortListBy={sortListBy} />
        </section>
    )
}
export default EmployeesList