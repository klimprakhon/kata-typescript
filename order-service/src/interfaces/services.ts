import {
  AuditEventDetails,
  AuditEventType,
  OrderItem,
  PaymentInfo,
  PaymentResult,
} from "../types/order";

export interface InventoryService {
  checkAvailability(productId: string, quantity: number): boolean;
  reserveItems(items: OrderItem[]): Promise<boolean>;
  releaseItems(items: OrderItem[]): Promise<boolean>;
}

export interface PaymentGateway {
  processPayment(
    amount: number,
    paymentInfo: PaymentInfo,
    orderDetails: { orderId: string; customerId: string }
  ): Promise<PaymentResult>;
}

export interface EmailService {
  sendOrderConfirmation(
    email: string,
    orderDetails: OrderConfirmationDetails
  ): Promise<boolean>;
}

export interface AuditLogger {
  logEvent(eventType: AuditEventType, details: AuditEventDetails): void;
}

export interface TaxCalculator {
  calculateTax(amount: number, state: string): number;
}

export interface OrderConfirmationDetails {
  orderId: string;
  customerName: string;
  items: Array<OrderItem & { total: number }>;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  transactionId: string;
}
