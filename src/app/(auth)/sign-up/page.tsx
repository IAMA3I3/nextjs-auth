import { FullCard } from "@/components/card";
import Link from "next/link";

export default function SignUpPage() {

    return (
        <FullCard>
            <div className=" text-center">
                <div className=" text-xl">Sign Up</div>
                <form>
                    <div className=" my-2 flex flex-col gap-1 items-start">
                        <label htmlFor="username" className=" text-sm font-semibold text-gray-400">Username</label>
                        <input type="text" id="username" className=" outline-none w-full py-2 px-4 rounded bg-gray-200 focus:bg-gray-300" />
                        <div className=" text-sm font-semibold text-red-500">Username is required</div>
                    </div>
                    <div className=" my-2 flex flex-col gap-1 items-start">
                        <label htmlFor="email" className=" text-sm font-semibold text-gray-400">Email</label>
                        <input type="email" id="email" className=" outline-none w-full py-2 px-4 rounded bg-gray-200 focus:bg-gray-300" />
                        <div className=" text-sm font-semibold text-red-500">Email is required</div>
                    </div>
                    <div className=" my-2 flex flex-col gap-1 items-start">
                        <label htmlFor="emapasswordil" className=" text-sm font-semibold text-gray-400">Password</label>
                        <input type="password" id="password" className=" outline-none w-full py-2 px-4 rounded bg-gray-200 focus:bg-gray-300" />
                        <div className=" text-sm font-semibold text-red-500">Password is required</div>
                    </div>
                    <button type="submit" className=" mt-4 text-sm font-semibold text-white bg-purple-500 py-2 px-6 rounded hover:bg-purple-400 active:scale-95">Submit</button>
                </form>
                <div className=" mt-2 text-sm font-semibold text-gray-500">Already have an account? <Link href={'/sign-in'} className=" text-purple-500 hover:underline">Login</Link></div>
            </div>
        </FullCard>
    )
}