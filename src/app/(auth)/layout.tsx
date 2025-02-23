import { ChildrenProp } from "@/types";
import Link from "next/link";

export default function AuthLayout({ children }: ChildrenProp) {

    return (
        <div className=" w-screen h-screen p-8 flex flex-col gap-8 justify-center items-center">
            <Link href={'/'} className=" text-3xl">AUTH</Link>
            {children}
        </div>
    )
}