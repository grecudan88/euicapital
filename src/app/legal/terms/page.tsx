import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `Terms governing use of the ${site.name} website.`,
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      lede="The terms on which this website is made available."
      sections={[
        {
          heading: "No affiliation with EU institutions",
          body: [
            `${site.legalName} is an independent private consultancy. It is not affiliated with, endorsed by, accredited by, or acting on behalf of the European Union, the European Commission, any executive agency, or any national or regional managing authority.`,
            "References to EU programmes on this website are descriptive. They do not imply any relationship with the bodies that administer them.",
          ],
        },
        {
          heading: "Information, not advice",
          body: [
            "The content of this website is general information about European funding instruments. It is not legal, financial or tax advice, and it must not be relied on as a substitute for reading the applicable work programme, call documentation and national rules.",
            "Budget figures, co-financing rates and eligibility descriptions are indicative summaries of publicly available information and may become outdated. Always verify against the official call documentation before making a decision.",
          ],
        },
        {
          heading: "No guarantee of funding",
          body: [
            "Grant evaluation is competitive and carried out by independent evaluators appointed by the awarding body. No consultancy can guarantee that an application will be funded, and we make no such guarantee. Any statistics published on this website describe past engagements and do not predict future outcomes.",
          ],
        },
        {
          heading: "Engagement terms",
          body: [
            "Nothing on this website constitutes an offer to enter into a contract. Services are provided only under a signed engagement letter which sets out scope, fees, timelines and liability.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            `All content on this website is owned by ${site.legalName} unless stated otherwise, and may not be reproduced commercially without written permission.`,
          ],
        },
        {
          heading: "Liability",
          body: [
            "To the fullest extent permitted by law, we exclude liability for any loss arising from reliance on the content of this website. Nothing in these terms limits liability that cannot lawfully be limited.",
          ],
        },
      ]}
      footnote="This page is a starting template and is not legal advice. Have it reviewed by a qualified lawyer, and complete it with your governing law, registered company number and registered address before launch."
    />
  );
}
