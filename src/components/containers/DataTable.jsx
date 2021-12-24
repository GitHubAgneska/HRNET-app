import { Fragment } from 'react'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { fetchList, selectAllList, selectCollection, selectCollectionAsPages } from '../../features/list_feature'
import { listState, initialState } from '../../state/store'

import Pagination from '../../components/Pagination/Pagination'
import SearchBox from '../../components/SearchBox/SearchBox'
import SelectEntriesBox from '../../components/SelectEntriesBox/SelectEntriesBox'
import Table from './Table'

import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { TableWrapper, StyledTable, StyledTableHeader, TableHeaderIconWrapper, StyledTableRow } from './DataTable_style'

// spinner
import { css } from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"
const override = css`
    display: block;
    margin: 0 auto;
    border-color: fuchsia;
`;

const DataTable = () => {
    // spinner
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const [tableIsReady, setIsTableReady ] = useState(false)

    const dispatch = useDispatch()
    const list = useSelector(selectAllList)
    const listStatus = useSelector(initialState => initialState.list.status)

    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentActivePageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    
    const collection = useSelector(initialState => initialState.list.collection)
    const currentPageToDisplay = collectionAsPages[currentActivePageIndex]
    
   useEffect(() => {
    currentPageToDisplay?? setCurrentPageToShow(currentPageToDisplay)
   }, [currentPageToDisplay])
    
    //const page = useSelector(initialState => initialState.list.currentPage)
    const entries = useSelector(initialState => initialState.list.entries)
    const entriesOptions = [ 10, 50, 100]
    // const currentlyShowing = entries;
    
    console.log('currentPageToDisplay===>', currentPageToDisplay)

    
    const tableHead = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']
    
    const headRow = () => { return (tableHead).map((h, index) => (
        <th key={index}>
            {h}
            <TableHeaderIconWrapper>
                <FontAwesomeIcon icon={faArrowCircleDown} onClick={() => sortListBy(h, false)}/>
                <FontAwesomeIcon icon={faArrowCircleUp} onClick={() => sortListBy(h, true)} />
            </TableHeaderIconWrapper>
        </th>
    ))}
    
    
    let isTableReady = false;
    const tableRows = rowDataObject => {
        const { key, index } = rowDataObject
        const tableCell = [...tableHead]
        
        const columnData = tableCell.map((keyD, i) => {
            console.log('COLUMN DATA===', key[keyD])
            if ( key.constructor.name !== "String") { keyD = keyD.name }
            return <td key={i}>{key[keyD]}</td>})
        console.log('INDEX====', index)
        if ( index === currentPageToDisplay.length-1) { isTableReady = true; return }
        return (<tr key={index}>{columnData}</tr>)
    }


    const tableData = () => { return currentPageToDisplay.map((key, index) => tableRows({key, index}))
    }
    
    
    return (

        <Fragment>

            <TableWrapper>
               {isTableReady ? 
                <Fragment>
                    <StyledTable>
                        <StyledTableHeader>
                            <tr>{headRow()}</tr>
                        </StyledTableHeader>
                            <tbody>{tableData()}</tbody>    
                    </StyledTable>
                </Fragment>
                : <ClipLoader color={color} loading={loading} css={override} size={150} />
               }

                   
            
            </TableWrapper>
    

            <Pagination
            /* currentPage={currentPage}
            updatePage={changePage}
            totalPages={totalPages}
            total={total} */
            />

            <SelectEntriesBox 
            options={entriesOptions}
            /* selectEntriesAmount={selectEntriesAmount}
            currentlyshowing={entries}
            ListTotal={ListTotal} */
            /> 

            <SearchBox 
            /* handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
            clearInput={clearInput}
            values={searchInputValues}
            suggestions={suggestions}
            selectSuggestion={selectSuggestion}
            handleKeyDown={handleKeyDown} */
            />
 
        </Fragment>
    )
}
export default DataTable