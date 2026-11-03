export type CustomerSegment = "individual" | "office" | "company" | "organization" | "reseller" | "unknown";
export type LeadStage = "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost" | "nurture";
export type LeadSource = "instagram" | "phone" | "in_store" | "referral" | "website" | "telegram" | "whatsapp" | "bale" | "outbound" | "other";

export interface Lead {
  id: string;
  name: string;
  phone?: string;
  organization?: string;
  city?: string;
  segment: CustomerSegment;
  source: LeadSource;
  productInterest: string[];
  useCase?: string;
  budgetMin?: number;
  budgetMax?: number;
  budgetCurrency?: string;
  purchaseTimelineDays?: number;
  decisionMaker?: boolean;
  quantity?: number;
  stage: LeadStage;
  consentToContact: boolean;
  lastContactAt?: string;
  nextFollowUpAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeadScore {
  score: number;
  tier: "hot" | "warm" | "cold";
  reasons: string[];
  missingInformation: string[];
}

export interface FollowUpTask {
  leadId: string;
  dueAt: string;
  channel: "same_as_source" | "phone" | "instagram" | "whatsapp" | "telegram";
  purpose: "first_response" | "needs_check" | "proposal_check" | "decision_check" | "long_term_nurture";
  requiresHumanApproval: true;
  suggestedMessage: string;
}
