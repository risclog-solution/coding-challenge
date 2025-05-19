import type { CustomerData, Customer } from "./custom";

// Function to map customer data to the format required by the DataGrid
export const mapCustomerToDataGrid = (
  customers: CustomerData[]
): Customer[] => {
  return customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    city:
      customer.city === "berlin"
        ? customer.city + " (Hauptstadt)"
        : customer.city,
    status: customer.status,
    birthday: customer.birthday,
  }));
};
