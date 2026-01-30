"use client"
import { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";
import { IconSend } from "@tabler/icons-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="min-h-screen">
        <div className="md:mx-20">
          <div className="text-center">
            <Heading className="pt-20 tracking-wide">Contact</Heading>
            <SubHeading className="mx-auto md:max-w-full">
              Get in touch with me. I will get back to you as soon as possible.
            </SubHeading>
          </div>

          <div className="bg-secondary/90 my-5 h-[1.2px] mask-r-from-90% mask-l-from-90%" />
          <div className="mx-4 text-base font-medium">
            <h2 className="text-foreground">Send me a message</h2>
            <p className="text-muted-forground text-sm">
              Fill out the form below and I will get back to you as soon as
              possible.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-2xl flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-foreground text-sm font-semibold"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-forground/10 border-secondary rounded-lg border px-3 py-2 text-sm"
                    placeholder="Your name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-foreground text-sm font-semibold"
                  >
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    className="bg-forground/10 border-secondary rounded-lg border px-3 py-2 text-sm"
                    placeholder="Your phone "
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-foreground text-sm font-semibold"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-forground/10 border-secondary rounded-lg border px-3 py-2 text-sm"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-foreground text-sm font-semibold"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-forground/10 border-secondary rounded-lg border px-3 py-2 text-sm"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <Button
                  className="mr-auto gap-4 font-normal"
                  type="submit"
                  disabled={loading}
                >
                  <IconSend className="size-4 stroke-1 relative top-[1.2px]" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <span className="block text-green-600 text-sm mt-2">{success}</span>
                )}
                {error && (
                  <span className="block text-red-600 text-sm mt-2">{error}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
