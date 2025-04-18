import React from 'react';
import { Mail, Phone, Edit, MoreVertical } from 'lucide-react';



const TeacherCard = ({ teacher }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'sabbatical':
        return 'bg-blue-100 text-blue-800';
      case 'retired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transition-transform duration-200 hover:transform hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{teacher.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                {teacher.title} • {teacher.department}
              </div>
              <span className={`mt-1 px-2.5 py-0.5 inline-flex text-xs leading-5 font-medium rounded-full ${getStatusBadgeClass(teacher.status)}`}>
                {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
              </span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{teacher.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{teacher.phone}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subjects</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {teacher.subjects.map((subject, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {subject}
              </span>
            ))}
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

export default TeacherCard;