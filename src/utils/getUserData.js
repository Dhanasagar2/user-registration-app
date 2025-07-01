// 📁 src/utils/getUserData.js
const getInputValue = (ref) => ref?.current?.value.trim() || "";

const getUserData = (refs) => {
  return {
    firstName: getInputValue(refs.firstname),
    middleName: getInputValue(refs.middlename),
    lastName: getInputValue(refs.lastname),
    mobileNumber: getInputValue(refs.mobilenumber),
    email: getInputValue(refs.gmail),
    dob: getInputValue(refs.age),
    gender: getInputValue(refs.gender),
    address: getInputValue(refs.address),
    password: getInputValue(refs.password),
  };
};

export default getUserData;
