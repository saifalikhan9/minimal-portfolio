import { IconEye } from "@tabler/icons-react";
import { Container } from "../ui/Container";
import { getCount } from "@/src/server-functions/getVisitors";

export async function Visitors() {
  // const count = await getVisitorsCount();
  // console.log(count,"this is the count of the visitors")
  const count = await getCount();

  return (
    <Container className="flex justify-center">
      <div className="shadow-custom-inset-shadow dark:shadow-custom-inset-shadow-dark inline-flex items-center gap-3 rounded-xl px-4 py-2">
        <div className="bg-secondary/30 flex size-7 items-center justify-center rounded-xl">
          <IconEye className="size-4 stroke-1" />
        </div>

        <p className="text-secondary text-sm">
          {count > 0 ? (
            <>
              You are the{" "}
              <span className="text-forground font-semibold">
                {count.toLocaleString()} <sup>th</sup>
              </span>{" "}
              visitor
            </>
          ) : (
            <>
              You are the{" "}
              <span className="text-forground font-semibold">
                {/* sorry lol */}8 <sup>th</sup>
              </span>{" "}
              visitor
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
