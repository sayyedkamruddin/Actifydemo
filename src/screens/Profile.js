import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PersonalDetailsForm = () => {
  const [activeTab, setActiveTab] = useState("Personal");
  const tabs = ["Personal", "Education", "Experience", "Other"];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pinCode: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };
  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  return (
    <div className="ma-w-4xl mxauto p-4 bg-gray-50 pt-20 items-center ">
      {/* <div className=" flexwrap gap-2 mb-6 bg-[#E2E0E1] inline-flex rounded-lg p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            // onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab
                ? "bg-white shadow-sm font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div> */}

      <div className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
        <p className="text-white/90 flex flex-row flex-wrap">
          <span>Make changes to your Profile Account here.</span>
          <span className="bg-red-600 p-1 rounded-lg">
            Click save when you're done.
          </span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg p-6 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "Minimum 2 characters" },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 
                ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Middle Name
            </label>
            <input
              {...register("middleName")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Middle Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 2, message: "Minimum 2 characters" },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email Address"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "Please enter a complete address",
              },
            })}
            placeholder="Type your address here."
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]
              ${errors.address ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pin Code <span className="text-red-500">*</span>
            </label>
            <input
              {...register("pinCode", {
                required: "Pin code is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Please enter a valid 6-digit pin code",
                },
              })}
              placeholder="Pin Code"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.pinCode ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.pinCode && (
              <p className="mt-1 text-sm text-red-500">
                {errors.pinCode.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              {...register("country", { required: "Country is required" })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.country ? "border-red-500" : "border-gray-300"}`}
              placeholder="Country"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-500">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <input
              {...register("state", { required: "State is required" })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.state ? "border-red-500" : "border-gray-300"}`}
              placeholder="State"
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-500">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              {...register("city", { required: "City is required" })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500
                ${errors.city ? "border-red-500" : "border-gray-300"}`}
              placeholder="City"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-6 py-2 ${
              isValid ? "bg-purple-600" : "bg-gray-400"
            } text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
