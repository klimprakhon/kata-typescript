import { OrderService } from "../src/order-service";
import { InventoryService, TaxCalculator } from "../src/interfaces/services";
import { Order, Customer, OrderTotal } from "../src/types/order";
import { testCustomers } from "./test-data";

describe("OrderService - Stubs", () => {
  it("should calculate correct total for regular customer with CA tax", () => {
    // Arrange
    let orderService: OrderService;
    let inventoryServiceStub: jest.Mocked<InventoryService>;
    let taxCalculatorStub: jest.Mocked<TaxCalculator>;

    inventoryServiceStub = {
      checkAvailability: jest.fn(),
      reserveItems: jest.fn(),
      releaseItems: jest.fn(),
    };

    taxCalculatorStub = {
      calculateTax: jest.fn(),
    };

    orderService = new OrderService(
      inventoryServiceStub,
      null as any, // paymentGateway not needed for Part 1
      null as any, // emailService not needed for Part 1
      null as any, // auditLogger not needed for Part 1
      taxCalculatorStub
    );

    const order: Order = {
      id: "ORD001",
      items: [
        { productId: "LAPTOP001", quantity: 1, price: 999.99 },
        { productId: "MOUSE002", quantity: 1, price: 49.99 },
      ],
    };
    const customer: Customer = testCustomers.regular; // CA customer

    // Stub external dependencies
    inventoryServiceStub.checkAvailability.mockReturnValue(true);
    taxCalculatorStub.calculateTax.mockReturnValue(91.37); // 8.75% of $1,049.98

    // Act
    const result: OrderTotal = orderService.calculateOrderTotal(
      order,
      customer
    );

    // Assert - Expected: $999.99 + $49.99 + $0.00 shipping + $91.37 tax = $1,141.35
    expect(result.subtotal).toBe(1049.98);
    expect(result.discount).toBe(0.0);
    expect(result.shipping).toBe(0.0); // Free shipping over $100
    expect(result.tax).toBe(91.37);
    expect(result.total).toBe(1141.35);
    expect(taxCalculatorStub.calculateTax).toHaveBeenCalledWith(1049.98, "CA");
  });
});
