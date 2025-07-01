// 📁 src/components/SelectField.js
const SelectField = ({ label, required = false, inputRef, error }) => {
  return (
    <div className="md:col-span-2">
      <label className="block font-medium mb-1 text-xl">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        ref={inputRef}
        className={`w-full border p-3 rounded-md text-lg ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">-- Select {label} --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
