import React from "react";

function Education() {
  return (
    <>
      <p className="text-2xl md:text-4xl bg-gradient-to-r from-[#08EE69] via-[#a7536f] to-[#38BDF8] text-transparent bg-clip-text text-center font-bold mt-2 mb-5">
        Educational Qualification
      </p>
      <div className="grid grid-cols-2">
        <div className="border-r-2 md:border-r-4 border-[#38BDF8] py-5">
          <p className="text-orange-500 text-right">
            <div className="text-[9px] md:text-2xl inline-block">
              T . JOHN COLLEGE (2021-2023)
              <br />
              <span className="text-[8px] md:text-lg">
                Bangalore University.
              </span>
              <br />
              MCA(Master Of Computer Applications)
            </div>{" "}
            <hr className="w-[10%] md:w-[20%] ml-auto inline-block border-2 border-orange-500" />{" "}
          </p>
          <p className="text-[#8FC708] text-right mt-20">
            <div className="text-[8px] md:text-2xl inline-block">
              KULTIKRI S.C HIGH SCHOOL(H.S)(2016-2018)
              <br />
              <span className="text-[5px] md:text-lg">
                The West Bengal Council of Higher Secondary Ewucation(WBCHSE).
              </span>
              <br />
              H.S(Higher Secondary)
            </div>{" "}
            <hr className="w-[10%] md:w-[20%] ml-auto inline-block border-2 border-[#8FC708]" />{" "}
          </p>
        </div>
        <div className="border-l-2 md:border-l-4 border-[#38BDF8] py-5">
          <p className="text-[#F4E225] text-left mt-20">
            <hr className="w-[10%] md:w-[20%] ml-auto inline-block border-2 border-[#F4E225] mr-1" />
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
          <p className="text-[#08EE69] text-left mt-20">
            <hr className="w-[10%] md:w-[20%] ml-auto inline-block border-2 border-[#08EE69] mr-1" />
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
    </>
  );
}

export default Education;
