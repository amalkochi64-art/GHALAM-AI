import { Products } from "./product-kb";
import { PricingRules } from "./pricing-kb";
import { FAQs } from "./faq-kb";
import { SalesRules } from "./sales-kb";

export class KnowledgeEngine {
  getProducts() {
    return Products;
  }

  getPricing() {
    return PricingRules;
  }

  getFAQs() {
    return FAQs;
  }

  getSalesRules() {
    return SalesRules;
  }
}