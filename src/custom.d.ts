declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export default value
}

// Interface of customer.json received by the API
export interface CustomerData {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  birthday: string;
  email: string;
  phone: string;
  city: string;
}

// Interface of customer data used in the DataGrid
export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  status: string;
  birthday: string;
}

export interface CardProps {
  title: string;
  subtitle: string;
  description: string;
}
