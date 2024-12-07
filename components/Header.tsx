import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white py-4 w-full z-10">
      <nav className="mx-[5vw] flex justify-between items-center mt-[4vh]">
        <div className="flex items-center space-x-10 ">
          <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Demanual AI Logo" width={70} height={70} />
          </Link>

          <div className="hidden md:flex items-center space-x-4
          ">
            {['services', 'about us', 'blogs', 'contact us'].map((item) => (
              <Link
                key={item}
                href={`#${item.replace(' ', '-')}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                     px-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 
                     transition-all duration-300 text-center w-[250px]"
          >
            GET A FREE CONSULTATION
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header

