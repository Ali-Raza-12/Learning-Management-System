import React from 'react';
import { Users, MapPin, Clock, Edit, MoreVertical, BookOpen, CreditCard } from 'lucide-react';

const CourseCard = ({ course, viewMode }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block h-12 w-12 rounded-lg bg-indigo-100 flex-shrink-0 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                  <span className="ml-2 px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    {course.code}
                  </span>
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <span>{course.instructor}</span>
                  <span className="mx-1">•</span>
                  <span>{course.department}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2">
              <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusBadgeClass(course.status)}`}>
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </span>
              <button className="p-1 text-gray-400 hover:text-gray-500">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
              <span>{course.students} Students</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
              <span className="truncate">{course.schedule}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
              <span className="truncate">{course.location}</span>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-500">Course Progress</span>
              <span className="text-xs font-medium text-gray-900">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transition-transform duration-200 hover:transform hover:scale-[1.02]">
      <div className="h-40 overflow-hidden relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusBadgeClass(course.status)}`}>
            {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
            </div>
            <span className="text-sm font-medium text-gray-500">{course.code}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            Instructor: {course.instructor}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
            <span>{course.department}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <CreditCard className="h-4 w-4 mr-2 text-gray-400" />
            <span>{course.credits} Credits</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            <span>{course.students} Students</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-500">Progress</span>
            <span className="text-xs font-medium text-gray-900">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 bg-gray-50 px-5 py-3 text-right">
        <button 
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </button>
      </div>
    </div>
  );
};

export default CourseCard;