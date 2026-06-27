export class CustomerBrain {

  private customers: Map<string, any>;

  constructor() {
    this.customers = new Map();
  }


  remember(
    customerId: string,
    data: any
  ) {

    this.customers.set(
      customerId,
      data
    );

    return {
      success: true,
      customerId
    };
  }


  recall(
    customerId: string
  ) {

    return (
      this.customers.get(customerId)
      || null
    );
  }


  analyze(
    customerId: string
  ) {

    const customer =
      this.recall(customerId);


    if (!customer) {
      return {
        status: "UNKNOWN",
        message:
          "Customer profile not found"
      };
    }


    return {
      status: "ACTIVE",
      customer
    };
  }
}