import { IconEye } from "@tabler/icons-react";
import { Container } from "../ui/Container";

async function getVisitorsCount(): Promise<number> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const response = await fetch(`${baseUrl}/api/getVisitors`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch visitors: ${response.status}`);
        }

        const json = await response.json();
        const data = json?.data;
        return data.visitors || 0
    } catch (error) {
        console.error("Failed to fetch visitors count:", error);
        return 0;
    }
}

export async function Visitors() {
    const count = await getVisitorsCount();

    return (
        <Container className="flex justify-center pb-10">
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
