import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { 
    selectFilteredEmployees,
    requestFiltering,
    requestSearch,
    requestListAsSearchResults,
    requestSetAllSuggestionsAsResults,
    requestSearchResetting
} from '../../features/filters-feature'
import { setUpPagination } from '../../features/pagination_feature'
import EmployeesList from '../elements/Employees-list/Employees-list'
import SearchBox from "../elements/SearchBox/SearchBox"
import { searchSuggestions } from '../../utils/searchText'
import { TitleWrapper, StyledTitle } from '../../style/global_style'
import SelectEntriesBox from '../elements/SelectEntriesBox/SelectEntriesBox'
import Pagination from "../elements/Pagination/Pagination"

// spinner
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
    display: block;
    margin: 0 auto;
    border-color: fuchsia;
`;

const Employees = () => {

    // spinner
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const dispatch = useDispatch()

    const sortedList = useSelector(selectFilteredEmployees)
    
    // SORT LIST By
    const sortListBy = (filterParam, reverse ) => { // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    // SEARCH LIST
    const input = document.querySelector('input')
    const [ searchInputValues, setSearchInputValues ] = useState("")
    const [ suggestions, setSuggestions ] = useState([])

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
    let entriesOptions = [ 15, 30, 50]
    
    const selectEntriesAmount = (n) => { dispatch(setUpPagination(n)) }
    const currentlyshowing = sortedList.length
    
    const pages = useSelector(state => state.pages.pagesArray)
    const totalPages = useSelector(state => state.pages.totalPages)
    const currentActivePage = useSelector(state => state.pages.currentActivePage)

    const changePage = (pageNumber) => { console.log('page requested:', pageNumber)}
    
    return (
        <main>
            <TitleWrapper>
                <StyledTitle>Current Employees list</StyledTitle>
            </TitleWrapper>
            { sortedList.length === 0  && 
                <ClipLoader color={color} loading={loading} css={override} size={150} />
            }

            <SelectEntriesBox 
                options={entriesOptions}
                selectEntriesAmount={selectEntriesAmount}
                currentlyshowing={currentlyshowing}
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
            {/*  <EmployeesList 
                sortedList={sortedList}
                sortListBy={sortListBy}
            /> */}
            <Pagination 
                pages={pages}
                totalPages={totalPages}
                currentActivePage={currentActivePage}
                changePage={changePage}
            />

        </main>
    )
}

export default Employees