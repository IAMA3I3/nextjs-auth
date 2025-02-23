import { ChildrenProp } from "@/types";

export default function AuthLayout({ children }: ChildrenProp) {

    return (
        <div className=" w-screen h-screen p-8 flex justify-center items-center">
            {children}
        </div>
    )
}