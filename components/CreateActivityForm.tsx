"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  activityDetailsSchema,
  locationDetailsSchema,
  type ActivityDetailsFormData,
  type LocationDetailsFormData,
  type CompleteFormData,
} from "@/types/form";
import Header from "./Header";
import TabNavigation from "./TabNavigation";
import ActivityDetailsForm from "./forms/ActivityDetailsForm";
import LocationDetailsForm from "./forms/LocationDetailsForm";
import SuccessModal from "./SuccessModal";

type Tab = "activity" | "location";

const CreateActivityForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("activity");
  const [completedTabs, setCompletedTabs] = useState<Set<Tab>>(new Set());
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<Partial<CompleteFormData>>({});

  // Activity Details Form
  const activityForm = useForm<ActivityDetailsFormData>({
    resolver: zodResolver(activityDetailsSchema),
    mode: "onChange",
    defaultValues: formData.activityDetails || {},
  });

  // Location Details Form
  const locationForm = useForm<LocationDetailsFormData>({
    resolver: zodResolver(locationDetailsSchema),
    mode: "onChange",
    defaultValues: formData.locationDetails || {},
  });

  const handleActivityNext = (data: ActivityDetailsFormData) => {
    setFormData((prev) => ({ ...prev, activityDetails: data }));
    setCompletedTabs((prev) => new Set(prev).add("activity"));
    setActiveTab("location");
  };

  const handleLocationSubmit = (data: LocationDetailsFormData) => {
    const completeData: CompleteFormData = {
      activityDetails: formData.activityDetails!,
      locationDetails: data,
    };

    // Console log as per requirement
    console.log("Form Data:", completeData);

    // Show success modal
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    
    // Reset all form data
    activityForm.reset({});
    locationForm.reset({});
    setFormData({});
    setCompletedTabs(new Set());
    setActiveTab("activity");
  };

  const canNavigateToLocation = completedTabs.has("activity");

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Header />
        
        <div className="bg-white rounded-lg shadow-sm mt-6">
          <TabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
            canNavigateToLocation={canNavigateToLocation}
          />

          <div className="p-8">
            {activeTab === "activity" && (
              <ActivityDetailsForm
                form={activityForm}
                onNext={handleActivityNext}
              />
            )}

            {activeTab === "location" && (
              <LocationDetailsForm
                form={locationForm}
                onSubmit={handleLocationSubmit}
                onPrevious={() => setActiveTab("activity")}
              />
            )}
          </div>
        </div>
      </div>

      {showSuccessModal && <SuccessModal onClose={handleModalClose} />}
    </>
  );
};

export default CreateActivityForm;
