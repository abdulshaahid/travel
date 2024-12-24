export interface TravelPackage {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  description: string;
  type: string;
}

export interface NavigationItem {
  label: string;
  icon: string;
  path: string;
}