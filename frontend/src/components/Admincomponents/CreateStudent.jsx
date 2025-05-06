import { useState, useEffect } from 'react';
import { X, UserPlus, User, Mail, Lock } from 'lucide-react';

const CreateStudent = ({ isOpen, onClose, onAdd, editMode, studentData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    handleClose();
    setFormData(" ")
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 300);
  };

  useEffect(() => {
    if(editMode && studentData) {
        setFormData(studentData)
    }
  }, [editMode, studentData])

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isAnimating ? 'bg-black bg-opacity-50' : 'bg-opacity-0'}`}>
      <div 
        className={`relative transform transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} w-full max-w-md mx-4`}
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Add New Student</h2>
            </div>
            <button 
              onClick={handleClose}
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name Field */}
            <div className="space-y-1">
              <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700">
                <User className="h-4 w-4 mr-2 text-indigo-600" />
                Full Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-indigo-600" />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-700">
                <Lock className="h-4 w-4 mr-2 text-indigo-600" />
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>

            {/* Role Field (hidden since default is student) */}
            <input type="hidden" name="role" value="student" />

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors flex items-center"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;