import { Product, Customer } from "../src/types/order";

export const testProducts: Record<string, Product> = {
  LAPTOP001: { id: "LAPTOP001", price: 999.99, name: "Gaming Laptop" },
  MOUSE002: { id: "MOUSE002", price: 49.99, name: "Wireless Mouse" },
  KEYBOARD003: {
    id: "KEYBOARD003",
    price: 129.99,
    name: "Mechanical Keyboard",
  },
};

export const testCustomers: Record<string, Customer> = {
  regular: {
    id: "CUST001",
    type: "regular",
    email: "john@example.com",
    state: "CA",
  },
  premium: {
    id: "CUST002",
    type: "premium",
    email: "jane@example.com",
    state: "NY",
  },
};

export const taxRates: Record<string, number> = {
  CA: 0.0875, // 8.75%
  NY: 0.08, // 8.00%
  TX: 0.0625, // 6.25%
};

export const shippingCosts = {
  standard: 9.99,
  free: 0.0,
} as const;
