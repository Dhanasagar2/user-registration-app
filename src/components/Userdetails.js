// 📁 src/components/Userdetails.js
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SelectField from "./SelectField";
import getUserData from "../utils/getUserData";

const Userdetails = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const firstname = useRef();
  const middlename = useRef();
  const lastname = useRef();
  const mobilenumber = useRef();
  const gmail = useRef();
  const age = useRef();
  const gender = useRef();
  const address = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fieldErrors = {};

    const nameRegex = /^[A-Za-z]{2,10}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^[A-Za-z0-9\s,./#:-]{10,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!firstname.current.value.trim()) {
      fieldErrors.firstname = "First Name is required.";
    } else if (!nameRegex.test(firstname.current.value.trim())) {
      fieldErrors.firstname =
        "Only letters A-Z allowed. Length must be 2 to 10 characters.";
    }

    if (!lastname.current.value.trim()) {
      fieldErrors.lastname = "Last Name is required.";
    } else if (!nameRegex.test(lastname.current.value.trim())) {
      fieldErrors.lastname =
        "Only letters A-Z allowed. Length must be 2 to 10 characters.";
    }

    if (!mobilenumber.current.value.trim()) {
      fieldErrors.mobilenumber = "Mobile number is required.";
    } else if (!mobileRegex.test(mobilenumber.current.value.trim())) {
      fieldErrors.mobilenumber =
        "Enter a valid 10-digit number starting with 6-9.";
    }

    if (!gmail.current.value.trim()) {
      fieldErrors.gmail = "Gmail is required.";
    } else if (!emailRegex.test(gmail.current.value.trim())) {
      fieldErrors.gmail = "Please enter a valid email address.";
    }

    if (!age.current.value.trim()) {
      fieldErrors.age = "Age is required.";
    } else {
      const userAge = calculateAge(age.current.value.trim());
      if (userAge <= 0 || userAge > 120) {
        fieldErrors.age =
          "Please enter a valid date of birth that results in age between 1 and 120.";
      }
    }

    if (!gender.current.value.trim()) {
      fieldErrors.gender = "Gender is required.";
    } else if (
      !["male", "female", "other"].includes(
        gender.current.value.trim().toLowerCase()
      )
    ) {
      fieldErrors.gender = "Invalid gender selected.";
    }

    if (address.current.value.trim().length < 10) {
      fieldErrors.address =
        "Address is required and must be at least 10 characters.";
    } else if (!addressRegex.test(address.current.value.trim())) {
      fieldErrors.address =
        "Address must contain only letters, numbers, spaces, and ,.-/# characters.";
    }

    if (!password.current.value.trim()) {
      fieldErrors.password = "Password is required.";
    } else if (!passwordRegex.test(password.current.value.trim())) {
      fieldErrors.password =
        "Password must contain at least 8 characters with uppercase, lowercase, number, and special character.";
    }

    if (!confirmPassword.current.value.trim()) {
      fieldErrors.confirmPassword = "Confirm password is required.";
    } else if (
      confirmPassword.current.value.trim() !== password.current.value.trim()
    ) {
      fieldErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const userData = getUserData({
      firstname,
      middlename,
      lastname,
      mobilenumber,
      gmail,
      age,
      gender,
      address,
      password,
    });

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("users")) || [];

    // Add new data
    const updatedData = [...existingData, userData];

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedData));

    console.log("User Data Submitted:", userData);

    alert("Form Submitted Successfully");
    navigate("/browse");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-300 to-pink-200 overflow-hidden px-4 pt-12 pb-20">
      <div className="flex justify-center items-start px-10 pt-12 pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          noValidate
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            User Registration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              id="firstname"
              label="First Name"
              required
              inputRef={firstname}
              error={errors.firstname}
            />
            <InputField
              id="middlename"
              label="Middle Name"
              inputRef={middlename}
            />
            <InputField
              id="lastname"
              label="Last Name"
              required
              inputRef={lastname}
              error={errors.lastname}
            />
            <InputField
              id="mobile"
              label="Mobile Number"
              required
              inputRef={mobilenumber}
              error={errors.mobilenumber}
              maxLength={10}
              type="tel"
            />
            <InputField
              id="gmail"
              label="Gmail"
              required
              inputRef={gmail}
              error={errors.gmail}
              type="email"
            />
            <InputField
              id="dob"
              label="Date of Birth"
              required
              inputRef={age}
              error={errors.age}
              type="date"
              max={new Date().toISOString().split("T")[0]}
            />
            <SelectField
              label="Gender"
              required
              inputRef={gender}
              error={errors.gender}
            />
            <div className="md:col-span-2">
              <InputField
                id="address"
                label="Address"
                required
                inputRef={address}
                error={errors.address}
              />
            </div>
            <PasswordField
              id="password"
              label="Password"
              required
              inputRef={password}
              error={errors.password}
              show={showPassword}
              toggleShow={() => setShowPassword(!showPassword)}
            />
            <PasswordField
              id="confirmPassword"
              label="Confirm Password"
              required
              inputRef={confirmPassword}
              error={errors.confirmPassword}
              show={showConfirmPassword}
              toggleShow={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(0)}
              className="w-full md:w-1/2 bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-700 text-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userdetails;
