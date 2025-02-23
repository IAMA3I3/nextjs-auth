import Link from "next/link";

export default function Sidenav() {

    return (
        <div className=" h-full w-[250px] flex-none bg-white shadow border-r p-4 flex flex-col gap-4">
            <div className="">
                <Link href={'/'} className=" text-2xl">AUTH</Link>
            </div>
            <div className=" bg-gray-100 rounded p-4">
                <div className=" truncate">User</div>
                <div className=" text-xs font-semibold text-gray-500 truncate">user@gmail.com</div>
                <div className=""></div>
            </div>
            <div className=" flex-1 flex flex-col justify-between">
                <div className=" flex flex-col gap-4">
                    <Link href={'/home'} className=" block text-sm font-semibold tracking-wide text-gray-600 hover:text-gray-700">Home</Link>
                    <Link href={'/profile'} className=" block text-sm font-semibold tracking-wide text-gray-600 hover:text-gray-700">Profile</Link>
                </div>
                <div className="">
                    <button className=" font-semibold tracking-wide text-white bg-gray-600 py-2 px-6 rounded-full hover:bg-gray-500 active:scale-95">Logout</button>
                </div>
            </div>
            <div className=" h-[20px]"></div>
        </div>
    )
}