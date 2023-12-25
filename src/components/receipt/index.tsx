export default function Receipt(
    props: any
) {
    const { transportCode, senderName, senderAddress, senderPhone,
            receiverName, receiverAddress, receiverPhone, date } = props;
    return(
        <>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-3/5 bg-white shadow-lg">
      {/* header */}
            <div className="flex justify-between p-4">
                <div className="pl-12">
                    <svg>
                        <img  className="w-20 h-20" src="../public/images/Logo with text.svg" />
                    </svg>
                </div>
                <div className="pr-12">
                    <img className="w-16 h-16 ml-4" src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt=""/>
                    <p>{transportCode}</p>
                </div>
            </div>

            <div className="w-full h-0.5 bg-indigo-500"></div>
      {/* body  */}
      <div className="flex m-3 text-sm border-black border-2">
        {/* column left  */}
        <div id="column-left" className="w-6/12">
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">1. Họ tên địa chỉ người gửi: </span>
            <p>{senderName}</p>
            <p>{senderAddress}</p>
            <div className="flex">
              <span className="font-bold pr-1">Số điện thoại:</span>
              <p>{senderPhone}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="font-bold pr-1">Mã khách hàng:</span>
                <p></p>
              </div>
              <div className="flex pr-5">
                <span className="font-bold pr-1">Mã bưu chính:</span>
                <p>{transportCode.split(3)}</p>
              </div>
            </div>
          </div>
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">3. Loại hàng gửi </span>
            <div className="flex justify-between pl-5 pr-14">
              <div className="flex pl-5">
                <label htmlFor="myCheckbox" className="pr-2">
                  Tài liệu
                </label>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
              </div>
              <div className="flex pr-10">
                <label htmlFor="myCheckbox" className="pr-2">
                  Hàng hoá
                </label>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
              </div>
            </div>
            <span className="font-bold">4. Nội dung giá trị bưu gửi </span>
            <div className="relative overflow-x-auto border-black border-2 sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-400 text-gray-900">
                  <tr>
                    <th scope="col" className="pl-3 py-1 w-2/5">
                      Nội dung
                    </th>
                    <th scope="col" className="text-center py-1">
                      Số lượng
                    </th>
                    <th scope="col" className="text-center py-1">
                      Trị giá
                    </th>
                    <th scope="col" className="text-center py-1">
                      Đính kèm
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="pl-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple
                    </th>
                    <td className="text-center py-1">1</td>
                    <td className="text-center py-1">1</td>
                    <td className="text-center py-1">0</td>
                  </tr>
                  <tr className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="pl-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Micro
                    </th>
                    <td className="text-center py-1">1</td>
                    <td className="text-center py-1">1</td>
                    <td className="text-center py-1">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">5. Dịch vụ đặc biệt cộng thêm </span>
            <p>
              ...........................................................................................................................................
              ...........................................................................................................................................
            </p>
          </div>
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">
              6. Chỉ dẫn của người gửi khi không phát được bưu gửi{" "}
            </span>
            <div className="flex">
              <div className="flex pr-5">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
                <label htmlFor="myCheckbox" className="pl-1">
                  Chuyển hoàn ngay
                </label>
              </div>
              <div className="flex pr-5">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
                <label htmlFor="myCheckbox" className="pl-1">
                  Gọi điện cho người gửi/BC gửi
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
                <label htmlFor="myCheckbox" className="pl-1">
                  Huỷ
                </label>
              </div>
            </div>
            <div className="flex text-siz">
              <div className="flex pr-2">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
                <label htmlFor="myCheckbox" className="pl-1">
                  Chuyển hoàn trước ngày
                </label>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  defaultValue="option1"
                />
                <label htmlFor="myCheckbox" className="pl-1">
                  Chuyển hoàn khi hết thời gian lưu trữ
                </label>
              </div>
            </div>
          </div>
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">7. Cam kết của người gửi</span>
            <p>Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi</p>
            <div className="flex justify-between pb-10">
              <div>
                <span className="font-bold">8. Ngày giờ gửi</span>
                <p>{date}</p>
              </div>
              <span className="font-bold pr-5">Chữ ký người gửi</span>
            </div>
          </div>
        </div>
        {/* column right  */}
        <div id="column-right" className="w-6/12">
          <div className=" p-2 leading-6 text-sm border-black border-2">
            <span className="font-bold">2. Họ tên địa chỉ người nhận: </span>
            <p>{receiverName}</p>
            <p>{receiverAddress}</p>
            <div className="flex">
              <span className="font-bold pr-1">Số điện thoại:</span>
              <p>{receiverPhone}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="font-bold pr-1">Mã khách hàng:</span>
                <p></p>
              </div>
              <div className="flex pr-5">
                <span className="font-bold pr-1">Mã bưu chính:</span>
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-3/5">
              <div className="p-2 leading-6 text-sm border-black border-2">
                <span className="font-bold">9. Cước</span>
                <div className="flex justify-between">
                  <p>a. Cước chính</p>
                  <p>10000 đ</p>
                </div>
                <div className="flex justify-between">
                  <p>b. Phụ phí</p>
                  <p>0</p>
                </div>
                <div className="flex justify-between">
                  <p>c. Cước GTGT</p>
                  <p>0</p>
                </div>
                <div className="flex justify-between">
                  <p>d. Tổng cước</p>
                  <p>10000 đ</p>
                </div>
                <div className="flex justify-between">
                  <p>e. Thu khác</p>
                  <p>0</p>
                </div>
                <span className="font-bold">f. Tổng thu</span>
                <span>10000 đ</span>
              </div>
              <div className="p-2 leading-6 text-sm border-black border-2">
                <span className="font-bold">11. Thu của người nhận</span>
                <div className="flex justify-between">
                  <p>COD</p>
                  <p>0</p>
                </div>
                <div className="flex justify-between">
                  <p>Thu khác</p>
                  <p>0</p>
                </div>
                <div className="flex justify-between">
                  <p>Tổng thu</p>
                  <p>0</p>
                </div>
              </div>
              <div className="text-center items-center justify-center p-2 pb-5 leading-6 text-sm border border-black ">
                <span className="font-bold">13. Bưu cục chấp nhận</span>
                <p>Chữ ký GDV nhận</p>
                <img
                  className="w-20 h-20 ml-20"
                  src="https://khacdautn.com/wp-content/uploads/2021/08/logo-khacdautn.png"
                  alt=""
                />
                <p>GDV: </p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="p-2 leading-6 text-sm border-black border-2">
                <span className="font-bold">10. Khối lượng</span>
                <div className="flex justify-between">
                  <p>Khối lượng thực tế</p>
                  <p>{Math.floor(Math.random()*10)}kg</p>
                </div>
                <div className="flex justify-between">
                  <p>Khối lượng quy đổi</p>
                  <p>111</p>
                </div>
              </div>
              <div className="p-2 leading-6 text-sm border-black border-2">
                <span className="font-bold">12. Chú dẫn nghiệp vụ</span>
                <p className="p-10" />
              </div>
              <div className="p-2 leading-6 text-sm border-black border-2">
                <span className="font-bold">14. Ngày giờ nhận</span>
                <p className="font-bold text-center">
                  ....h..../..../..../....
                </p>
                <div className="text-center">
                  <p>Người nhận được uỷ quyền nhận</p>
                  <p>Ký ghi rõ họ tên</p>
                  <div className="h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer  */}
      <div className="flex justify-between p-4">
        <div>
          <h3 className="text-xl">Terms And Condition :</h3>
          <ul className="text-xs list-disc list-inside">
            <li>
              All accounts are to be paid within 7 days from receipt of invoice.
            </li>
            <li>
              To be paid by cheque or credit card or direct payment online.
            </li>
            <li>
              If account is not paid within 7 days the credits details supplied.
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h3>Signature</h3>
          <div className="text-4xl italic text-indigo-500">AAA</div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-indigo-500" />
      <div className="p-4">
        <div className="flex items-center justify-center">
          Thank you very much for doing business with us.
        </div>
        <div className="flex items-end justify-end space-x-3">
          <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
            Print
          </button>
          <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">
            Save
          </button>
          <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-6/12 mt-4 text-left bg-white shadow-lg">
      <div className="flex justify-between px-8 py-6">
        <div className="flex items-center">sale invoice</div>
        <div className="flex items-center gap-4">
          <button className="px-2 py-1 bg-gray-200 hover:bg-gray-400">
            Save
          </button>
          <button className="px-2 py-1 bg-gray-200 hover:bg-gray-400">
            Print
          </button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-800" />
    </div>
  </div>
</>


    )
}