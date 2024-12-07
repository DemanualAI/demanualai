import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section>
      <div className="flex items-center px-[5vw] bg-white relative mt-[3vh]">

        {/* Main content container */}
        <div className="w-full flex flex-col">

          {/* Vertical "DemanualAI" text */}
          <div className="absolute left-[calc(8.5vw-1rem)] top-[80px] -translate-y-1/2 -rotate-90 origin-left text-gray-500 tracking-wider">
            DemanualAI
          </div>
          <div className="w-[2px] h-[110px] bg-gray-500 mx-auto absolute left-[calc(8.55vw-1rem)] top-[85px] origin-left"></div>
          {/* Left side star decoration */}
          <div className="absolute left-[calc(7.8vw-1rem)] top-[190px]">
            <span className="text-2xl text-gray-500 font-extrabold">✕</span>
          </div>

          {/* Main content flex */}
          <div className="flex gap-8 justify-between h-[37vh]">
            {/* Heading section */}
            <div className="max-w-[1200px] ml-[4.5vw] md:max-w-[900px]">
              <h1 className="md:text-[40px] lg:text-[50px] xl:text-[55px] font-normal leading-tight">
                Put Your Business on Autopilot
                <br className="my-2" />
                & Reclaim Your Time
                <span className="text-[#0066FF] mx-1">+</span>
                Resources
              </h1>
            </div>

            {/* Description text */}
            <div className="">
              <p className="text-gray-700 w-[300px] text-right text-[13px] md:max-w-[150px]">
                Focus on what you do best, and let us handle the rest. We'll put your business on autopilot by automating the repetitive tasks that drain your time. Book a free consultation today and discover how to free yourself from the busywork and invest your energy in growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Image section - now separate from the main content */}
      <div className="flex justify-center items-center mt-10">
        <Image src="/hero-image.png" alt="Hero Image" width={1200} height={300} />
      </div>
    </section>

  )
}

export default Hero

