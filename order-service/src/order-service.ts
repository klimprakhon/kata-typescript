import { Order, Customer, OrderTotal } from "./types/Order";
import {
  AuditLogger,
  EmailService,
  InventoryService,
  PaymentGateway,
  TaxCalculator,
} from "./interfaces/services";

export class OrderService {
  inventoryService: InventoryService;
  paymentGateway: PaymentGateway;
  emailService: EmailService;
  auditLogger: AuditLogger;
  taxCalculator: TaxCalculator;

  constructor(
    inventoryService: InventoryService,
    paymentGateway: PaymentGateway,
    emailService: EmailService,
    auditLogger: AuditLogger,
    taxCalculator: TaxCalculator
  ) {
    this.inventoryService = inventoryService;
    this.paymentGateway = paymentGateway;
    this.emailService = emailService;
    this.auditLogger = auditLogger;
    this.taxCalculator = taxCalculator;
  }

  calculateOrderTotal(order: Order, customer: Customer): OrderTotal {
    const subtotal = order.items.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );

    const discount = customer.type === "premium" ? subtotal * 0.1 : 0.0;

    const discountedSubtotal = subtotal - discount;
    const shipping = discountedSubtotal > 100 ? 0.0 : 9.99;

    const tax = this.taxCalculator.calculateTax(
      discountedSubtotal,
      customer.state
    );

    const total = discountedSubtotal + tax;

    return {
      subtotal: subtotal,
      discount: discount,
      shipping: shipping,
      tax: tax,
      total: total,
    };
  }
}
