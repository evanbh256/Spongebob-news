import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="bg-[#003366] text-white py-1">
          <div className="container mx-auto max-w-6xl px-4 flex justify-end text-xs font-bold space-x-4">
            <span className="uppercase">Watch TV</span>
            <span className="uppercase">Fox Nation</span>
            <span className="uppercase">Listen</span>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img src="/Spongebob-news/fox-news-logo.png" alt="Fox News Logo" className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6 text-sm font-bold text-black uppercase tracking-wide">
              <span>U.S.</span>
              <span>Politics</span>
              <span>Media</span>
              <span>Opinion</span>
              <span>Business</span>
              <span>Entertainment</span>
              <span>Sports</span>
              <span>Lifestyle</span>
              <span>Video</span>
              <span>More</span>
            </nav>
          </div>
          <div>
            <span className="font-bold cursor-pointer text-sm">Login</span>
          </div>
        </div>
      </header>

      {/* Main Content container */}
      <main className="container mx-auto max-w-6xl px-4 py-8 flex flex-col lg:flex-row gap-8 bg-white shadow-sm mt-4">
        
        {/* Article Column */}
        <article className="flex-1 max-w-3xl">
          <div className="mb-4">
            <span className="text-red-700 font-bold uppercase text-xl block mb-2 font-serif">Politics</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-4 leading-tight">
              Dems ripped for 'Stop Nick Shirley Act' that could 'shield' fraud and abuse in California
            </h1>
            <h2 className="text-xl md:text-2xl font-serif text-gray-600 mb-6 leading-snug">
              The bill was authored by Assemblymember Mia Bonta, wife of California Attorney General Rob Bonta
            </h2>
            
            <div className="flex justify-between items-end border-b pb-4 mb-6">
              <div className="text-sm">
                <span className="font-bold block">By Elaine Mallon, Peter Pinedo | Fox News</span>
                <span className="text-gray-500 uppercase">Published April 15, 2026 12:50pm EDT</span>
              </div>
              <div className="flex space-x-2 text-xl text-gray-400">
                {/* Social icons placeholder */}
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">f</div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">t</div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">m</div>
              </div>
            </div>
          </div>

          <div className="w-full relative aspect-video bg-gray-100 mb-2 border border-gray-200">
            {/* Main Image */}
            <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-2 py-1 flex items-center text-xs">
              <span className="mr-1">▶</span> VIDEO
            </div>
            <img 
              src="https://media.gettyimages.com/id/1243761217/photo/washington-dc-october-08-independent-journalist-nick-shirley.jpg?s=612x612&w=gi&k=20&c=placeholder" 
              alt="Nick Shirley"
              className="w-full h-full object-cover"
            />
            {/* Bottom banner for video like in fox news screenshot */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 border-l-4 border-red-600">
              <div className="font-bold text-xl text-[#003366]">California lawmaker dubs bill 'Stop Nick Shirley Act'</div>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-right mb-6">
             Independent journalist Nick Shirley speaks during a roundtable discussion in the State Dining Room of the White House in Washington, D.C., on Oct. 8, 2025. (Anna Moneymaker/Getty Images)
          </div>

          <div className="prose max-w-none prose-lg text-black font-serif leading-relaxed space-y-6">
            <p>
              California Democrats are being ripped over a bill coined the "Stop Nick Shirley Act," which critics argue would "criminalize" investigative journalism.
            </p>
            <p>
              The bill, "Privacy for immigration support services providers," creates privacy protections for providers, employees, and volunteers, including hiding addresses and imposing penalties for publishing their images on social media.
            </p>
            <p>
              Proponents say it's needed to protect people from political violence.
            </p>
            <p>
              If signed, the CA Secretary of State would oversee a program to conceal addresses of those providing "designated immigration support services" if they face threats or harassment.
            </p>
            <p>
              The bill prohibits private citizens or businesses from posting images or personal information of participants with the intent to threaten or incite violence.
            </p>
            <p>
              Violators could face a $10,000 fine or up to one year in jail.
            </p>
            <p>
              Republican lawmakers, like Carl DeMaio, argue it has a "chilling effect" on citizen journalists and protects "powerful interests."
            </p>
            <p>
              Mia Bonta stated, "This bill will ensure that we have an opportunity... to be able to have the ability to protect themselves."
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-gray-50 border p-6 mb-8 mt-12">
             <div className="w-full h-12 bg-[#003366] text-white flex flex-col items-center justify-center font-bold mb-4 relative">
                <img src="/Spongebob-news/fox-news-logo.png" alt="Fox News Logo" className="h-6 w-auto invert brightness-0 mb-1" />
                <div className="text-[10px] uppercase bg-red-600 px-2 w-full text-center absolute bottom-0">Politics</div>
             </div>
             <h3 className="font-bold text-2xl font-serif mb-4">Fox News Politics</h3>
             <p className="text-sm text-gray-600 mb-4">Get the latest updates from the 2024 campaign trail, exclusive interviews and more Fox News politics content.</p>
             <div className="flex items-center text-sm font-bold mb-4 border-b pb-4">
                <span className="mr-2">Arrives</span> 
                <span className="bg-[#003366] text-white px-2 py-0.5 rounded text-xs uppercase">Weekdays</span>
             </div>
             <p className="text-xs text-gray-500 mb-4">
                By entering your email and clicking the Subscribe button, you agree to the Fox News Privacy Policy and Terms of Use...
             </p>
             <button className="w-full bg-[#003366] text-white font-bold py-3 text-sm hover:bg-blue-800 transition">
               Subscribe
             </button>
          </div>

           {/* Floating video player like in screenshot */}
          <div className="bg-black text-white rounded overflow-hidden shadow-lg sticky top-24">
             <div className="flex justify-between items-center p-2 text-xs text-gray-400 bg-gray-900 border-b border-gray-700">
               <span className="cursor-pointer">↑</span>
               <span className="cursor-pointer">close ✕</span>
             </div>
             <div className="relative aspect-video bg-gray-800">
               {/* inner mock image */}
               <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://media.gettyimages.com/id/1243761217/photo/washington-dc-october-08-independent-journalist-nick-shirley.jpg?s=612x612&w=gi&k=20&c=placeholder')"}}></div>
             </div>
             <div className="p-3">
               <div className="text-xs text-gray-400 mb-1 font-bold">NOW PLAYING</div>
               <div className="font-bold text-sm leading-tight text-white">California lawmaker dubs bill 'Stop Nick Shirley Act'</div>
             </div>
          </div>
        </aside>

      </main>

      {/* Footer */}
      <footer className="bg-[#1e2a3a] text-white py-12 mt-12 border-t-4 border-blue-600">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm mb-8">
             <div>
               <h4 className="font-bold mb-4 uppercase">U.S.</h4>
               <ul className="space-y-2 text-gray-300">
                 <li>Crime</li>
                 <li>Military</li>
                 <li>Education</li>
                 <li>Terror</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-4 uppercase">World</h4>
               <ul className="space-y-2 text-gray-300">
                 <li>U.N.</li>
                 <li>Conflicts</li>
                 <li>Terrorism</li>
                 <li>Disasters</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-4 uppercase">Politics</h4>
               <ul className="space-y-2 text-gray-300">
                 <li>Executive</li>
                 <li>Senate</li>
                 <li>House</li>
                 <li>Judiciary</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold mb-4 uppercase">Business</h4>
               <ul className="space-y-2 text-gray-300">
                 <li>Markets</li>
                 <li>Politics</li>
                 <li>Technology</li>
                 <li>Features</li>
               </ul>
             </div>
           </div>
           
           <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
             <div className="mb-4 md:mb-0">
               ©2026 FOX News Network, LLC. All rights reserved.
             </div>
             <div className="flex space-x-4">
               <span>Terms of Use</span>
               <span>Privacy Policy</span>
               <span>Closed Captioning Policy</span>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
