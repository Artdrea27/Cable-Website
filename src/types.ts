
export interface Plan {
  id: string;
  name: string;
  speed: string;
  price: string;
  features: string[];
  isInternetOnly: boolean;
}

export interface Channel {
  name: string;
  color: string;
  image?: string;
  icon?: string;
}

export interface CoverageArea {
  city: string;
  barangays: string[];
}
