import React, { useEffect, useState } from "react";

function Education() {
  const [toColor, setToColor] = useState("");
  const [fromColor, setFromColor] = useState("");

  useEffect(() => {
    const colorChange1 = () => {
      setFromColor("purple-500");
      setToColor("blue-400");
    };
    const colorChange2 = () => {
      setFromColor("blue-400");
      setToColor("purple-500");
    };

    const animationInterval1 = setInterval(colorChange1, 1000);
    const animationInterval2 = setInterval(colorChange2, 2000);

    return () => {
      clearInterval(animationInterval1);
      clearInterval(animationInterval2);
    };
  }, [toColor]);

  return (
    <>
      <p
        className={`text-2xl md:text-4xl font-oswald bg-gradient-to-r from-${fromColor} to-${toColor} text-transparent bg-clip-text text-center font-bold mt-2 mb-5`}
      >
        Educational Qualification
      </p>
      <div className="md:grid grid-cols-2 hidden">
        <div className="border-r-2 md:border-r-4 border-[#38BDF8] py-5">
          <p className="text-orange-400 text-right font-poppins tracking-tight">
            <div className="text-[9px] md:text-2xl inline-block">
              T . JOHN COLLEGE (2021-2023)
              <br />
              <span className="text-[8px] md:text-lg">
                Bangalore University.
              </span>
              <br />
              MCA(Master Of Computer Applications)
            </div>{" "}
            <hr className="w-[10%] md:w-[18%] ml-auto inline-block border-2 border-orange-500" />{" "}
          </p>
          <p className="text-[#8FC708] text-right mt-20 font-poppins tracking-tight">
            <div className="text-[8px] md:text-2xl inline-block">
              KULTIKRI S.C HIGH SCHOOL(H.S)(2016-2018)
              <br />
              <span className="text-[5px] md:text-lg">
                The West Bengal Council of Higher Secondary Education(WBCHSE).
              </span>
              <br />
              H.S(Higher Secondary)
            </div>{" "}
            <hr className="w-[10%] md:w-[18%] ml-auto inline-block border-2 border-[#8FC708]" />{" "}
          </p>
        </div>
        <div className="border-l-2 md:border-l-4 border-[#38BDF8] py-5">
          <p className="text-[#F4E225] text-left mt-20 font-poppins tracking-tight">
            <hr className="w-[10%] md:w-[18%] ml-auto inline-block border-2 border-[#F4E225] mr-1" />
            <div className="text-[9px] md:text-2xl inline-block">
              BELDA COLLEGE (2018-2021)
              <br />
              <span className="text-[8px] md:text-lg">
                Vidyasagar University.
              </span>
              <br />
              BCA(Bachelor Of Computer Applications)
            </div>{" "}
          </p>
          <p className="text-[#08EE69] text-left mt-20 font-poppins tracking-tight">
            <hr className="w-[10%] md:w-[18%] ml-auto inline-block border-2 border-[#08EE69] mr-1" />
            <div className="text-[9px] md:text-2xl inline-block">
              KULTIKRI S.C HIGH SCHOOL(H.S)
              <br />
              <span className="text-[7px] md:text-lg">
                West Bengal Board of Secondary Education(WBBSE).
              </span>
              <br />
              Madhyamik(10th)
            </div>{" "}
          </p>
        </div>
      </div>
      <div className="w-11/12 mr-auto ml-auto md:hidden block">
        <ul className="ml-2">
          <li
            className={`text-black font-poppins border-2 p-5 rounded-sm bg-gradient-to-r from-${fromColor} to-${toColor}`}
          >
            <p className="text-[20px] font-semibold">
              T . JOHN COLLEGE (2021-2023).
            </p>
            <p className="text-[10px] font-semibold">Bangalore University.</p>
            <p className="text-[15px] font-semibold">
              MCA(Master Of Computer Applications).
            </p>
          </li>
          <li
            className={`text-black font-poppins mt-5 border-2 p-5 rounded-sm bg-gradient-to-r from-${toColor} to-${fromColor}`}
          >
            <p className="text-[20px] font-semibold">
              BELDA COLLEGE (2018-2021).
            </p>
            <p className="text-[10px] font-semibold">Vidyasagar University</p>
            <p className="text-[15px] font-semibold">
              BCA(Bachelor Of Computer Applications).
            </p>
          </li>
          <li
            className={`text-black font-poppins mt-5 border-2 p-5 rounded-sm bg-gradient-to-r from-${fromColor} to-${toColor}`}
          >
            <p className="text-[20px] font-semibold">
              KULTIKRI S.C HIGH SCHOOL(H.S)(2016-2018).
            </p>
            <p className="text-[10px] font-semibold">
              The West Bengal Council of Higher Secondary Education(WBCHSE).
            </p>
            <p className="text-[15px] font-semibold">H.S(Higher Secondary).</p>
          </li>
          <li
            className={`text-black font-poppins mt-5 border-2 p-5 rounded-sm bg-gradient-to-r from-${toColor} to-${fromColor}`}
          >
            <p className="text-[20px] font-semibold">
              KULTIKRI S.C HIGH SCHOOL(H.S).
            </p>
            <p className="text-[10px] font-semibold">
              West Bengal Board of Secondary Education(WBBSE).
            </p>
            <p className="text-[15px] font-semibold">Madhyamik(10th).</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Education;
