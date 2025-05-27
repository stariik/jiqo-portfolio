import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import ColorCard from "../components/ColorCard";

function Trustster() {
  const serviceList = ["Identity Design", "UI/UX Design"];
  return (
    <div className="px-[50px] sm:px-[145px] md:px-[361px]">
      <Video source={"/videos/TRUSTSTER.mp4"} />
      <Title text={"Trustster"} />
      <Services services={serviceList} />
      <div>
        <p className="text-lg font-microMedium pt-4">Overview</p>
        <p className="font-microRegular">
          Trustster is a platform that enables safe and simple trading of
          digital goods—such as in-game currency and skins (Robux, V-Bucks,
          League RP, CS Skins, etc.)—through an automated middleman service. The
          goal is to minimize the risk of fraud and streamline transactions
          between buyers and sellers.
        </p>
        <p className="text-lg font-microMedium  pt-4">My Role</p>
        <p className="font-microRegular">
          Worked as a UI/UX designer and graphic designer. I was responsible for
          creating the platform's entire visual identity—from the landing page
          to the ticketing system and user dashboard.
        </p>
      </div>
      <img
        src="../../images/trustster/tr1.png"
        alt=""
        className="rounded-xl mt-2 md:mt-8"
      />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-6 mt-2 md:mt-6">
        <ColorCard title={"Button"} bgcolor={"#CB3CFF"} hex={"CB3CFF"} />
        <ColorCard
          title={"Text"}
          bgcolor={"#FFFFFF"}
          hex={"FFFFFF"}
          textColor="black"
          shadow
        />
        <ColorCard
          title={"Secondary text"}
          bgcolor={"#AEB9E1"}
          hex={"AEB9E1  "}
        />
        <ColorCard title={"Background"} bgcolor={"#081028"} hex={"081028"} />
        <ColorCard
          title={"Button background"}
          bgcolor={"#321E61"}
          hex={"321E61"}
        />
        <ColorCard title={"Border"} bgcolor={"#343B4F"} hex={"343B4F"} />
        <ColorCard title={"Error"} bgcolor={"#FF5A65"} hex={"FF5A65"} />
        <ColorCard
          title={"Object Background"}
          bgcolor={"#0B1739"}
          hex={"0B1739"}
        />
        <ColorCard title={"Accent"} bgcolor={"#CB3CFF"} hex={"CB3CFF"} />
        <ColorCard title={"Accent"} bgcolor={"#086CD9"} hex={"086CD9"} />
        <ColorCard title={"Accent"} bgcolor={"#05C168"} hex={"05C168"} />
        <ColorCard title={"Accent"} bgcolor={"#FDB52A"} hex={"FDB52A"} />
        <ColorCard
          title={"Accent background"}
          bgcolor={"#0B2859"}
          hex={"0B2859"}
        />
        <ColorCard
          title={"Accent background"}
          bgcolor={"#0A3943"}
          hex={"0A3943"}
        />
        <ColorCard
          title={"Accent background"}
          bgcolor={"#3C3636"}
          hex={"3C3636"}
        />
      </div>
      
      <img
        src="../../images/trustster/trustster1.png"
        alt=""
        className="rounded-xl mt-2 md:mt-8"
      />
      <img
        src="../../images/trustster/trustster2.png"
        alt=""
        className="rounded-xl mt-2 md:mt-8"
      />

      <img
        src="../../images/trustster/tr2.png"
        alt=""
        className="rounded-xl mt-2 md:mt-8"
      />
      <img
        src="../../images/trustster/tr3.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <img
        src="../../images/trustster/tr4.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <img
        src="../../images/trustster/tr5.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <img
        src="../../images/trustster/tr6.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <div>
        <p className="font-microMedium mt-2 md:mt-6 mb-4 md:mb-8">
          Key Features
        </p>
        <p>
          <span className="font-microMedium">AutoMiddleman Service </span>— An
          automated middleman that ensures trusted transactions without
          requiring a third party.
        </p>
        <p className="font-microRegular">
          <span className="font-microMedium">Discord Login Integration </span>—
          Since most users come from Discord, we made logging in as seamless as
          possible.
        </p>
        <p className="font-microRegular">
          <span className="font-microMedium">Messenger-style Chat </span>— Both
          parties communicate through a chat interface using commands like
          /confirm, /release, /abort, and more.
        </p>
        <p className="font-microRegular">
          <span className="font-microMedium">Command-Based Transactions </span>—
          The bot handles crypto transfers only with mutual agreement from both
          users.
        </p>
        <p className="font-microRegular">
          <span className="font-microMedium">
            Minimalist and UI-Focused Design
          </span>
          — A visual language built on trust and security, with a clean and
          modern interface.
        </p>
        <p className="font-microRegular">
          <span className="font-microMedium">Visual Statistics </span>— The
          dashboard provides graphical analytics of successful and canceled
          transactions.
        </p>
      </div>
      <img
        src="../../images/trustster/tr7.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <div className="mt-2 md:mt-6">
        <p className="font-microMedium mb-4 md:mb-8">Security & Trust</p>
        <p className="font-microRegular">
          Trust is the core value of Trustster—and the design was built to
          reflect that. From thoughtful color choices to interface elements,
          every detail was crafted to convey safety and professionalism.
        </p>

        <ul className="list-disc pl-8 mt-2 md:mt-6 font-microMedium">
          <li className="">Verified User Badges</li>
          <li className="">High Contrast for Caution Elements</li>
          <li className="">
            Built-in “Call Admin” Function for Dispute Resolution
          </li>
        </ul>
      </div>
      <img
        src="../../images/trustster/tr8.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <img
        src="../../images/trustster/tr9.png"
        alt=""
        className="rounded-xl mt-2 md:mt-6"
      />
      <div className="my-4 md:my-6">
        <p className="font-microMedium">Mobile-Friendly Design</p>
        <p className="font-microRegular ">
          Trustster is fully optimized for mobile devices. The interface remains
          simple and intuitive across all screen sizes.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-6">
        <img
          src="../../images/trustster/tr10.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="../../images/trustster/tr11.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="../../images/trustster/tr12.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="../../images/trustster/tr13.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="../../images/trustster/tr14.png"
          alt=""
          className="rounded-xl"
        />
        <img
          src="../../images/trustster/tr15.png"
          alt=""
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default Trustster;
