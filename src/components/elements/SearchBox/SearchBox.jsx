
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import { SearchBoxWrapper, SearchBoxInput, SearchSuggestionsWrapper } from './SearchBox_style'

const SearchBox = ({values, handleSearchChange, clearInput, handleSearchSubmit, suggestions } ) => {
    
    
    //const [ displaySuggestionsBox, setDisplaySuggestionsBox ] = useState(false)
    // const toggleSuggestions = () => { setDisplaySuggestionsBox(!displaySuggestionsBox);}
    
    
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

            { suggestions && suggestions.length > 0 && 
                <SearchSuggestionsWrapper>
                    <ul>
                        { [...suggestions.keys()].map( s => (  <li key={Math.random()}>{s}</li> )) }
                    </ul>
                </SearchSuggestionsWrapper>
            }

        </Fragment>
    )
}
export default SearchBox
