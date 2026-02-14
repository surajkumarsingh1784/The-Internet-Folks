"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ActivityDetailsFormData } from "@/types/form";

interface ActivityDetailsFormProps {
  form: UseFormReturn<ActivityDetailsFormData>;
  onNext: (data: ActivityDetailsFormData) => void;
}

const ActivityDetailsForm: React.FC<ActivityDetailsFormProps> = ({
  form,
  onNext,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const categories = [
    "Museums & Classes",
    "Adventure & Sports",
    "Food & Drink",
    "Learning & Development",
    "Sports and Fitness",
    "Volunteering",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <h2 className="text-xl font-semibold text-primary mb-6">
        Activity Details
      </h2>

      {/* Activity Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Activity Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("activityName")}
          type="text"
          placeholder="Ex: Cooking class in New Arts"
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all ${
            errors.activityName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.activityName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.activityName.message}
          </p>
        )}
      </div>

      {/* Category Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select the best category to describe your activity{" "}
          <span className="text-red-500">*</span>
        </label>
        <select
          {...register("category")}
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all appearance-none bg-white ${
            errors.category ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Activity Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Please select the activity type <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {["Indoor", "Outdoor", "Virtual"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input
                {...register("activityType")}
                type="radio"
                value={type}
                className="w-4 h-4 text-accent focus:ring-accent"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
        {errors.activityType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.activityType.message}
          </p>
        )}
      </div>

      {/* Location Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Please select the type of location <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {["Popular Location", "User Location"].map((loc) => (
            <label key={loc} className="flex items-center gap-3 cursor-pointer">
              <input
                {...register("location")}
                type="radio"
                value={loc}
                className="w-4 h-4 text-accent focus:ring-accent"
              />
              <span className="text-gray-700">{loc}</span>
            </label>
          ))}
        </div>
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
        )}
      </div>

      {/* About Activity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          About the Activity
        </label>
        <textarea
          {...register("aboutActivity")}
          rows={3}
          placeholder="Describe your activity..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
        />
      </div>

      {/* Activity Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Activity Description
        </label>
        <textarea
          {...register("activityDescription")}
          rows={4}
          placeholder="Provide detailed description..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
        />
      </div>

      {/* Member Range */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Members
          </label>
          <input
            {...register("minMembers")}
            type="number"
            placeholder="Min"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Members
          </label>
          <input
            {...register("maxMembers")}
            type="number"
            placeholder="Max"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default ActivityDetailsForm;
