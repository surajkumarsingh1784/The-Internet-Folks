import { z } from "zod";

// Activity Details Schema
export const activityDetailsSchema = z.object({
  activityName: z
    .string()
    .min(1, "Activity name is required")
    .min(3, "Activity name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  activityType: z.string().min(1, "Please select an activity type"),
  location: z.string().min(1, "Please select a location type"),
  aboutActivity: z.string().optional(),
  activityDescription: z.string().optional(),
  minMembers: z.string().optional(),
  maxMembers: z.string().optional(),
});

// Location Details Schema
export const locationDetailsSchema = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  zipCode: z
    .string()
    .min(1, "ZIP code is required")
    .regex(/^\d{6}$/, "ZIP code must be 6 digits"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^\d{10}$/, "Contact number must be 10 digits"),
  contactName: z.string().min(1, "Contact name is required"),
});

// Complete Form Data Type
export type ActivityDetailsFormData = z.infer<typeof activityDetailsSchema>;
export type LocationDetailsFormData = z.infer<typeof locationDetailsSchema>;

export interface CompleteFormData {
  activityDetails: ActivityDetailsFormData;
  locationDetails: LocationDetailsFormData;
}
