import { UserTypes, BusinessCategory, BusinessType } from "@/store/enum";

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  photoURL?: string | null;
}

export interface User {
  id: string;
  email: string | null;
  emailVerified: boolean;
  profile: UserProfile;
  type: UserTypes;
}

export interface UpdateProfilePayload {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
}

export interface createAccountPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

/* Merchant Account */
export interface MerchantAccount {
  id: string;
  isVerified: boolean;
  businessName: string;
  businessType: import("@/store/enum").BusinessType;
  tinNumber: string | null;
  address: string;
  contact: string;
  email: string;
  description: string;
  category: BusinessCategory;
  certificateOfRegistration: string | null;
  identification: string | null;
}

export interface CreateMerchantAccountPayload {
  userId: string;
  businessName: string;
  tinNumber: string | null;
  address: string;
  contact: string;
  email: string;
  description: string;
  businessType: BusinessType;
  certificateOfRegistration?: string | null;
  identification?: string | null;
  isVerified: boolean;
}
/* Merchant Account */
