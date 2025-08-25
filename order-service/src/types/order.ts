export interface Product {
  id: string;
  price: number;
  name: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
}

export interface Customer {
  id: string;
  type: "regular" | "premium";
  email: string;
  state: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cvv: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export type OrderTotal = {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
};

export interface OrderResult {
  success: boolean;
  orderId: string;
  total: number;
  transactionId: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
}

export type AuditEventType =
  | "ORDER_CREATED"
  | "INVENTORY_RESERVED"
  | "PAYMENT_PROCESSED"
  | "ORDER_COMPLETED"
  | "PAYMENT_FAILED"
  | "INVENTORY_RELEASED"
  | "ORDER_CANCELLED"
  | "EMAIL_FAILED";

export interface AuditEventDetails {
  orderId: string;
  [key: string]: any;
}
