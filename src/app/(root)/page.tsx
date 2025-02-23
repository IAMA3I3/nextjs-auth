import Link from "next/link";

export default function LandingPage() {

    return (
        <div className=" container mt-8 text-center">
            <div className=" text-5xl">Welcome</div>
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro quos, natus fugiat, nisi perferendis incidunt nulla molestias doloribus illo eveniet possimus excepturi enim, blanditiis alias atque itaque ullam error?
            </div>
            <Link href={'/home'} className=" inline-block mt-4 font-semibold tracking-wide text-white py-2 px-6 rounded-full bg-purple-500 hover:bg-purple-400 active:scale-95">Home</Link>
        </div>
    )
}