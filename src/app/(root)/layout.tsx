import Navbar from "@/components/navbar";
import { ChildrenProp } from "@/types";

export default function MainLayout({ children }: ChildrenProp) {

    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}