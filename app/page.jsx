import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero" className="flex flex-row justify-center h-[100vh] ">
        <div id="left" className="w-full h-full flex justify-center items-center flex-col">
          <h3>Yukta</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, neque.
          </p>
        </div>
        <div id="right" className="w-full h-full flex justify-center items-center">
          <Image
            src="/images/doctorPhoto.jpg"
            alt="doctor image"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section>
        
      </section>
    </>
  );
}
