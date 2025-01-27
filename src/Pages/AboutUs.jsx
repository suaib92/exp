import homeBg from '../assets/home_bg.jpg';

export default function AboutPage() {
  return (
    <>
      <header className='relative h-[300px] w-full md:h-96 mb-8'>
        <img
          src={homeBg}
          alt='Pikkol Team'
          className='w-full h-full object-cover'
        />
      </header>
      <div className='container mx-auto px-4 py-4'>
        <main>
          <h1 className='text-3xl md:text-4xl font-bold mb-6'>
            About Yati Relocations
          </h1>
          <div className='space-y-6 text-lg'>
            <p>
              YatiRelocations is a renowned packing and moving company that
              specializes in relocation services, including storage, fine arts,
              household goods (both domestic and foreign), vehicle shifting,
              corporate moving.
            </p>
            <p>
              A well-known in the relocation sector, YatiRelocations is managed
              by a specialist with two decades of experience. With its branch
              and 25 associate partners in key places, Yati Relocation Group is
              present in four sites across India, catering to 100 cities
              nationwide.
            </p>
            <p>
              Quality services, resources, and international network service
              partners have been established by Yati Relocation. All committed
              to Yati Relocationing every move as easy as possible for clients.
            </p>
            <p>
              Our prompt reaction and consistent status guarantee our customers
              a smooth and cost free move to their new residence. Together, we
              have global network partners and international certifications to
              ensure hassle-free domestic and international moves.
            </p>
            <h1 className='text-xl md:text-xl font-bold mb-6'>
              More than 120+ skilled professionals
            </h1>
            <div className='space-y-6 text-lg'>
              <p>
                To guarantee the finest care for your treasures and memories,
                our packer and mover teams go through extensive ongoing training
                on standard operating procedures for handling, loading, packing,
                and storing. To ensure your happiness, we are always more than
                willing to go above and beyond.
              </p>
            </div>
            <h1 className='text-xl md:text-xl font-bold mb-6'>
              More than 60+ containerized vehicles
            </h1>
            <div className='space-y-6 text-lg'>
              <p>
                We make moving hassle-free! Our vehicles are fully equipped to
                keep your belongings safe and secure. With a wide range of
                specialized options, we carefully match the right vehicle to the
                size and needs of your items. Your possessions are in safe hands
                with us
              </p>
            </div>
            <h1 className='text-xl md:text-xl font-bold mb-6'>
            Our Mission 
            </h1>
            <div className='space-y-6 text-lg'>
              <p>
              To deliver exceptional relocation services that prioritize safety, efficiency, and peace of 
              mind. 
              </p>
            </div>
            <h1 className='text-xl md:text-xl font-bold mb-6'>
            Our Values 
            </h1>
            <div className='space-y-6 text-lg'>
              <ul className='list-disc'>
              <li><span className='font-semibold'>Trust :</span> We handle every item as if it were our own. </li>
              <li><span className='font-semibold'>Reliability :</span> On-time, every time.  </li>
              <li><span className='font-semibold'>Customer-Centric :</span> Your satisfaction is our top priority. </li>
              </ul>
            </div>
            <p className='font-bold text-xl'>#happymoving!</p>
          </div>
        </main>
      </div>
    </>
  );
}
