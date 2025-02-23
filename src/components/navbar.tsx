import Link from "next/link";

export default function Navbar() {
    return (
        <div className=" w-full py-2 bg-white shadow border-b">
            <div className=" container">
                <div className=" flex justify-between items-center">
                    <Link href={'/'} className=" text-2xl">AUTH</Link>
                    <div className=" flex items-center gap-4">
                        <Link href={'/sign-in'} className=" text-gray-500 font-semibold hover:text-gray-700">Login</Link>
                        <Link href={'/sign-up'} className=" text-sm font-semibold py-2 px-4 rounded-full bg-purple-500 text-white hover:bg-purple-400 active:scale-95">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}