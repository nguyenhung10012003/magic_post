'use client'
import {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

export default function Home() {

  const [state, setState] = useState(false)

  const navigation = [
    {title: "Tra cứu", path: "/search"},
    {title: "Hướng dẫn", path: "/guide"},
    {title: "Liên hệ", path: "/contact"},
    {title: "Đối tác", path: "#"},
    {title: "Đăng nhập", path: "/login"}
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/Logo.svg" alt="Magic post" width={80} height={40} />
            </Link>
            <div className="ml-auto space-x-6 md:space-x-2 md:flex items-center">
              {
                navigation.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.path}
                    className="text-gray-700 hover:text-indigo-600 pr-10"
                  >
                    {item.title}
                  </a>
                ))
              }
            </div>
          </div>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 flex-grow">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            CHUYỂN PHÁT NHANH VỚI
            <span style={{ background: `linear-gradient(45deg, #008080, #0000FF)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> MAGIC</span>
            <span style={{ background: `linear-gradient(45deg, #FFA500, #FF1493)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> POST</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Là đơn vị vận chuyển hàng đầu Việt Nam, chúng tôi cung cấp đầy đủ các dịch vụ vận chuyển tới khắp mọi miền
            tổ quốc
          </p>
        </div>
        <div className="mt-20 md:px-32 lg:px-48">
          <SearchBar/>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

