import { Fragment } from "react";
import PropTypes from "prop-types"

const SelectInput = props => { 

    const { fieldName, handleInputChange, handleBlur, options } = props;

    return (
        <Fragment>
            <select
                options={options}
                name={fieldName}
                id="`{fieldName}`-select"
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-required="true">
                    { options.map(i => (
                        <option key={Math.random()} value={i} >{i}</option>
                    )) }
            </select>
        </Fragment>
    )
}

export default SelectInput

SelectInput.propTypes = { 
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}