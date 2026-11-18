export const CONTACT_INFO = {
  name: "Suraj Singh",
  whatsapp: "919355337839",
  whatsappDisplay: "+91-9355337839",
  phoneTel: "+919355337839",
  secondaryWhatsapp: "918851666208",
  secondaryDisplay: "+91-8851666208",
  email: "suraj.gasdeveloper@gmail.com",
  defaultMessage: "Hi Suraj, I want to discuss automating my business processes."
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.defaultMessage)}`;
export const TEL_LINK = `tel:${CONTACT_INFO.phoneTel}`;
export const EMAIL_LINK = `mailto:${CONTACT_INFO.email}`;
