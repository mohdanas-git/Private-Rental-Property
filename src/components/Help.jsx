export default function Help(){
    return(
        <div className="flex flex-col gap-4 p-12 xl:px-75 md:text-lg">
            <h1 className="font-medium text-2xl">Contact Page</h1>
            <div className="flex flex-col gap-2">
                <p>Username</p>
                <input type="text" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Email</p>
                <input type="email" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Message</p>
                <textarea type="password" className="border border-neutral-950 h-10 p-2"></textarea>
            </div>
        <button className="bg-red-700 text-white font-medium border-2 border-transparent rounded-xl py-2 px-6 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 gap-2 w-fit">Submit</button>
        </div>
    );
}