import { IconEye } from "@tabler/icons-react";
import { Container } from "../ui/Container";
import { getVisitorsCount } from "@/src/server-functions/getVisitors";

export async function Visitors() {
    const count = await getVisitorsCount();

    return (
        <Container className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-xl   px-4 py-2 shadow-custom-inset-shadow dark:shadow-custom-inset-shadow-dark   ">
                <div className="flex size-7 items-center justify-center rounded-xl bg-secondary/30">
                    <IconEye className="stroke-1 size-4" />
                </div>

                <p className="text-sm text-secondary">
                    {count > 0 ? (
                        <>
                            You are the{" "}
                            <span className="font-semibold text-forground">
                                {count.toLocaleString()} <sup>th</sup>
                            </span>{" "}
                            visitor
                        </>
                    ) : (
                        <>
                            You are the{" "}
                            <span className="font-semibold text-forground">
                                {/* sorry lol */}
                                8 <sup>th</sup>
                            </span>{" "}
                            visitor
                        </>
                    )}
                </p>
            </div>
        </Container>
    );
}
