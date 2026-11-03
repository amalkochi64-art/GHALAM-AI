import type { FollowUpTask, Lead } from "./types";

const DAY = 24 * 60 * 60 * 1000;

/** Suggests follow-ups only; a human must approve contact before sending. */
export function planFollowUps(lead: Lead, now = new Date()): FollowUpTask[] {
  if (!lead.consentToContact || ["won", "lost"].includes(lead.stage)) return [];

  const anchor = lead.lastContactAt ? new Date(lead.lastContactAt) : new Date(lead.createdAt);
  if (Number.isNaN(anchor.getTime())) return [];

  const intervals = lead.stage === "proposal"
    ? [{ days: 2, purpose: "proposal_check" as const }, { days: 5, purpose: "decision_check" as const }]
    : lead.stage === "new"
      ? [{ days: 0, purpose: "first_response" as const }, { days: 2, purpose: "needs_check" as const }]
      : [{ days: 3, purpose: "needs_check" as const }, { days: 14, purpose: "long_term_nurture" as const }];

  return intervals.map(({ days, purpose }) => {
    const due = purpose === "first_response"
      ? new Date(now)
      : new Date(anchor.getTime() + days * DAY);
    return {
      leadId: lead.id,
      dueAt: due.toISOString(),
      channel: "same_as_source" as const,
      purpose,
      requiresHumanApproval: true as const,
      suggestedMessage: purpose === "first_response"
        ? "سلام، از مجموعه قلم پیام می‌دهیم. برای راهنمایی دقیق‌تر، لطفاً بفرمایید چه نوع تجهیزاتی و برای چه فضایی نیاز دارید؟"
        : purpose === "proposal_check"
          ? "سلام، برای بررسی پیشنهاد ارسال‌شده و پاسخ به پرسش‌های احتمالی در خدمت شما هستیم. آیا موردی نیاز به توضیح بیشتر دارد؟"
          : purpose === "decision_check"
            ? "سلام، آیا برای تصمیم‌گیری درباره تجهیزات موردنیاز به اطلاعات یا مقایسه بیشتری نیاز دارید؟"
            : purpose === "long_term_nurture"
              ? "سلام، اگر برنامه تجهیز یا به‌روزرسانی فضای اداری شما فعال شد، خوشحال می‌شویم در انتخاب مناسب راهنمایی‌تان کنیم."
              : "سلام، برای تکمیل مشاوره، نیاز و اولویت شما در انتخاب تجهیزات اداری تغییر کرده است؟"
    };
  }).filter(task => new Date(task.dueAt).getTime() >= now.getTime());
}
