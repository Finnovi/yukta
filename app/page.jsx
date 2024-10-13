import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="hero" className=" h-[100vh] ">
        <div id="options" className="w-full flex flex-row justify-around">
          <Link className="bg-slate-200 rounded-lg p-2" href="/medicine">Medicine</Link>
          <Link className="bg-slate-200 rounded-lg p-2" href="/blood-sample">Blood Sample</Link>
          <Link className="bg-slate-200 rounded-lg p-2" href="/fitness">Fitness</Link>
          <Link className="bg-slate-200 rounded-lg p-2" href="/consultation">Consultation</Link>
          <Link className="bg-slate-200 rounded-lg p-2" href="/skin-care">Skin care</Link>
          <Link className="bg-slate-200 rounded-lg p-2" href="/health">Health</Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div
            id="left"
            className="w-full h-full flex justify-center items-center flex-col"
          >
            <h3>Yukta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, neque.
            </p>
          </div>
          <div
            id="right"
            className="w-full h-full flex justify-center items-center"
          >
            <Image
              src="/images/doctorPhoto.jpg"
              alt="doctor image"
              width={400}
              height={400}
              id="doctor-image"
            />
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
