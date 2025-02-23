export default function ProfilePage() {

    return (
        <div className=" mt-8">
            <div className=" text-3xl">Profile</div>
            <div className=" text-lg">User</div>
            <div className="">user@gmail.com</div>
            <div className=" text-sm text-green-500 font-semibold">Verified</div>
            <button className=" inline-block mt-4 font-semibold tracking-wide text-white py-2 px-6 rounded-full bg-purple-500 hover:bg-purple-400 active:scale-95">Verify Email</button>
        </div>
    )
}