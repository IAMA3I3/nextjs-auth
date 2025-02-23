import Sidenav from "@/components/sidenav";
import { ChildrenProp } from "@/types";

export default function DashboardLayout({ children }: ChildrenProp) {

    return (
        <div className=" flex h-screen w-screen overflow-hidden">
            <Sidenav />
            <div className=" p-4 overflow-y-auto">
                {children}
            </div>
        </div>
    )
}