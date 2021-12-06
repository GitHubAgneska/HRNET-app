import { useSelector } from "react-redux"
import { useState } from "react"
import { employeesListState } from "../../state/store"
import { selectFilteredEmployees, requestFiltering, requestSearch, requestListAsSearchResults } from '../../features/filters-feature'
import EmployeesList from '../elements/Employees-list/Employees-list'
import SearchBox from "../elements/SearchBox/SearchBox"
import { searchSuggestions } from '../../utils/searchText'
import { TitleWrapper, StyledTitle } from '../../style/global_style'

const Employees = () => {

    // SORT LIST
    //const list = useSelector(employeesListState) // --- TO REVIEW: should not be necessary to use here
    const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    // SEARCH LIST
    const [ searchInputValues, setSearchInputValues ] = useState("")
    const [ suggestions, setSuggestions ] = useState([])


    const handleSearchChange = e => { 
        let query = e.target.value;
        console.log('searchInputValues==', query);

        requestSearch(query)

        if ( query.length > 2 ) {
            let sugg = searchSuggestions(query, sortedList); 
            setSuggestions(sugg); console.log('SUGGESTIONS SET==', suggestions);
        
        } else { setSuggestions([]) }
    }

    const clearInput = () => {
        let input = document.querySelector('input')
        if ( input.value !== "" ) { 
            setSearchInputValues("")
            input.value = ""
            setSuggestions([])
            
        } else { return }
        console.log('values after clear=',searchInputValues ) // -- not empty at first: why ?
    }

    const selectSuggestion = (suggestion) => {
        let resultsOfClickedSuggestion = suggestions.get(suggestion) // arr of objects from map
        // console.log('resultsOfClickedSuggestion===', resultsOfClickedSuggestion)
        requestListAsSearchResults(resultsOfClickedSuggestion)
    }

    const handleSearchSubmit = () => { console.log('to submit :', searchInputValues); }


    return (
        <main>
            <TitleWrapper>
                <StyledTitle>Current Employees list</StyledTitle>
            </TitleWrapper>
            <SearchBox 
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                clearInput={clearInput}
                values={searchInputValues}
                suggestions={suggestions}
                selectSuggestion={selectSuggestion}
            />
            <EmployeesList 
                //list={list.originalList}
                sortedList={sortedList}
                sortListBy={sortListBy}
                />
        </main>
    )
}

export default Employees