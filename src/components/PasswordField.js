// 📁 src/components/PasswordField.js
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({
  id,
  label,
  required = false,
  inputRef,
  error,
  show,
  toggleShow,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-1 text-xl">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          ref={inputRef}
          type={show ? "text" : "password"}
          placeholder={`Enter Your ${label}`}
          className={`w-full border p-3 rounded-md text-lg ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={toggleShow}
          className="absolute right-3 top-3 text-gray-600"
          aria-label={`Toggle ${label} Visibility`}
        >
          {show ? <EyeOff size={30} /> : <Eye size={30} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordField;
