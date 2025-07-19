const Page = () => {
    <div className="container mx-auto">
        
        <div className="p-3 rounded-md bg-gray-400">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <div className="w-full h-60 bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full bg-[url(https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Kireeva%20Anna/Black%20house%20in%20the%20woods/Black-house-in-the-woods-Kireeva-Anna-USA-001.jpg)]"></div>
                <div className="w-full h-60 bg-cover bg-center bg-[url(https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Kireeva%20Anna/Black%20house%20in%20the%20woods/Black-house-in-the-woods-Kireeva-Anna-USA-002.jpg)]"></div>
                <div className="w-full h-60 bg-cover bg-center bg-[url(https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Kireeva%20Anna/Black%20house%20in%20the%20woods/Black-house-in-the-woods-Kireeva-Anna-USA-003.jpg)]"></div>
            </div>
            <div className="text-2xl font-bold mt-3">Título da casa</div>
            <div className="flex gap-2 mt-3">
                <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
                <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
                <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
            </div>
        </div>

    </div>
};

export default Page;