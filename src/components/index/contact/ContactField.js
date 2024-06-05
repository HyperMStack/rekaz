export function ContactField({ id, label, icon, placeholder }) {
  return (
    <div className="mb-2 md:mb-4 w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-0 md:mt-1 flex rounded-md shadow-sm lg:mt-2">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
            {icon}
          </div>
          <input
            type="text"
            name={id}
            id={id}
            className="w-full rounded-md ps-10 py-2 border border-gray-300 outline-2 outline-sky-600"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}
