import type { Lead, LeadScore } from "./types";

/**
 * Transparent rule-based qualification. No prices, stock, guarantees, or
 * product specifications are inferred. Tune weights after real CRM data exists.
 */
export function scoreLead(lead: Lead): LeadScore {
  let score = 0;
  const reasons: string[] = [];
  const missingInformation: string[] = [];

  if (lead.purchaseTimelineDays !== undefined) {
    if (lead.purchaseTimelineDays <= 7) { score += 30; reasons.push("خرید در ۷ روز آینده"); }
    else if (lead.purchaseTimelineDays <= 30) { score += 22; reasons.push("خرید در ۳۰ روز آینده"); }
    else if (lead.purchaseTimelineDays <= 90) { score += 12; reasons.push("نیاز میان‌مدت"); }
    else { score += 4; reasons.push("زمان خرید بلندمدت"); }
  } else missingInformation.push("زمان احتمالی خرید");

  if (lead.budgetMin !== undefined || lead.budgetMax !== undefined) {
    score += 15;
    reasons.push("بازه بودجه مشخص شده");
  } else missingInformation.push("بودجه یا بازه سرمایه‌گذاری");

  if (lead.decisionMaker === true) { score += 15; reasons.push("تصمیم‌گیرنده خرید"); }
  else if (lead.decisionMaker === false) missingInformation.push("راه ارتباط با تصمیم‌گیرنده");
  else missingInformation.push("نقش فرد در تصمیم خرید");

  if (lead.productInterest.length > 0) { score += 10; reasons.push("دسته محصول موردنیاز مشخص است"); }
  else missingInformation.push("محصول یا دسته کالای موردنیاز");

  if (lead.quantity !== undefined && lead.quantity > 1) { score += 10; reasons.push("ظرفیت سفارش چندعددی یا سازمانی"); }
  if (["office", "company", "organization"].includes(lead.segment)) { score += 10; reasons.push("مشتری اداری یا سازمانی"); }

  if (lead.phone) { score += 5; reasons.push("راه تماس ثبت شده"); }
  else missingInformation.push("شماره تماس");

  if (!lead.consentToContact) {
    score = Math.min(score, 35);
    reasons.push("تماس تبلیغاتی بدون رضایت مجاز نیست");
  }

  score = Math.max(0, Math.min(100, score));
  const tier = score >= 65 ? "hot" : score >= 35 ? "warm" : "cold";
  return { score, tier, reasons, missingInformation };
}
