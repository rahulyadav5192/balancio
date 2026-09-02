export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocumentContent = {
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const legalLastUpdated = "2 September 2026";

export const privacyPolicy: LegalDocumentContent = {
  title: "Privacy Policy",
  eyebrow: "Legal",
  description:
    "How Balenciao collects, uses, and protects your information when you browse our website, submit reservation requests, or interact with our concierge team.",
  lastUpdated: legalLastUpdated,
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        "This Privacy Policy applies to Balenciao Night Club & Restaurant (“Balenciao”, “we”, “us”, or “our”), operating at Connaught Place, New Delhi, and our website at balenciao.in.",
        "If you have questions about this policy or your data, contact us at reservations@balenciao.in or +91 98765 43210.",
      ],
    },
    {
      title: "Information we collect",
      paragraphs: ["We may collect the following categories of information:"],
      list: [
        "Identity and contact details — such as your name, email address, and phone number when you submit a reservation request, contact form, or speak with our concierge.",
        "Reservation details — preferred date, time, party size, seating preference, occasion, and any special requests you choose to share.",
        "Technical data — such as IP address, browser type, device information, and pages visited, collected through standard server logs and analytics tools.",
        "Communications — records of correspondence with our team, including email, phone, and messaging channels you use to reach us.",
        "Payment information — when online payments are enabled, payment details are processed by our payment partners. We do not store full card numbers on our servers.",
      ],
    },
    {
      title: "How we use your information",
      paragraphs: ["We use personal information to:"],
      list: [
        "Review, confirm, or decline reservation and event requests.",
        "Communicate with you about your booking, arrival details, dress code, or venue policies.",
        "Operate, secure, and improve our website and guest services.",
        "Send service-related updates where you have provided contact details for that purpose.",
        "Comply with legal obligations, including age verification requirements and record-keeping for hospitality operations.",
        "Process payments and issue refunds where applicable, once payment functionality is live on the site.",
      ],
    },
    {
      title: "Legal basis and consent",
      paragraphs: [
        "We process your information to perform reservation services you request, to pursue our legitimate interests in operating a safe and well-run venue, and to comply with applicable law.",
        "Where required, we will seek your consent — for example, for optional marketing communications. You may withdraw consent at any time by contacting us.",
      ],
    },
    {
      title: "Sharing your information",
      paragraphs: [
        "We do not sell your personal information. We may share data with trusted service providers who help us operate our website, reservation systems, payment processing, email delivery, or analytics — only to the extent needed to provide those services and subject to appropriate safeguards.",
        "We may also disclose information if required by law, court order, or government authority, or to protect the rights, safety, and security of our guests, staff, and venue.",
      ],
    },
    {
      title: "Data retention",
      paragraphs: [
        "We retain reservation and contact records for as long as needed to manage your booking, resolve disputes, meet accounting or regulatory requirements, and maintain appropriate business records.",
        "Technical logs are retained for a shorter period unless needed for security investigations.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "We use reasonable administrative, technical, and organisational measures to protect personal information. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information, to object to or restrict certain processing, or to withdraw consent where processing is consent-based.",
        "To exercise these rights, email reservations@balenciao.in. We may need to verify your identity before responding.",
      ],
    },
    {
      title: "Cookies and analytics",
      paragraphs: [
        "Our website may use cookies and similar technologies to remember preferences, understand traffic patterns, and improve performance. You can control cookies through your browser settings, though some site features may not function correctly if cookies are disabled.",
      ],
    },
    {
      title: "Children",
      paragraphs: [
        "Balenciao is an adults-only venue. Our services are not directed to individuals under 21, and we do not knowingly collect personal information from anyone under that age.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of the website after changes are posted constitutes acceptance of the updated policy.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocumentContent = {
  title: "Terms & Conditions",
  eyebrow: "Legal",
  description:
    "The terms governing use of the Balenciao website, reservation requests, venue entry, and future online payments.",
  lastUpdated: legalLastUpdated,
  sections: [
    {
      title: "Agreement",
      paragraphs: [
        "By accessing balenciao.in, submitting a reservation or contact request, or visiting Balenciao Night Club & Restaurant, you agree to these Terms & Conditions. If you do not agree, please do not use the website or our services.",
      ],
    },
    {
      title: "Reservations",
      paragraphs: [
        "A reservation request submitted through our website is not a confirmed booking until our concierge team confirms availability, timing, table allocation, and any applicable minimum spend or cover terms in writing (email, phone, or message).",
        "We reserve the right to decline, modify, or cancel a reservation request at our discretion, including for capacity, safety, dress-code, age-policy, or operational reasons.",
        "You are responsible for providing accurate contact and party details. Repeated no-shows or late cancellations may affect future booking eligibility.",
      ],
    },
    {
      title: "Venue policies",
      paragraphs: ["Entry and conduct at Balenciao are subject to venue rules, including:"],
      list: [
        "Guests must be 21 or older with valid government-issued photo ID.",
        "Dress code: dark, considered evening wear. Sportswear, flip-flops, and athletic wear are not permitted after 7 PM.",
        "Management may refuse entry or remove any guest whose conduct threatens the safety, comfort, or experience of others.",
        "Photography, recording, and smoking policies may vary by area and event. Follow staff instructions at all times.",
      ],
    },
    {
      title: "Pricing and payments",
      paragraphs: [
        "Menu prices displayed on the website are in Indian Rupees (INR) unless stated otherwise and may change without notice.",
        "Event tickets, table minimums, cover charges, or deposits may apply for specific nights and will be communicated at confirmation.",
        "When online payment is introduced, you authorise us and our payment partners to charge the amount shown at checkout for the services selected. Additional terms presented during checkout will also apply.",
      ],
    },
    {
      title: "Website use",
      paragraphs: [
        "You may use this website only for lawful purposes. You must not attempt to disrupt the site, scrape content without permission, impersonate others, or submit false reservation information.",
        "All content on this website — including text, imagery, branding, and design — is owned by or licensed to Balenciao and may not be reproduced without prior written consent.",
      ],
    },
    {
      title: "Third-party links",
      paragraphs: [
        "Our website may link to third-party platforms such as maps, social media, or payment providers. We are not responsible for the content or privacy practices of those external sites.",
      ],
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "The website and its content are provided on an “as is” basis. To the fullest extent permitted by law, we disclaim warranties regarding uninterrupted access, accuracy of all information, or fitness for a particular purpose.",
        "Balenciao is not liable for indirect, incidental, or consequential losses arising from use of the website or attendance at the venue, except where liability cannot be excluded under applicable law.",
      ],
    },
    {
      title: "Force majeure",
      paragraphs: [
        "We are not responsible for failure or delay in performing obligations caused by events outside our reasonable control, including government restrictions, utility failures, severe weather, or public safety orders.",
      ],
    },
    {
      title: "Governing law",
      paragraphs: [
        "These Terms are governed by the laws of India. Courts in New Delhi shall have exclusive jurisdiction over disputes arising from or relating to these Terms, subject to applicable consumer protection law.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For questions about these Terms, contact reservations@balenciao.in or call +91 98765 43210.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocumentContent = {
  title: "Refund & Cancellation Policy",
  eyebrow: "Legal",
  description:
    "How cancellations, changes, deposits, and refunds are handled for Balenciao reservations and future online payments.",
  lastUpdated: legalLastUpdated,
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This policy explains how Balenciao handles reservation changes, cancellations, no-shows, and refunds. It applies to table reservations, event bookings, and any prepaid amounts collected through our website or concierge desk.",
        "Specific terms communicated in your booking confirmation — such as deposits, minimum spend, or event tickets — may supplement this policy and will take precedence where they differ.",
      ],
    },
    {
      title: "Reservation requests vs confirmed bookings",
      paragraphs: [
        "Submitting a form on our website creates a request only. No charge is made at that stage unless a payment step is explicitly shown during checkout.",
        "Once our team confirms your reservation and any required deposit or prepayment, the cancellation windows below apply to that confirmed booking.",
      ],
    },
    {
      title: "Cancellations by you",
      paragraphs: ["For standard table reservations without a prepaid deposit:"],
      list: [
        "Please notify us at least 4 hours before your scheduled arrival to cancel or reduce party size without penalty.",
        "Cancellations within 4 hours of arrival, or failure to arrive within 30 minutes of the confirmed time without notice, may be treated as a no-show.",
      ],
    },
    {
      title: "Deposits and prepaid amounts",
      paragraphs: [
        "For weekends, special events, private booths, or high-demand dates, we may require a deposit or full prepayment to hold your table.",
        "Unless otherwise stated in your confirmation:",
      ],
      list: [
        "Cancellations made 48 hours or more before the reservation: full refund of any prepaid deposit, minus payment gateway fees if applicable.",
        "Cancellations between 48 hours and 4 hours before arrival: 50% of the prepaid amount may be retained.",
        "Cancellations within 4 hours, or no-shows: prepaid amounts are generally non-refundable.",
      ],
    },
    {
      title: "Event tickets and packages",
      paragraphs: [
        "Tickets or packages for live performances, DJ nights, or curated experiences are non-refundable unless the event is cancelled by Balenciao or applicable law requires otherwise.",
        "If an event is postponed, your ticket will remain valid for the rescheduled date or we will offer a credit or refund at our discretion.",
      ],
    },
    {
      title: "Cancellations by Balenciao",
      paragraphs: [
        "If we cancel or materially change your confirmed booking due to operational, safety, or force majeure reasons, we will offer a full refund of any amount paid for that booking or an alternative date, at your choice where feasible.",
      ],
    },
    {
      title: "Refund processing",
      paragraphs: [
        "Approved refunds are returned to the original payment method used at checkout. Processing times depend on your bank or card issuer and typically take 5–10 business days after approval.",
        "We do not charge a separate Balenciao refund fee, but third-party payment processing fees may be non-recoverable where stated in your confirmation.",
      ],
    },
    {
      title: "Changes to your booking",
      paragraphs: [
        "To change date, time, or party size, contact our concierge as early as possible. Changes are subject to availability and may require a new confirmation.",
        "Downgrades or reductions made after confirmation may affect deposit eligibility under the terms above.",
      ],
    },
    {
      title: "How to request a cancellation or refund",
      paragraphs: [
        "Email reservations@balenciao.in or call +91 98765 43210 with your name, confirmation reference (if provided), and booking date. Refund requests are reviewed within 2 business days.",
      ],
    },
    {
      title: "Policy updates",
      paragraphs: [
        "We may revise this policy as payment features are introduced or regulations change. The version posted on this page at the time of your confirmed booking will apply unless otherwise required by law.",
      ],
    },
  ],
};
