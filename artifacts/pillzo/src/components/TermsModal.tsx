import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function TermsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
          Terms & Conditions
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">Terms & Conditions</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Please read these terms carefully before using Pillzo.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4 text-sm text-foreground leading-relaxed">
          <section>
            <h3 className="font-semibold text-lg mb-2 text-foreground">1. Medical Disclaimer (CRITICAL)</h3>
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-xl text-destructive font-medium">
              Pillzo is NOT a substitute for emergency medical services. In case of a medical emergency, immediately call 911 or your local emergency number, or go to the nearest emergency room.
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">2. Terms of Service</h3>
            <p className="text-muted-foreground">
              By accessing and using Pillzo, you agree to be bound by these terms. We provide a platform connecting patients with licensed medical professionals for telehealth consultations. We do not provide medical services directly.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">3. Privacy Policy</h3>
            <p className="text-muted-foreground">
              Your privacy is our priority. All medical data, personal information, and consultation histories are encrypted and compliant with HIPAA regulations. We never sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">4. Refund & Cancellation Policy</h3>
            <p className="text-muted-foreground">
              Appointments can be cancelled for a full refund up to 2 hours before the scheduled time. Missed appointments without prior notice may be subject to a cancellation fee. Subscriptions can be cancelled at any time, effective at the end of the current billing cycle.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">5. User Responsibilities</h3>
            <p className="text-muted-foreground">
              Users are responsible for providing accurate health information and maintaining a stable internet connection for video consultations. Pillzo reserves the right to terminate accounts that misuse the platform or exhibit inappropriate behavior toward medical staff.
            </p>
          </section>
        </div>
        
        <div className="mt-8 flex justify-end">
          <DialogTrigger asChild>
            <Button className="rounded-xl px-8">I Understand</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
}
