import { useEffect, useState } from "react"
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import { SearchBoxWrapper, SearchBoxInput, SearchSuggestionsWrapper } from './SearchBox_style'

const SearchBox = ({values, handleSearchChange, clearInput, handleSearchSubmit, suggestions } ) => {
    
    
    const [ displaySuggestionsBox, setDisplaySuggestionsBox ] = useState(false)
    const toggleSuggestions = () => { setDisplaySuggestionsBox(!displaySuggestionsBox);}
    
    
    return (
        <Fragment>
            <SearchBoxWrapper>
                
                <SearchBoxInput 
                    type="text"
                    placeholder="search"
                    values={values}
                    onChange={e => handleSearchChange(e)}
                />
                <FontAwesomeIcon icon={faTimes} onClick={() => clearInput()}  />
                <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchSubmit()}  />
                
            </SearchBoxWrapper>

            { suggestions && 
                <SearchSuggestionsWrapper>
                    <ul>
                        { suggestions.map( s => (  <li key={Math.random()}>{s.key}</li> )) }
                    </ul>
                </SearchSuggestionsWrapper>
            }

        </Fragment>
    )
}
export default SearchBox
