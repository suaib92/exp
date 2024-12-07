import homeBg from '../assets/home_bg.jpg';

export default function AboutPage() {
  return (
    <>
     <header className="relative h-[300px] w-full md:h-96 mb-8">
        <img
          src={homeBg}
          alt="Pikkol Team"
          className="w-full h-full object-cover"
        />
      </header>
    <div className="container mx-auto px-4 py-4">
      <main>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Pikkol</h1>
        <div className="space-y-6 text-lg">
          <p>
            We are, simply put, a group of individuals sharing a common vision
            of ushering in a new wave of change in the way the Indian relocation
            industry operates by bringing in the much-needed standardization of
            various parameters including safety, accountability, professionalism,
            and unmatched service experience at affordable rates for packers and
            movers.
          </p>
          <p>
            Pikkol, conceived as the brainchild of a group of enterprising young
            men in April 2015, operates as a move manager service platform where
            customers can search for a tailor-made solution for their relocation
            needs. Founded by IIM alumni, Pikkol's mission is to make every move
            happening in India a hassle-free #happymoving experience to bring in
            customer delight.
          </p>
          <p>
            The most hassle-free move booking experience is made possible by the
            world's first-ever true instant relocation charge auto-quoting
            engine developed. This technological marvel calculates your move
            quote after you enter your move details. The system-generated quote
            makes the pricing completely transparent. The additional option of
            customizing the quote online truly demonstrates that the customer is
            indeed the king. Pikkol is the only platform where the customer is
            encouraged to benefit from the dynamic pricing nature of the packers
            and movers industry.
          </p>
          <p>
            Unlike a marketplace where your requirement is passed over to any
            vendor, Pikkol truly cares about your move and deploys specially
            trained teams for the service execution. Teams are trained on best
            practices followed in packing, unpacking, handling, transportation,
            safety, etiquette, and operating technology. May it be house shifting
            or vehicle shifting, the teams are well-equipped and trained to
            safely handle your belongings during loading, unloading, and
            transportation.
          </p>
          <p>
            As the flagship product of Hybrid Shifting Solutions India Private
            Ltd, Pikkol is the ultimate one-stop solution for your queries such
            as "How can I find the most trusted and reliable packers and
            movers", "best packers and movers for house shifting", "trusted and
            safe truck hire for house and office shifting", "who is the most
            trusted packers and movers in India", etc.
          </p>
          <p className="font-bold text-xl">#happymoving!</p>
        </div>
      </main>
    </div>
    </>
  );
}
