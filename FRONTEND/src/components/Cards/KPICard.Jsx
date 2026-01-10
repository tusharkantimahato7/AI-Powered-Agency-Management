import React from "react";
import Proptypes from "prop-types";

/** 
 * KPI Card Component
 * @param {React.Component} icon - React icon component
 * @param {String} title - Kpi title 
 * @param {string|number} value - KPI value
 * @param {string} change - Change percentage or value
 * @param {string} colour - color key (green,blue,purple,orange)
 */
const KPICard = ({icon:Icon,title,value,change,colour}) => {
    //Define allowed colour classes
    const colourClasses= {
        green: "text-green-600",
        blue: "text-blue-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
};

// Fallback color if invalid key is passed 
const appliedColor = colorClasses[color] || "text-gray-600"; 
