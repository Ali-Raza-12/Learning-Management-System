import React from 'react';
import { ArrowUp, ArrowDown, DivideIcon as LucideIcon } from 'lucide-react';


const StatsCard = ({ stat }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-transform duration-200 hover:transform hover:scale-[1.02]">
      <div className="flex items-center">
        <div className={`${stat.color} p-3 rounded-lg`}>
          <stat.icon className="h-6 w-6 text-white" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
          <dd className="flex items-baseline">
            <span className="text-2xl font-semibold text-gray-900">{stat.value}</span>
            <span 
              className={`ml-2 text-sm font-medium flex items-center
                ${stat.trend === 'up' ? 'text-green-600' : ''}
                ${stat.trend === 'down' ? 'text-red-600' : ''}
                ${stat.trend === 'neutral' ? 'text-gray-500' : ''}
              `}
            >
              {stat.trend === 'up' && <ArrowUp className="w-3 h-3 mr-1" />}
              {stat.trend === 'down' && <ArrowDown className="w-3 h-3 mr-1" />}
              {stat.change}
            </span>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;