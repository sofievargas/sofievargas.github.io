import React from "react";

const Projects = () => {
    return(

        <div className= "flex flex-col w-5/6 bg-customLightBlue rounded-xl text-xl text-customBrown font-amarante font-xl m-4 p-8">
           <h1 className="mb-4">
            Projects
            </h1>
            <div className="overflow-x-scroll snap-x snap-mandatory flex space-x-4">

           <div className=" w-5/6 space-x-4 snap-center shrink-0 flex flex-col items-center justify-center text-xl">
                <img src="/public/SunMaps.png" />
                <p className="mt-2 text-center text-lg font-bold">SunMaps</p>
                <p className="mt-2 text-center text-sm ">
                Our two member partnership harnessed Python, HTML, Javascript, VS Code, and the libraries Leaflet, 
                GeoPandas, and Pandas to design an interactive map of Phoenix containing urban heat information and
                relevant infrastructure solutions at up to 100 square meters spatial resolution. Was personally in 
                charge of developing the frontend interactive map and the overlay of datasets and corresponding information.
                Analyzed datasets from urban heat experts at ASU on mean radiant temperature and local climate zones; 
                accumulated findings to identify infrastructure solutions with projected temperature reductions ranging from 5 
                to >90 percent.
                </p>
            </div>

            <div className=" w-5/6 space-x-4 snap-center shrink-0 flex flex-col items-center justify-center text-xl">
                <img src="/public/DisasterRelief.jpg" />
                <p className="mt-2 text-center text-lg font-bold">ASU Disaster Relief</p>
                <p className="mt-2 text-center text-sm ">
                Collaborated with three other students as part of ASU’s flagship hackathon. 
                Used Python, Javascript, HTML, AWS and the libraries Leaflet and Pandas
                 to develop an interactive website mapping 30 campus bathrooms on 
                 5 different rubric categories; along with space for users to leave 
                 reviews on bathrooms not yet mapped.
                </p>
            </div>


            <div className="snap-center shrink-0 flex justify-center">
                <img src="/public/SunMaps.png" />
            </div>
            <div className="snap-center shrink-0 flex justify-center">
                <img src="/public/SunMaps.png" />
            </div>

            </div>
        </div>


    );
};
export default Projects;