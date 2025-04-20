import React, { useState } from 'react';
import { PlusCircle, Search, Filter } from 'lucide-react';
import TeacherCard from '../../components/AdminComponents/TeacherCard';

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const teachers = [
    {
      id: 1,
      name: 'Dr. Robert Smith',
      title: 'Professor',
      department: 'Computer Science',
      email: 'robert.smith@example.edu',
      phone: '(555) 123-4567',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Database Systems', 'Machine Learning', 'Software Engineering'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Dr. Maria Garcia',
      title: 'Associate Professor',
      department: 'Engineering',
      email: 'maria.garcia@example.edu',
      phone: '(555) 234-5678',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Structural Analysis', 'Engineering Materials', 'Fluid Mechanics'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. James Wilson',
      title: 'Professor',
      department: 'Business',
      email: 'james.wilson@example.edu',
      phone: '(555) 345-6789',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Marketing Strategy', 'Financial Accounting', 'Business Ethics'],
      status: 'sabbatical'
    },
    {
      id: 4,
      name: 'Dr. Sarah Chen',
      title: 'Assistant Professor',
      department: 'Arts',
      email: 'sarah.chen@example.edu',
      phone: '(555) 456-7890',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Art History', 'Contemporary Art', 'Visual Culture'],
      status: 'active'
    },
    {
      id: 5,
      name: 'Dr. Michael Johnson',
      title: 'Professor',
      department: 'Computer Science',
      email: 'michael.johnson@example.edu',
      phone: '(555) 567-8901',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Artificial Intelligence', 'Computer Networks', 'Cybersecurity'],
      status: 'active'
    },
    {
      id: 6,
      name: 'Dr. Emily Brown',
      title: 'Associate Professor',
      department: 'Engineering',
      email: 'emily.brown@example.edu',
      phone: '(555) 678-9012',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      subjects: ['Thermodynamics', 'Mechanical Design', 'Control Systems'],
      status: 'active'
    },
  ];

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Teachers</h1>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Teacher
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Engineering</option>
              <option>Arts</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))
        ) : (
          <div className="col-span-full bg-white p-6 rounded-lg shadow text-center text-gray-500">
            No teachers found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;