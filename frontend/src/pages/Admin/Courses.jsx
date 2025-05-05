import { useState } from 'react';
import { PlusCircle, Search, Filter } from 'lucide-react';
import CourseCard from '../../components/AdminComponents/CourseCard';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      code: 'CS101',
      instructor: 'Dr. Robert Smith',
      department: 'Computer Science',
      credits: 3,
      students: 45,
      schedule: 'Mon, Wed, Fri 10:00 AM - 11:30 AM',
      location: 'Room 301, Tech Building',
      status: 'active',
      progress: 75,
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Business Ethics',
      code: 'BUS240',
      instructor: 'Dr. James Wilson',
      department: 'Business',
      credits: 3,
      students: 38,
      schedule: 'Tue, Thu 1:00 PM - 2:30 PM',
      location: 'Room 105, Business Building',
      status: 'active',
      progress: 60,
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Structural Analysis',
      code: 'ENG201',
      instructor: 'Dr. Maria Garcia',
      department: 'Engineering',
      credits: 4,
      students: 32,
      schedule: 'Mon, Wed 2:00 PM - 4:00 PM',
      location: 'Room 201, Engineering Building',
      status: 'active',
      progress: 50,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      title: 'Art History',
      code: 'ART150',
      instructor: 'Dr. Sarah Chen',
      department: 'Arts',
      credits: 3,
      students: 40,
      schedule: 'Tue, Thu 10:00 AM - 11:30 AM',
      location: 'Room 101, Arts Building',
      status: 'active',
      progress: 80,
      image: 'https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      title: 'Advanced Algorithms',
      code: 'CS301',
      instructor: 'Dr. Michael Johnson',
      department: 'Computer Science',
      credits: 4,
      students: 25,
      schedule: 'Mon, Wed, Fri 1:00 PM - 2:30 PM',
      location: 'Room 305, Tech Building',
      status: 'upcoming',
      progress: 0,
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      title: 'Thermodynamics',
      code: 'ENG302',
      instructor: 'Dr. Emily Brown',
      department: 'Engineering',
      credits: 4,
      students: 30,
      schedule: 'Tue, Thu 2:00 PM - 4:00 PM',
      location: 'Room 202, Engineering Building',
      status: 'completed',
      progress: 100,
      image: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Course
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
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === 'grid'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === 'list'
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                List
              </button>
            </div>
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

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="col-span-full bg-white p-6 rounded-lg shadow text-center text-gray-500">
            No courses found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;