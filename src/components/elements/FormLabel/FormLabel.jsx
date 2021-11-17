import { Fragment } from "react";
import PropTypes from "prop-types"

const FormLabel = props => { 

    const { fieldName } = props;

    return ( 
        <Fragment>
            <label htmlFor={fieldName}>{fieldName}</label>
        </Fragment>
    )
}

export default FormLabel

FormLabel.propTypes = { 
    fieldName: PropTypes.string.isRequired
}