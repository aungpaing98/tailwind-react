import React from "react";

function Union() {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="mx-10 md:mx-16 lg:mx-36 md:pt-20 pt-10">
      {/* Title */}
      <div className="flex space-x-9 items-center md:mb-10 mb-4">
        <h1 className="text-2xl md:text-4xl inline-block text-cyan-900 tracking-tight w-64">
          THE UNION
        </h1>
        <div className="hidden sm:inline-block h-0.5 w-full bg-cyan-900 "></div>
      </div>

      {/* Body  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Mobile view  */}
        <div className="md:hidden flex flex-col items-center">
          <img src={`${publicURL}/utils/su_logo_large.png`} alt="YTU SU Logo" />
          <h1 className="text-cyan-900 text-xl tracking-tight text-center mt-4">
            Yangon Technological University Student's Union
          </h1>
        </div>
        <p className="text-justify md:pr-5 lg:pr-10 md:pt-0 pr-2 pt-5 md:text-base text-xs">
          YTU Students' Union is the main student body of the university,
          re-established in 2014 with the aim of bridging between the university
          administration and the students, and revitalization of a vivid campus
          life and extra-curricular activities. The Union consists of a number
          of clubs and associations, actively run by the students ourselves, in
          the fields of languages, arts, music, sports, science and technology.
          Since its establishment, YTU Students’ Union has raised a sequence of
          festive and lively events, fierce competitions every year so as to
          render rooms for further development of soft skills, technological
          competency as well as volunteering opportunities for students.
          Currently, YTU Students’ Union has reached to its Sixth Term of
          Central Executive Committee, functioning at its utmost to fulfill the
          main objectives and for the greater good of YTU students.
        </p>

        {/* Desktop view  */}
        <div className="hidden md:flex flex-col items-center md:pl-5 lg:pl-10">
          <img src={`${publicURL}/utils/su_logo_large.png`} alt="YTU SU Logo" />
          <h1 className="text-cyan-900 text-4xl tracking-tight text-center my-10">
            Yangon Technological University Student's Union
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Union;
