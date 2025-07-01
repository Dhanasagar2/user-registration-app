// 📁 src/components/InputField.js
const InputField = ({
  id,
  label,
  required = false,
  type = "text",
  inputRef,
  error,
  placeholder = "",
  max,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-1 text-xl">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        ref={inputRef}
        type={type}
        placeholder={placeholder || `Enter Your ${label}`}
        max={max}
        className={`w-full border p-3 rounded-md text-lg ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
