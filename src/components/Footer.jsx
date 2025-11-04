export default function Footer(){
    return(
        <div className="flex items-center justify-around bg-neutral-800 w-full text-white text-sm gap-5 flex-wrap mt-5">
            <div className="flex flex-col items-center justify-center gap-3 min-w-fit p-6">
                <h1 className="font-bold">Contact Us</h1>
                <a href="tel:+91000000000" className="hover:text-red-600 transition-all duration-100 ease-in-out">Call Us</a>
                <a href="mailto:abc12345@gmail.com" className="hover:text-red-600 transition-all duration-100 ease-in-out">abc12345@gmail.com</a >
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Address, city/India</a>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 min-w-fit">
                <h1 className="font-bold">Our Services</h1>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Home</a>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Add Listing</a>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Rent</a>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 min-w-fit">
                <h1 className="font-bold">Quick Link</h1>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Knowledge Base</a>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">FAQ</a>
                <a href="#" className="hover:text-red-600 transition-all duration-100 ease-in-out">Contact</a>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 min-w-fit text-2xl">
                <h1 className="font-bold">Private Property Rental</h1>
                <a href="mailto:abc12345@gmail.com" className="bg-red-600 w-full py-3 rounded-3xl font-medium text-center">Contact Us</a>
            </div>
            <div className="">
             <h1 className="text-2xl w-[98vw] text-center my-8">Privacy Policy || Use of terms</h1>
        </div>
        </div>
    );
}