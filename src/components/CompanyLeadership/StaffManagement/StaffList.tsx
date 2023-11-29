const StaffList = () => {
    return(
        <div>
            <div className="overflow-auto rounded-lg shadow hidden md:block">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">S.NO</th>
                        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">STAFF ID</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">STAFF NAME</th>
                        <th className="ư-32 p-3 text-sm font-semibold tracking-wide text-left">BRANCH NAME</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">EMAIL</th>
                        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">STATUS</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">ACTION</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">112</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Pham Hoang</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Hà Nội</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">@mdo</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Offline</span>
                        </td>
                        <td className="flex p-3 text-sm space-x-2 text-gray-700 whitespace-nowrap">
                            <a href="/dashboard/profile" className="text-blue-500">Detail</a>
                            <div className="h-4.5 w-0.5 bg-gray-200 mx-2"></div>
                            <a href="" className="text-blue-500">Edit</a>
                        </td>
                    </tr>
                    <tr className="">
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">112</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Otto</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">HCM</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">@mdo</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Online</span>
                        </td>
                        <td className="flex p-3 text-sm space-x-2 text-gray-700 whitespace-nowrap">
                            <a href="" className="text-blue-500">Detail</a>
                            <div className="h-4.5 w-0.5 bg-gray-200 mx-2"></div>
                            <a href="" className="text-blue-500">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">112</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Nam Định</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Otto</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">@mdo</td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Retired</span>
                        </td>
                        <td className="flex p-3 text-sm space-x-2 text-gray-700 whitespace-nowrap">
                            <a href="" className="text-blue-500">Detail</a>
                            <div className="h-4.5 w-0.5 bg-gray-200 mx-2"></div>
                            <a href="" className="text-blue-500">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:hidden">
                                <a href="#">
                                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                                        <div className="flex items-center space-x-2 text-lg">
                                            <div className="text-blue-500">123</div>
                                            <div>Phạm Hoàng</div>
                                            <div>Hà Nội</div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="text-gray-500">hoangpham1618@gmail.com</div>
                                            <div>
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-lg">
                                        <div className="text-blue-500">123</div>
                                        <div>Phạm Hoàng</div>
                                        <div>Hà Nội</div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-gray-500">hoangpham1618@gmail.com</div>
                                        <div>
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Offline</span>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <a href="#">
                                <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                                    <div className="flex items-center space-x-2 text-lg">
                                        <div className="text-blue-500">123</div>
                                        <div>Phạm Hoàng</div>
                                        <div>Hà Nội</div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-gray-500">hoangpham1618@gmail.com</div>
                                        <div>
                                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Retired</span>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
        </div>
    )
}
export default StaffList;