export const phoneNumber = "+91 94390 33055";
export const whatsappNumber = "919439033055";

export function createWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${whatsappNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function createPhoneUrl() {
  return "tel:+919439033055";
}
