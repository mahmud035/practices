import { SectionShell } from "../ui/SectionShell";
import { CopyCommand } from "../ui/CopyCommand";
import { CTAButton } from "../ui/CTAButton";
import { ctaBand } from "../../content/home";

export function CtaBand() {
  return (
    <SectionShell
      id="cta"
      ariaLabel="Get started"
      className="border-y border-border bg-surface text-center"
    >
      <h2 className="text-3xl font-semibold text-foreground">
        {ctaBand.headline}
      </h2>
      <p className="mt-4 text-muted-foreground">{ctaBand.subhead}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <CopyCommand command={ctaBand.installCommand} />
        <CTAButton href={ctaBand.signUpCta.href}>
          {ctaBand.signUpCta.label}
        </CTAButton>
      </div>
    </SectionShell>
  );
}
