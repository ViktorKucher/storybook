import React from "react";
import PropTypes from "prop-types";
export const Input = ({type,borderRadius,width,height,borderColor,color}) =>{
    const style={
        width,
        height,
        borderRadius,
        borderColor,
        color
    }
    return <input type={type} style={style} />
}
Input.propTypes = {
    type: PropTypes.string,
    borderRadius: PropTypes.string,
    borderColor: PropTypes.string,
    width: PropTypes.string,
    height:PropTypes.string,
    color:PropTypes.string
}