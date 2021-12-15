import Table from '../Table/Table'

const EmployeesList = ({page, sortedList, sortListBy}) => {
    console.log('PAGE==', page)
    return (
        
        <section style={{height:'70vh'}}>
            <Table page={page} sortListBy={sortListBy} />
        </section>

    /*  <section style={{height:'70vh'}}>
            <Table list={sortedList} sortListBy={sortListBy} />
        </section> */
    )
}
export default EmployeesList