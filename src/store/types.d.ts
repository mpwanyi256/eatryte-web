import { RoleCode, BusinessCategory, BusinessType } from "@/store/enum";

export default interface Role {
  _id: string;
  code: string;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  photoURL?: string | null;
}

export interface User {
  _id: string;
  email: string;
  emailVerified: boolean;
  profile: UserProfile;
  password: string;
  roles: Role[];
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  profilePictureURL?: string;
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

export interface Country {
  _id: string;
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
  vatPercentageRate: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
