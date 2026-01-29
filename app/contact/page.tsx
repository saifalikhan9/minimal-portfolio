import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";
import { IconSend } from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <Container className="min-h-screen">
        <div className="mx-20">
          <div className="text-center">
            <Heading className="pt-20 tracking-wide">Contact</Heading>
            <SubHeading className="md:max-w-full">
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
            <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-6">
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
                />
              </div>
              <Button asChild className="mr-auto gap-4 font-normal " type="submit"> {<IconSend className="size-4 stroke-1 relative top-[1.2px]"/>} Send Message</Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
