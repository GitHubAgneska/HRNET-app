import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { SearchBoxWrapper, SearchBoxInput } from './SearchBow_style'

const SearchBox = ({handleSearchChange, handleSearchSubmit} ) => { 
    return (
        <Fragment>
            <SearchBoxWrapper>
                <SearchBoxInput 
                    type="text"
                    placeholder="search"
                    onChange={e => handleSearchChange(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} onClick={(e) => handleSearchSubmit(e.target.value)}  />
            </SearchBoxWrapper>
        </Fragment>
    )
}
export default SearchBox
