import React from "react";
import PropTypes from "prop-types";

/**
 * KPI Card Component
 * @param {React.Component} icon - React icon component
 * @param {String} title - KPI title
 * @param {string|number} value - KPI value
 * @param {string} change - Change percentage or value
 * @param {string} colour - color key (green, blue, purple, orange)
 */
const KPICard = ({ icon: Icon, title, value, change, colour }) => {
  // Define allowed colour classes
  const colourClasses = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
  };

  // Fallback color if invalid key is passed
  const appliedColor = colourClasses[colour] || "text-gray-600";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-4">
      {/* Icon */}
      {Icon && <Icon className={`text-3xl ${appliedColor}`} />}

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <p className={`text-sm ${appliedColor}`}>
            {change}
          </p>
        )}
      </div>
    </div>
  );
};

// PropTypes validation
KPICard.propTypes = {
  icon: PropTypes.elementType, // React component type
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.string,
  colour: PropTypes.oneOf(["green", "blue", "purple", "orange"]),
};

// Default props
KPICard.defaultProps = {
  change: "",
  colour: "green",
};

export default KPICard;
