import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("nav1");
  const navigate = useNavigate();

  const handleNavClick = (id, route) => {
    navigate(route);
  };

  const navItems = [
    {
      id: "nav1",
      route: "/",
      svg: (
        <svg
          width="40"
          height="54"
          viewBox="0 0 40 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"transition-colors duration-300 cursor-pointer fill-black"}
        >
          <path d="M8.7951 0C10.2116 0 11.5224 0.749131 12.2414 1.96954L18.0254 11.7868C18.3879 12.4021 18.5791 13.1032 18.5791 13.8173V31.7607C18.5791 33.9699 20.37 35.7607 22.5791 35.7607H29.8635C31.2799 35.7607 32.5908 36.5099 33.3098 37.7303L39.3327 47.9529C40.9038 50.6194 38.9813 53.9834 35.8864 53.9834H4C1.79086 53.9834 0 52.1925 0 49.9834V4C0 1.79086 1.79086 0 4 0H8.7951Z" />
        </svg>
      ),
    },
    {
      id: "nav2",
      svg: (
        <svg
          width="63"
          height="54"
          viewBox="0 0 63 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer fill-[#DDDEDC] hover:fill-[#FE9C28]`}
        >
          <path d="M34.9637 52.0031C33.424 54.6689 29.576 54.6689 28.0362 52.0031L1.46587 6.00064C-0.0743666 3.33397 1.8501 3.26262e-05 4.92962 3.28955e-05L58.0704 3.75412e-05C61.1499 3.78104e-05 63.0744 3.33398 61.5341 6.00065L34.9637 52.0031Z" />
        </svg>
      ),
    },
    {
      id: "nav3",
      svg: (
        <svg
          width="63"
          height="54"
          viewBox="0 0 63 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer fill-[#DDDEDC] hover:fill-[#FE9C28]`}
        >
          <path d="M28.0363 1.99693C29.576 -0.668916 33.424 -0.668913 34.9637 1.99694L61.5341 47.9994C63.0744 50.6661 61.1499 54 58.0704 54L4.92962 54C1.8501 54 -0.0743583 50.6661 1.46587 47.9994L28.0363 1.99693Z" />
        </svg>
      ),
    },
    {
      id: "nav4",
      svg: (
        <svg
          width="63"
          height="54"
          viewBox="0 0 63 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer fill-[#DDDEDC] hover:fill-[#FE9C28]`}
        >
          <path d="M34.9637 52.0031C33.424 54.6689 29.576 54.6689 28.0362 52.0031L1.46587 6.00064C-0.0743666 3.33397 1.8501 3.26262e-05 4.92962 3.28955e-05L58.0704 3.75412e-05C61.1499 3.78104e-05 63.0744 3.33398 61.5341 6.00065L34.9637 52.0031Z" />
        </svg>
      ),
    },
    {
      id: "nav5",
      svg: (
        <svg
          width="63"
          height="54"
          viewBox="0 0 63 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer fill-[#DDDEDC] hover:fill-[#FE9C28]`}
        >
          <path d="M28.0363 1.99693C29.576 -0.668916 33.424 -0.668913 34.9637 1.99694L61.5341 47.9994C63.0744 50.6661 61.1499 54 58.0704 54L4.92962 54C1.8501 54 -0.0743583 50.6661 1.46587 47.9994L28.0363 1.99693Z" />
        </svg>
      ),
    },
    {
      id: "nav6",
      svg: (
        <svg
          width="63"
          height="54"
          viewBox="0 0 63 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer fill-[#DDDEDC] hover:fill-[#FE9C28]`}
        >
          <path d="M34.9637 52.0031C33.424 54.6689 29.576 54.6689 28.0362 52.0031L1.46587 6.00064C-0.0743666 3.33397 1.8501 3.26262e-05 4.92962 3.28955e-05L58.0704 3.75412e-05C61.1499 3.78104e-05 63.0744 3.33398 61.5341 6.00065L34.9637 52.0031Z" />
        </svg>
      ),
    },
    {
      id: "nav7",
      svg: (
        <svg
          width="40"
          height="54"
          viewBox="0 0 40 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 cursor-pointer ${
            active === "nav7"
              ? "fill-black" // Active = Black, no hover effect
              : "fill-[#DDDEDC] hover:fill-[#FE9C28]" // Inactive = Gray, hover = Orange
          }`}
        >
          <path d="M31.2049 0C29.7884 0 28.4776 0.749131 27.7586 1.96954L21.9746 11.7868C21.6121 12.4021 21.4209 13.1032 21.4209 13.8173V31.7607C21.4209 33.9699 19.63 35.7607 17.4209 35.7607H10.1365C8.72006 35.7607 7.40922 36.5099 6.6902 37.7303L0.667267 47.9529C-0.903774 50.6194 1.01868 53.9834 4.11359 53.9834H36C38.2091 53.9834 40 52.1925 40 49.9834V4C40 1.79086 38.2091 0 36 0H31.2049Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-auto left-1/2 mt-8 w-[693px] h-[102px] bg-[#EDEEED] rounded-[15px] flex items-center px-6">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id, item.route)}
        >
          {item.svg}
        </button>
      ))}
      <button
        onClick={() => {
          setActive("work");
          navigate("/projects");
        }}
        className={`font-textMedium ml-6 w-[123px] h-[54px] rounded-[15px] text-[22px] font-medium leading-[26px] transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white flex items-center justify-center ${
          active === "work" ? "bg-black text-white" : "bg-[#DDDEDC] text-black"
        }`}
      >
        Work
      </button>
      <button
        onClick={() => {
          setActive("about");
          navigate("/about");
        }}
        className={`font-textMedium ml-6 w-[125px] h-[54px] rounded-[15px] text-[22px] font-medium leading-[26px] flex items-center transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white  justify-center ${
          active === "about" ? "bg-black text-white" : "bg-[#DDDEDC] text-black"
        }`}
      >
        About
      </button>
    </div>
  );
}
