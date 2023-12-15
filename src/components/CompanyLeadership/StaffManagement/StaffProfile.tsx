const StaffProfile = () => {
    return(
        <div className="m-auto">
            <div className="flex items-center w-4/5 bg-white rounded-lg shadow-lg p-5 m-auto">
                <div className="w-25 h-25 overflow-hidden rounded-full">
                    <img
                        src="https://bhd.1cdn.vn/2023/06/20/files-library-images-site-1-20230620-web-cristiano-ronaldo-quyet-tam-can-moc-200-tran-dau-cho-tuyen-bo-dao-nha-42-105301.jpg"
                        alt="Your Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="ml-10">
                    <h1 className="text-2xl font-bold">Phạm Hoàng</h1>
                    <h2 className="text-gray-500">Hà Nội</h2>
                </div>
                <span className="ml-auto mr-20 p-2.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Online</span>
                        
            </div>

            <div className="pl-10 pr-10 w-4/5 mt-5 bg-white rounded-lg shadow-lg p-4 m-auto">
                <div className="w-11/12 pt-5 flex m-auto justify-between space-x-6">
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="First-Name-4" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="Hoàng" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="Last-Name-4" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="Phạm" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="w-11/12 pt-5 flex m-auto justify-between space-x-6">
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="First-Name-4" className="block text-sm font-medium text-gray-700">Branch Name</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="Hà Nội" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="Last-Name-4" className="block text-sm font-medium text-gray-700">Position</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="Leader" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="m-auto pt-5 w-11/12">
                    <label htmlFor="First-Name-4" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="hoangpham@gmail.com" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                </div>
                <div className="w-11/12 pt-5 pb-10 flex m-auto justify-between space-x-6">
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="First-Name-4" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="123456" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="flex-1 justify-center items-center">
                        <label htmlFor="Last-Name-4" className="block text-sm font-medium text-gray-700">Date Active</label>
                        <input type="text" name="Last-Name-4" data-name="Last Name 4" placeholder="123445" id="Last-Name-4" data-ms-member="last-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default StaffProfile;