import { useSelector } from "react-redux"
import { useState } from "react"
import { employeesListState } from "../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../features/filters-feature'
import EmployeesList from '../elements/Employees-list/Employees-list'
import SearchBox from "../elements/SearchBox/SearchBox"
import { searchSuggestions } from '../../utils/searchText'
import { TitleWrapper, StyledTitle } from '../../style/global_style'

const Employees = () => {

    // SORT LIST
    const list = useSelector(employeesListState) // --- TO REVIEW: should not be necessary to use here
    const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    // SEARCH LIST
    const [ searchInputValues, setSearchInputValues ] = useState("")
    const [ suggestions, setSuggestions ] = useState([])

    const handleSearchChange = e => { 
        //setSearchInputValues(e.target.value);
        let values = e.target.value;
        console.log('searchInputValues==', values);
        
        if ( values.length > 2 ) {
            let sugg = searchSuggestions(values, sortedList);setSuggestions(sugg)
           // if ( sugg.length > 0 ) { }
            console.log('SUGGESTIONS SET==', suggestions )
        }
        if (values.length === '') { setSuggestions([]) }
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
            />
            <EmployeesList list={list.currentList } sortedList={sortedList}  sortListBy={sortListBy} />
        </main>
    )
}

export default Employees