import React from 'react';
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StatsCard from '../AdminComponents/StatsCard';
import RecentActivityCard from '../AdminComponents/RecentActivityCard';

const Dashboard = () => {
  const stats = [
    { 
      id: 1, 
      name: 'Total Students', 
      value: '2,345', 
      change: '+12%', 
      trend: 'up',
      icon: GraduationCap, 
      color: 'bg-blue-500' 
    },
    { 
      id: 2, 
      name: 'Total Teachers', 
      value: '122', 
      change: '+5%', 
      trend: 'up',
      icon: Users, 
      color: 'bg-indigo-500' 
    },
    { 
      id: 3, 
      name: 'Active Courses', 
      value: '48', 
      change: '+8%', 
      trend: 'up',
      icon: BookOpen, 
      color: 'bg-emerald-500' 
    },
    { 
      id: 4, 
      name: 'Certifications', 
      value: '957', 
      change: '+18%', 
      trend: 'up',
      icon: Award, 
      color: 'bg-amber-500' 
    },
  ];

  const courseDistribution = [
    { name: 'Computer Science', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Engineering', value: 20 },
    { name: 'Arts', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 120 },
    { month: 'Feb', students: 150 },
    { month: 'Mar', students: 180 },
    { month: 'Apr', students: 220 },
    { month: 'May', students: 250 },
    { month: 'Jun', students: 300 },
  ];

  const COLORS = ['#3b82f6', '#6366f1', '#10b981', '#f59e0b', '#f43f5e'];

  const activities = [
    { 
      id: 1, 
      title: 'New Student Enrollment',
      description: 'John Smith enrolled in Computer Science course',
      time: '15 minutes ago',
      type: 'enrollment'
    },
    { 
      id: 2, 
      title: 'Assignment Submitted',
      description: 'Sarah Johnson submitted Database Design assignment',
      time: '2 hours ago',
      type: 'assignment'
    },
    { 
      id: 3, 
      title: 'New Course Added',
      description: 'Prof. Williams added a new course: Advanced Machine Learning',
      time: '5 hours ago',
      type: 'course'
    },
    { 
      id: 4, 
      title: 'Certification Completed',
      description: 'Michael Brown completed Web Development certification',
      time: '1 day ago',
      type: 'certification'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-150">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {courseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Student Enrollment Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={enrollmentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <RecentActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">
            View all activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;