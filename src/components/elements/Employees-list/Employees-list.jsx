import Table from '../Table/Table'

const EmployeesList = ({sortedList, sortListBy, searchActive, searchResults}) => {

    
    
    //const listToDisplay = sortedList??[]

/*     if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    if ( list.get_status === 'pending') { return <span>LOADING</span>} */
    
    return (
        <section style={{height:'70vh'}}>
                <Table list={sortedList} sortListBy={sortListBy} />
                
                {/* { searchActive && searchResults.length > 0 ?
                    <Table list={searchResults} sortListBy={sortListBy} />
                    : <Table list={sortedList} sortListBy={sortListBy} />
                } */}

{/*             { listToDisplay &&  <Table list={listToDisplay} sortListBy={sortListBy} /> }
            { ! listToDisplay &&  <Table list={list.originalList} sortListBy={sortListBy} /> }
            { searchResults && searchResults.length > 0 && <Table list={searchResults} sortListBy={sortListBy}/> } */}
        
        </section>
    )
}
export default EmployeesList