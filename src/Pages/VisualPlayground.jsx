import React from "react";
import Video from "../components/Video";
import Title from "../components/Title";
import Services from "../components/Services";
import Fgrid from "../components/Fgrid";
import FourGrid from "../components/FourGrid";

function VisualPlayground() {
  return (
    <div className="px-[50px] sm:px-[145px] md:px-[361px]">
      <Video />
      <p className="mt-2 md:mt-8">A curated mix of visuals — from real client projects to personal design explorations.</p>
      <p>Posters, logos, web and UI designs, all gathered here as a snapshot of my visual style and creative range.</p>
      <img src="../../images/visualplayground/v1.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
      <img src="../../images/visualplayground/v2.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v3.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v4.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v5.png" alt="" className="rounded-xl"/>
      </div>
      <img src="../../images/visualplayground/v6.jpg" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
      <img src="../../images/visualplayground/v7.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v8.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v9.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v10.png" alt="" className="rounded-xl"/>
      </div>
      <img src="../../images/visualplayground/v11.png" alt="" className="rounded-xl mt-2 md:mt-6 w-full object-cover"/>
      <img src="../../images/visualplayground/v12.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
      <img src="../../images/visualplayground/v13.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v14.png" alt="" className="rounded-xl"/>
      </div>
      <img src="../../images/visualplayground/v15.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v16.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <div className="grid grid-cols-2 gap-2 md:gap-6 mt-2 md:mt-6">
      <img src="../../images/visualplayground/v17.png" alt="" className="rounded-xl"/>
      <img src="../../images/visualplayground/v18.png" alt="" className="rounded-xl w-full"/>
      </div>
      <img src="../../images/visualplayground/v19.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v20.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v21.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v22.png" alt="" className="rounded-xl mt-2 md:mt-6 w-full object-cover"/>
      <img src="../../images/visualplayground/v23.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v24.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      <img src="../../images/visualplayground/v25.png" alt="" className="rounded-xl mt-2 md:mt-6"/>
      
    </div>
  );
}

export default VisualPlayground;
