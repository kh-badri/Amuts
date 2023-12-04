import Image from "next/image";
import Link from "next/link";

const Tentangkami = () => {
  return (
    <section>
      <div className="Tentang-kami-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-10 min-h-full gap-5">
        <div className=" contact">
          <h1 className="md:pl-10 text-3xl text-hijau4 font-bold">
            Hubungi Kami
          </h1>
          <p className="md:pl-10 mt-10 font-semi-bold md:text-lg text-base text-hijau4">
            AMUTS Office<br></br>JL. Jendral Sudirman Jakarta Utara <br></br>
            Phone +6285234590071
          </p>
        </div>
        <div className="maps bg-hijau flex md:w-96 w-72 md:h-56 h-48 items-center justify-center rounded-xl right-0">
          <iframe
            title="google-maps"
            className="bg-hijau p-1 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253885.5429447742!2d106.67708207839557!3d-6.135860756549237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f58ab1132fd5%3A0x2623f5a6c83f3b27!2sJakarta%20Utara%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701607558712!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="Tentang-kami-2 min-h-screen bg-hijau3 ">
        <h1 className=" pt-10 text-3xl text-hijau4 font-bold text-center">
          Tim Kami
        </h1>
        <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-5 gap-4 justify-center">
          <div className="foto-1 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:durati1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out ">
              <Image
                src="/img/Fahmi.png"
                alt="foto-fahmi"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl"
              />
            </div>
            <h1 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href="https://www.linkedin.com/in/moch-fahmi-yasir-07a242274/">
                Fahmi
              </Link>
            </h1>
          </div>
          <div className="foto-2 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Atta.png"
                alt="foto-Atta"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h1 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link
                href={
                  "https://www.linkedin.com/in/achmad-ata-irsyadudin-4aa457279/"
                }
              >
                Atta
              </Link>
            </h1>
          </div>
          <div className="foto-3 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Badri.png"
                alt="foto-badri"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h1 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href="https://www.linkedin.com/in/khairul-badri-b388a4283/">
                Badri
              </Link>
            </h1>
          </div>
          <div className="foto-4 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Bagus.png"
                alt="foto-bagus"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h1 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href={"https://www.linkedin.com/in/bagusmazzz/"}>
                Bagus
              </Link>
            </h1>
          </div>
          <div className="foto-5 md:w-52 w-40 overflow-hidden">
            <div className="mt-10 relative transition-transform transform-gpu hover:translate-y-[-20px] hover:duration-1000 hover:ease-out transition-transform transform-gpu duration-500 ease-in hover:translate-y-[-20px] hover:duration-1000 hover:ease-out">
              <Image
                src="/img/Ariq.png"
                alt="foto-Ariq"
                width={208}
                height={240}
                priority
                className="object-cover md:h-60 h-48 rounded-xl border-solid border-4 border-hijau2 transition-transform transform-gpu hover:translate-y-[-10px] hover:duration-1000 hover:ease-out shadow-2xl	"
              />
            </div>
            <h1 className="md:p-2 bg-hijau2 mt-3 flex font-bold md:text-2xl text-xl text-white justify-center rounded-xl">
              <Link href={"https://www.linkedin.com/in/ariqhwari"}>Ariq</Link>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentangkami;
