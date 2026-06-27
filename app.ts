import { CustomerBrain } from "./core/ai-agent/customer-brain";
import { SalesEngine } from "./core/sales-agent/sales-engine";

console.log("🚀 GHALAM AI CORE ONLINE");

const customerBrain = new CustomerBrain();

const salesEngine = new SalesEngine();

console.log({
  system: "GHALAM AI Automation Platform",
  status: "ACTIVE",
  modules: [
    "Customer Brain",
    "Sales Engine",
    "AI Agent"
  ]
});export interface CustomerProfile {
  id: string;
  name: string;
  phone?: string;

  interests: string[];

  purchaseHistory: {
    product: string;
    amount: number;
    date: string;
  }[];

  behaviorScore: number;

  preferredChannel:
    | "whatsapp"
    | "instagram"
    | "phone"
    | "store";
}


export function createCustomerProfile(
  data: CustomerProfile
) {

  return {
    ...data,

    createdAt: new Date(),

    intelligenceLevel:
      data.behaviorScore > 80
        ? "high-value"
        : "normal"
  };

}