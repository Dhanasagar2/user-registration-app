// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// const Userdetails = () => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const firstname = useRef();
//   const middlename = useRef();
//   const lastname = useRef();
//   const mobilenumber = useRef();
//   const gmail = useRef();
//   const age = useRef();
//   const gender = useRef();
//   const address = useRef();
//   const password = useRef();
//   const confirmPassword = useRef();

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let fieldErrors = {};
//     //custom validations

//     const nameRegex = /^[A-Za-z]{2,10}$/;
//     const mobileRegex = /^[6-9]\d{9}$/;
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const addressRegex = /^[A-Za-z0-9\s,.\-\/#:]{10,}$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

//     if (!firstname.current.value.trim()) {
//       fieldErrors.firstname = "First Name is required.";
//     } else if (!nameRegex.test(firstname.current.value.trim())) {
//       fieldErrors.firstname =
//         "Only letters A-Z allowed. Length must be 2 to 10 characters.";
//     }

//     if (!lastname.current.value.trim()) {
//       fieldErrors.lastname = "Last Name is required.";
//     } else if (!nameRegex.test(lastname.current.value.trim())) {
//       fieldErrors.lastname =
//         "Only letters A-Z allowed. Length must be 2 to 10 characters.";
//     }

//     if (!mobilenumber.current.value.trim()) {
//       fieldErrors.mobilenumber = "Mobile number is required.";
//     } else if (!mobileRegex.test(mobilenumber.current.value.trim())) {
//       fieldErrors.mobilenumber =
//         "Enter a valid 10-digit number starting with 6-9.";
//     }

//     if (!gmail.current.value.trim()) {
//       fieldErrors.gmail = "Gmail is required.";
//     } else if (!emailRegex.test(gmail.current.value.trim())) {
//       fieldErrors.gmail = "Please enter a valid email address.";
//     }

//     if (!age.current.value.trim()) {
//       fieldErrors.age = "Age is required.";
//     }

//     if (!gender.current.value.trim()) {
//       fieldErrors.gender = "Gender is required.";
//     } else if (
//       !["male", "female", "other"].includes(
//         gender.current.value.trim().toLowerCase()
//       )
//     ) {
//       fieldErrors.gender = "Invalid gender selected.";
//     }

//     if (address.current.value.trim().length < 10) {
//       fieldErrors.address =
//         "Address is required and must be at least 10 characters.";
//     } else if (!addressRegex.test(address.current.value.trim())) {
//       fieldErrors.address =
//         " Address must contain only letters, numbers, spaces, and ,.-/# characters.";
//     }

//     if (!password.current.value.trim()) {
//       fieldErrors.password = "Password is required.";
//     } else if (!passwordRegex.test(password.current.value.trim())) {
//       fieldErrors.password =
//         "Password must contain at least 8 characters with uppercase, lowercase, number, and special character.";
//     }

//     if (!confirmPassword.current.value.trim()) {
//       fieldErrors.confirmPassword = "Confirm password is required.";
//     } else if (
//       password.current.value.trim() &&
//       confirmPassword.current.value.trim() !== password.current.value.trim()
//     ) {
//       fieldErrors.confirmPassword = "Passwords do not match.";
//     }

//     if (age.current.value.trim()) {
//       const userAge = calculateAge(age.current.value.trim());
//       if (userAge <= 0 || userAge > 120) {
//         fieldErrors.age =
//           "Please enter a valid date of birth that results in age between 1 and 120.";
//       }
//     }

//     if (Object.keys(fieldErrors).length > 0) {
//       setErrors(fieldErrors);
//       return;
//     }

//     setErrors({});

//     const userData = {
//       firstName: firstname.current.value,
//       middleName: middlename.current.value,
//       lastName: lastname.current.value,
//       mobileNumber: mobilenumber.current.value,
//       email: gmail.current.value,
//       dob: age.current.value,
//       gender: gender.current.value,
//       address: address.current.value,
//       password: password.current.value,
//     };

//     console.log("User Data Submitted:", userData);

//     alert("Form Submitted Successfully");

//     navigate("/browse");
//   };

//   return (
//     <div className="h-screen bg-gradient-to-br from-purple-300 to-pink-200  overflow-hidden px-4 pt-12 pb-20">
//       <div className="flex justify-center items-start px-10 pt-12 pb-20">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//           noValidate
//         >
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             User Registration
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* First Name */}
//             <div>
//               <label
//                 className="block font-medium mb-1 text-xl"
//                 htmlFor="firstname"
//               >
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="firstname"
//                 ref={firstname}
//                 type="text"
//                 placeholder="Enter Your First Name"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.firstname ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.firstname && (
//                 <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
//               )}
//             </div>

//             {/* Middle Name */}
//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Middle Name{" "}
//               </label>
//               <input
//                 id="middlename"
//                 ref={middlename}
//                 type="text"
//                 placeholder="Enter Your Middle Name"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.middlename ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="lastname"
//                 ref={lastname}
//                 type="text"
//                 placeholder="Enter Your Last Name"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.lastname ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.lastname && (
//                 <p className="text-red-500 text-sm">{errors.lastname}</p>
//               )}
//             </div>

//             {/* Mobile Number */}
//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Mobile Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="mobile"
//                 ref={mobilenumber}
//                 type="tel"
//                 placeholder="Enter Your Mobile Number"
//                 maxLength="10"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.mobilenumber ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.mobilenumber && (
//                 <p className="text-red-500 text-sm">{errors.mobilenumber}</p>
//               )}
//             </div>

//             {/* Gmail */}
//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Gmail <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="gmail"
//                 ref={gmail}
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.gmail ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.gmail && (
//                 <p className="text-red-500 text-sm">{errors.gmail}</p>
//               )}
//             </div>

//             {/* Age */}
//             <div>
//               <label className="block font-medium mb-1 text-xl" htmlFor="dob">
//                 Date of Birth <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="dob"
//                 ref={age}
//                 type="date"
//                 max={new Date().toISOString().split("T")[0]}
//                 placeholder="dd-mm-yyyy"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.age ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.age && (
//                 <p className="text-red-500 text-sm">{errors.age}</p>
//               )}
//             </div>

//             {/* Gender (full width) */}
//             <div className="md:col-span-2">
//               <label className="block font-medium mb-1 text-xl">
//                 Gender <span className="text-red-500">*</span>
//               </label>
//               <select
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.gender ? "border-red-500" : "border-gray-300"
//                 }`}
//                 ref={gender}
//               >
//                 <option value="">-- Select Gender --</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               {errors.gender && (
//                 <p className="text-red-500 text-sm">{errors.gender}</p>
//               )}
//             </div>

//             {/* Address (full width) */}
//             <div className="md:col-span-2">
//               <label htmlFor="address">
//                 {" "}
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="address"
//                 ref={address}
//                 type="text"
//                 placeholder="Enter Your Address"
//                 className={`w-full border p-3 rounded-md text-lg ${
//                   errors.address ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.address && (
//                 <p className="text-red-500 text-sm">{errors.address}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   ref={password}
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter Your Password"
//                   className={`w-full border p-3 rounded-md text-lg ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-3 text-gray-600"
//                   aria-label="Toggle Password Visibility"
//                 >
//                   {showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>

//             {/* Confirm Password */}

//             <div>
//               <label className="block font-medium mb-1 text-xl">
//                 Confirm Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   id="confirmPassword"
//                   ref={confirmPassword}
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Re-enter Your Password"
//                   className={`w-full border p-3 rounded-md text-lg ${
//                     errors.confirmPassword
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword((prev) => !prev)}
//                   className="absolute right-3 top-3 text-gray-600"
//                   aria-label="Toggle Confirm Password Visibility"
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff size={30} />
//                   ) : (
//                     <Eye size={30} />
//                   )}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
//             <button
//               type="button"
//               onClick={() => navigate(0)} // ✅ This will refresh the current route
//               className=" w-full md:w-1/2 bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-700 text-xl"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-xl"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Userdetails;
