import React from "react";
import propTypes from "prop-types";

/**
 * PredictionCard Component
 * Displays a prediction with title , value , and optional confidence score
 */
const PredictionCard = ({ title,Value,confidence,icon,onclick}) => {
    return (
        <div
        className="Prediction-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}
        >
            {icon && <div class name {     // Help Fixing error and thinking 
                constructor(parameters) {
                    
                }
            }}
        </div>
    )
}