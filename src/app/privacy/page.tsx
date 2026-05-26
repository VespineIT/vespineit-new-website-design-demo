import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <PageHeader
      eyebrow="Legal"
      title="Privacy policy"
      intro="Placeholder privacy content — replace with your finalized legal copy before launch."
    />
  );
}
