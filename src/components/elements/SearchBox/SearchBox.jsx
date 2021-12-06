
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import { SearchBoxWrapper, SearchBoxInput, SearchSuggestionsWrapper } from './SearchBox_style'

const SearchBox = ({values, handleSearchChange, clearInput, handleSearchSubmit, suggestions, selectSuggestion} ) => {
    

    return (
        <Fragment>
            <SearchBoxWrapper>
                
                <SearchBoxInput 
                    type="text"
                    placeholder="search"
                    values={values}
                    onChange={e => handleSearchChange(e)}
                />
                <FontAwesomeIcon icon={faTimes} onClick={() => clearInput()} />
                <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchSubmit()} />
                
            </SearchBoxWrapper>

            { suggestions && suggestions.size > 0 && 
                <SearchSuggestionsWrapper>
                    <ul>
                        { [...suggestions.keys()].map( s => (  <li key={Math.random()} onClick={()=> selectSuggestion(s)}>{s}</li> )) }
                    </ul>
                </SearchSuggestionsWrapper>
            }

        </Fragment>
    )
}
export default SearchBox
