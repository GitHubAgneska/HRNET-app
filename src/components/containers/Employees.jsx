import { useSelector } from "react-redux"
import { useState } from 'react'
import { 
    selectFilteredEmployees,
    requestFiltering,
    requestSearch,
    requestListAsSearchResults,
    requestSetAllSuggestionsAsResults,
    requestSearchResetting
} from '../../features/filtering-feature'
import { employeesListState } from "../../state/store"

import { setUpPagination, selectCurrentPage } from '../../features/pagination_feature'
import EmployeesList from '../elements/Employees-list/Employees-list'

import SearchBox from "../elements/SearchBox/SearchBox"
import SelectEntriesBox from '../elements/SelectEntriesBox/SelectEntriesBox'
import { searchSuggestions } from '../../utils/searchText'
import { TitleWrapper, StyledTitle } from '../../style/global_style'
import Pagination from "../elements/Pagination/Pagination"

// spinner
import { css } from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"
import { useDispatch } from "react-redux"

const override = css`
    display: block;
    margin: 0 auto;
    border-color: fuchsia;
`;

const Employees = () => {

    const dispatch = useDispatch()
    // spinner
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    

    const listStatus = useSelector(state => state.employeesList.get_status)
    const originalList = useSelector(state => state.employeesList.originalList)
    
    const sortedList = useSelector(selectFilteredEmployees)
    
    const page = useSelector(state => state.pagination.currentActivePage)
    const totalPages = useSelector(state => state.pagination.totalPages)
    const currentActivePageIndex = useSelector(state => state.pagination.currentActivePageIndex)
    const entries = useSelector(state => state.pagination.entries)
    
    // SEARCH LIST
    const input = document.querySelector('input')
    const [ searchInputValues, setSearchInputValues ] = useState("")
    const [ suggestions, setSuggestions ] = useState([])
    
    // wait for pagination to be set (depends on initial fetch resolving)
    let proceed = false;
    if ( listStatus === 'pending' || listStatus === 'updating' ) { return 'loading' }
    else if ( listStatus === 'resolved') { page?.length > 0 ? proceed=true:proceed=false; }


    // SORT AND SEARCH LIST 
    const sortListBy = (filterParam, reverse ) => { // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    const handleSearchChange = e => { 
        let query = e.target.value
        // console.log('searchInputValues==', query)
        requestSearch(query)

        if ( query.length > 2 ) {
            let sugg = searchSuggestions(query, sortedList) // returns a map with: { suggestedWord1 => [ {suggObj1}, {suggObj2} ], ... }
            setSuggestions(sugg)
            // console.log('SUGGESTIONS SET==', sugg);
        } else { setSuggestions([]) ; requestSearchResetting()}
    }

    const handleKeyDown = e => {
        const key = e.code; 
        if ( key === 'Enter' ) { 
            validateCurrentSearch()
        }
    }

    const validateCurrentSearch = () => { 
        let suggestedResults = Array.from(suggestions.values()).flat()  // retrieve all map values
        // console.log('suggestedResults=', suggestedResults)
        requestSetAllSuggestionsAsResults(suggestedResults)             // request to set them as results
        setSuggestions([]) // reset suggestions => block closes
    }

    const clearInput = () => {
        if ( input.value !== "" ) {
            setSearchInputValues("")
            input.value = ""
            setSuggestions([]) // reset suggestions => block closes
            requestSearchResetting()

        } else { return }
        console.log('values after clear=',searchInputValues ) // -- not empty at first: why ?
    }

    const selectSuggestion = (suggestion) => {
        // console.log('SUGGESTION PICKED===', suggestion)
        input.value = suggestion
        let resultsOfClickedSuggestion = suggestions.get(suggestion) // arr of objects from map
        // console.log('resultsOfClickedSuggestion===', resultsOfClickedSuggestion)
        setSuggestions([])  // reset suggestions => block closes
        requestListAsSearchResults(resultsOfClickedSuggestion)
    }

    const handleSearchSubmit = () => {  return input.value !== ""? validateCurrentSearch() : null }
    
    // ENTRIES / PAGINATION
    const currentlyShowing = entries;
    const ListTotal = sortedList.length
    let entriesOptions = [ 15, 30, 50]
    const selectEntriesAmount = (n) => { dispatch(setUpPagination(n)) }
    const changePage = (pageNumber) => { console.log('page requested:', pageNumber)}
    
    return (
        <main>
            <TitleWrapper>
                <StyledTitle>Current Employees list</StyledTitle>
            </TitleWrapper>
            {/* { sortedList.length === 0  && 
                <ClipLoader color={color} loading={loading} css={override} size={150} />
            } */}
            { listStatus === 'pending' || listStatus === 'updating' ?  
                <ClipLoader color={color} loading={loading} css={override} size={150} />
                :null
            }

            <SelectEntriesBox 
                options={entriesOptions}
                selectEntriesAmount={selectEntriesAmount}
                currentlyshowing={entries}
                ListTotal={ListTotal}
            />

            <SearchBox 
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                clearInput={clearInput}
                values={searchInputValues}
                suggestions={suggestions}
                selectSuggestion={selectSuggestion}
                handleKeyDown={handleKeyDown}
            />

                { proceed && 
                    <EmployeesList
                        /* sortedList={sortedList} */
                        page={page}
                        sortListBy={sortListBy}
                    />
                }

            <Pagination 
                totalPages={totalPages}
                currentActivePage={currentActivePageIndex}
                changePage={changePage}
            />

        </main>
    )
}

export default Employees