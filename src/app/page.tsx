import Image from "next/image";
import Balancer from 'react-wrap-balancer'

// Images
import databiz from "@/assets/images/client-databiz.svg";
import audiophile from "@/assets/images/client-audiophile.svg";
import maker from "@/assets/images/client-maker.svg";
import meet from "@/assets/images/client-meet.svg";

import heroDesktop from "@/assets/images/image-hero-desktop.png";
import heroMobile from "@/assets/images/image-hero-mobile.png";


export default function Home() {
  const bannerImages = [databiz, audiophile, maker, meet];
  return (
<div className="w-full bg-gray-100 min-h-screen">
  {/* Hero Section  */}
  <section className="flex mx-auto max-w-6x1 flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:gap-4">
    {/* Left Div */}
    <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 lg:pl-16 xl:pl-32 md:text-left">  
      <h1 className="text-4xl font-semibold md:text-6xl">
          <Balancer>FullStack JavaScript Developer</Balancer>
      </h1>
      
      <Balancer>
        <p className="text-neutral-400 md:max-w-[400px]">A full stack JavaScript developer is a person who can develop both client and server software.
In addition to mastering HTML and CSS, he/she also knows how to:
Program a browser (like using JavaScript, jQuery, Angular, or Vue),
Program a server (like using Node.js),
Program a database (like using MongoDB)</p>
      </Balancer>

      <button className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all 
      hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">Learn more</button>

      <div className="flex gap-2 md:gap-6 lg:gap-12 flex-wrap">
        {(bannerImages).map((img, i) => (
          <Image className="h-5 w-auto" key={i} src={img} alt="bannerImage"/>
        ))}
      </div>
  
    </div>
    {/* Right Div */}
    <section className="md:w-1/2">
      <Image className="hidden max-w-[400px] h-auto md:block lg:max-w-[450px] xl:max-w-[550px] mt-5" src={heroDesktop} alt="heroDesktop" />
      <Image className="w-full h-auto md:hidden" src={heroMobile} alt="heroMobile" />
    </section>

  </section>
</div>
  );
}
