import React from 'react';
import { TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const Predictions = () => {
  // Your ML models and their performance
  const models = [
    {
      name: 'Delay Prediction',
      type: 'Random Forest',
      accuracy: '89.3%',
      color: 'blue'
    },
    {
      name: 'Budget Optimizer',
      type: 'Gradient Boosting',
      accuracy: 'MAE: $1,240',
      color: 'green'
    },
    {
      name: 'Churn Prediction',
      type: 'Neural Network',
      accuracy: 'AUC: 0.92',
      color: 'purple'
    }
  ];

  // What matters most in your predictions
  const features = [
    { name: 'Project Complexity', importance: 0.28 },
    { name: 'Client Response Time', importance: 0.22 },
    { name: 'Team Experience', importance: 0.18 },
    { name: 'Scope Changes', importance: 0.16 },
    { name: 'Budget Size', importance: 0.16 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          🤖 ML Model Insights
        </h3>
        
        {/* Show your ML models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {models.map((model, idx) => (
            <div key={idx} className={`p-4 bg-${model.color}-50 rounded-lg border border-${model.color}-200`}>
              <h4 className={`font-semibold text-${model.color}-900 mb-2`}>
                {model.name}
              </h4>
              <p className={`text-sm text-${model.color}-700`}>{model.type}</p>
              <p className={`text-sm text-${model.color}-600 font-medium mt-1`}>
                {model.accuracy}
              </p>
            </div>
          ))}
        </div>

        {/* Feature importance bars */}
        <div className="mb-6">
          <h4 className="font-semibold text-slate-800 mb-3">
            📊 What Drives Predictions?
          </h4>
          <div className="space-y-3">
            {features.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{item.name}</span>
                  <span className="font-semibold text-slate-800">
                    {(item.importance * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${item.importance * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI recommendations */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <TrendingUp size={18} />
            💡 AI Recommendations
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Add 2 more developers to Enterprise Plus - 78% chance of success boost</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
              <span>Check in with StartupXYZ soon - they have a 68% churn risk</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span>Cut copywriter hours by 15% - they're being underutilized right now</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Predictions;