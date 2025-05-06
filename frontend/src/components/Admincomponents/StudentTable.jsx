import { useState } from "react";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import API from "../../services/api";
import { toastSuccess, toastError } from "../ToastComponent/showToast";

const StudentTable = ({ students, searchTerm, fetchStudents, onEdit }) => {
  const [activeRow, setActiveRow] = useState(null);

  const deleteStudent = async (id) => {
    try {
      const res = await API.delete(`/api/students/${id}`);
      if (res.status === 200) {
        toastSuccess("Student deleted Successfully");
        fetchStudents();
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      toastError(errorMsg);
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-visible relative">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-800 font-medium">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                  {student.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(student.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveRow(
                          activeRow === student._id ? null : student._id
                        )
                      }
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                    {activeRow === student._id && (
                      <div className="origin-top-right fixed right-6 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu">
                          {/* <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Eye className="mr-3 h-4 w-4 text-gray-500" /> View Details
                          </button> */}
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                            onClick={() => onEdit(student)}
                          >
                            <Edit className="mr-3 h-4 w-4 text-blue-500" /> Edit
                          </button>
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                            onClick={() => deleteStudent(student._id)}
                          >
                            <Trash2 className="mr-3 h-4 w-4 text-red-500" />{" "}
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No students found matching your search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
