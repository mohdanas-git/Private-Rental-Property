export default function ListYourHome(){
    return(
      <div className="flex flex-col gap-4 p-12 xl:px-75 md:text-lg">
            <h1 className="font-medium text-2xl">List Your House</h1>
            <div className="flex flex-col gap-2">
                <p>Title</p>
                <input type="text" placeholder="_BHK_in_location" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Description</p>
                <textarea type="text" placeholder="About Listing" className="border border-neutral-950 h-10 p-2 scroll-smooth"></textarea>
            </div>
            <div className="flex flex-col gap-2">
                <p>Image URL 1</p>
                <input type="file" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Image URL 2</p>
                <input type="file" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Image URL 3</p>
                <input type="file" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Price</p>
                <input type="text" placeholder="00,000/Month" className="border border-neutral-950 h-10 p-2"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Location</p>
                <input type="text" placeholder="City/Country" className="border border-neutral-950 h-10 p-2"/>
            </div>
        <button className="flex items-center justify-between bg-red-700 text-white font-medium border-2 border-transparent rounded-xl py-2 px-6 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 gap-2 w-fit"><span>Add</span> <i class="fa-solid fa-plus"></i>
        </button>
        </div>
    );
}