import React from 'react';
import { Calendar, FileText, User, BookOpen, Award } from 'lucide-react';


const RecentActivityCard = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'enrollment':
        return <User className="h-5 w-5 text-blue-500" />;
      case 'assignment':
        return <FileText className="h-5 w-5 text-emerald-500" />;
      case 'course':
        return <BookOpen className="h-5 w-5 text-indigo-500" />;
      case 'certification':
        return <Award className="h-5 w-5 text-amber-500" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">{getIcon()}</div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
          <p className="text-sm text-gray-600">{activity.description}</p>
          <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;