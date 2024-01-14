import Navbar from "../navbar/navbar";
import ContactImage from "../../assets/contact-image.jpeg";
import { ContactInformation } from "../contact-page/contact-page";
import { ToastContainer } from "react-toastify";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useRef } from "react";
import "./homepage.css";

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);

  const scrollToContactInfo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="m-4">
      <div className="flex flex-col items-center min-h-[90vh]">
        <Navbar highlight="home" />
        <HomepageTopSection />
        <HomepageMiddleSection />
      </div>

      <div
        className="
        flex-col justify-center items-center
        h-[10vh] text-3xl
        animate-bounce ease duration-2
        cursor-pointer
        hidden md:flex
        "
        onClick={scrollToContactInfo}
      >
        Contact Me
        <BsChevronDoubleDown />
      </div>
      <ContactInformation reference={ref} />
      <ToastContainer position="bottom-left" theme="dark" />
    </div>
  );
}

function HomepageTopSection() {
  return (
    <>
      <div
        className="
      flex flex-col justify-between items-center w-full
      sm:flex-col md:flex-row-reverse
      "
      >
        <div className="
          h-[8rem] md:h-[10rem] aspect-square
          relative
          image-pulsing-background
          md:mr-[15%] md:mt-0 mt-10
        ">
          <img
            src={ContactImage}
            className="rounded-full z-10"
            alt=""
          />
        </div>

        <div className="md:my-[5%] md:ml-[8%] md:mr-auto md:w-full text-center md:text-left mt-10">
          <div className="font-bold font-family-[Hind] text-white">
            <div className="text-3xl animate-slideInLeft md:text-5xl">
              Hello
            </div>
            <div
              className="text-2xl animate-slideInLeft md:text-4xl"
              style={{ animationDuration: "0.75s" }}
            >
              I am a{" "}
              <span className="bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
                Software Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[1px] w-[70%] bg-gray-600 animate-expandFromCenter mt-2" />
    </>
  );
}

function HomepageMiddleSection() {
  return (
    <div className="flex flex-col items-center mt-8 md:mt-12 animate-fadeIn">
      <p className="parah-text md:text-4xl text-2xl font-normal mb-10">
        Hard work unlocks the hidden potential of talent
      </p>
      <p className="parah-text text-lg md:text-2xl font-light leading-tight">
        As a highly skilled and versatile software engineer, I have honed my
        abilities in multiple programming languages, allowing me to bring a
        diverse range of expertise to any project.
        <br />
        With a keen eye for problem-solving and a commitment to excellence, I
        strive to create innovative software solutions that surpass
        expectations.
        <br />
        Explore the demos of my personal projects on the project page.{" "}
      </p>
    </div>
  );
}
