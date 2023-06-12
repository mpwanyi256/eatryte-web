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
  type: import("./types").UserType;
}

export interface UpdateProfilePayload {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
}
