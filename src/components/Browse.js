// 📁 src/components/Browse.js
import { useEffect, useState } from "react";

const Browse = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Registered Users</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users registered yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-purple-200">
              <tr>
                <th className="py-3 px-6 border">S.No</th>
                <th className="py-3 px-6 border">First Name</th>
                <th className="py-3 px-6 border">Last Name</th>
                <th className="py-3 px-6 border">mobile Number</th>
                <th className="py-3 px-6 border">Email</th>
                <th className="py-3 px-6 border">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{user.firstName}</td>
                  <td className="py-2 px-4 border">{user.lastName}</td>
                  <td className="py-2 px-4 border">{user.mobileNumber}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">
                    {new Date().getFullYear() -
                      new Date(user.dob).getFullYear()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Browse;
