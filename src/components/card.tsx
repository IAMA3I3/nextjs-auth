import { ChildrenProp } from "@/types";

export function FullCard({ children }: ChildrenProp) {

    return (
        <div className=" p-4 w-full max-w-[500px] rounded-lg border shadow bg-white">
            {children}
        </div>
    )
}