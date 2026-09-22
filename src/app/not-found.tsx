import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>Let’s get you back on track.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <ButtonLink href="/" variant="dark">
        Back to home
      </ButtonLink>
    </main>
  );
}
