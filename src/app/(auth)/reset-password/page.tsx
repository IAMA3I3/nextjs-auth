import { FullCard } from "@/components/card";

export default function ResetPasswordPage() {

    return (
        <FullCard>
            <div className=" text-center">
                <div className=" text-xl">Reset Password</div>
                <form>
                    <div className=" my-2 flex flex-col gap-1 items-start">
                        <label htmlFor="email" className=" text-sm font-semibold text-gray-400">Email</label>
                        <input type="email" id="email" className=" outline-none w-full py-2 px-4 rounded bg-gray-200 focus:bg-gray-300" />
                        <div className=" text-sm font-semibold text-red-500">Email is required</div>
                    </div>
                    <button type="submit" className=" mt-4 text-sm font-semibold text-white bg-purple-500 py-2 px-6 rounded hover:bg-purple-400 active:scale-95">Submit</button>
                </form>
            </div>
        </FullCard>
    )
}