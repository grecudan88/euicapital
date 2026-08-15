import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: `How ${site.name} collects and processes personal data.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy notice"
      lede="How we handle personal data submitted through this website."
      sections={[
        {
          heading: "Who we are",
          body: [
            `${site.legalName} is the data controller for personal data collected through this website. You can reach us at ${site.email}.`,
          ],
        },
        {
          heading: "What we collect",
          body: [
            "When you submit the contact form we collect the name, email address, organisation, country, project stage, indicative budget and message you provide. We also record the time of submission, the country your request originated from, and your browser user-agent string.",
            "This website does not use advertising or tracking cookies.",
          ],
        },
        {
          heading: "Why we process it",
          body: [
            "We use these details for one purpose: to respond to your enquiry and, if you become a client, to deliver the services you engage us for. The legal basis is our legitimate interest in responding to business enquiries, and performance of a contract where one is entered into.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Enquiries that do not lead to an engagement are retained for up to twelve months and then deleted. Client records are retained for the period required by applicable accounting, tax and grant audit obligations.",
          ],
        },
        {
          heading: "Who else sees it",
          body: [
            "Form submissions are transmitted through Cloudflare, which provides hosting and network security for this site, and may be delivered to our email provider. We do not sell personal data and we do not share it with third parties for marketing.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under the General Data Protection Regulation you may request access to your personal data, rectification, erasure, restriction of processing, or portability, and you may object to processing based on legitimate interests. Write to us and we will respond within one month.",
            "You also have the right to lodge a complaint with your national data protection supervisory authority.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update this notice. The version published on this page is always the current one.",
          ],
        },
      ]}
      footnote="This notice is a starting template and is not legal advice. Have it reviewed by a qualified data protection adviser, and complete it with your registered company details before launch."
    />
  );
}
