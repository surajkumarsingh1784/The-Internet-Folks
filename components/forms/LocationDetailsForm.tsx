"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { LocationDetailsFormData } from "@/types/form";

interface LocationDetailsFormProps {
  form: UseFormReturn<LocationDetailsFormData>;
  onSubmit: (data: LocationDetailsFormData) => void;
  onPrevious: () => void;
}

const LocationDetailsForm: React.FC<LocationDetailsFormProps> = ({
  form,
  onSubmit,
  onPrevious,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold text-primary mb-6">
        Location Details
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Please specify the address for where this activity takes place
      </p>

      {/* Address Line 1 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address Line 1 <span className="text-red-500">*</span>
        </label>
        <input
          {...register("addressLine1")}
          type="text"
          placeholder="House number and street name"
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
            errors.addressLine1 ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.addressLine1 && (
          <p className="mt-1 text-sm text-red-500">
            {errors.addressLine1.message}
          </p>
        )}
      </div>

      {/* Address Line 2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address Line 2
        </label>
        <input
          {...register("addressLine2")}
          type="text"
          placeholder="Apartment, building name, landmark, etc."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
        />
      </div>

      {/* ZIP Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ZIP Code <span className="text-red-500">*</span>
        </label>
        <input
          {...register("zipCode")}
          type="text"
          placeholder="eg: 123 456"
          maxLength={6}
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
            errors.zipCode ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.zipCode && (
          <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
        )}
      </div>

      {/* City and State */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <input
            {...register("city")}
            type="text"
            placeholder="Your City"
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State <span className="text-red-500">*</span>
          </label>
          <select
            {...register("state")}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none bg-white ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Your State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Contact details
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Please provide contact information for this activity
        </p>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-gray-700">+91</span>
            </div>
            <input
              {...register("contactNumber")}
              type="tel"
              placeholder="Contact Number"
              maxLength={10}
              className={`flex-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
                errors.contactNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.contactNumber && (
            <p className="mt-1 text-sm text-red-500">
              {errors.contactNumber.message}
            </p>
          )}
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("contactName")}
            type="text"
            placeholder="Contact Name"
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
              errors.contactName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.contactName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.contactName.message}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-gray-50 transition-all"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LocationDetailsForm;
