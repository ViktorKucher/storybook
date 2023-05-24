import React from "react";
import PropTypes from "prop-types";
export const Button = ({text,backgroundColor,width,height,fontWeight}) =>{
    const style={
        backgroundColor,
        width,
        height,
        fontWeight
    }
    return<button style={style}>
        {text}
    </button>
}
Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height:PropTypes.string,
    fontWeight:PropTypes.string,
    color:PropTypes.string
}