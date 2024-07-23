import React, { useEffect, useState } from "react";
import ProfilePic1 from "../../assets/Images/collegephoto.jpeg";
import ProfilePic2 from "../../assets/Images/profile5.png";
import ProfilePic3 from "../../assets/Images/profile6.png";

import { FcPrevious, FcNext } from "react-icons/fc";

function ProfileAnim() {
  const [photoNo, setPhotoNo] = useState(0);
  const photos = [ProfilePic1, ProfilePic2, ProfilePic3];

  useEffect(() => {
    const animateProfile = () => {
      if (photoNo < photos.length - 1) {
        setPhotoNo(photoNo + 1);
      } else {
        setPhotoNo(0);
      }
    };
    const animationInterval = setInterval(animateProfile, 5000);
    return () => {
      clearInterval(animationInterval);
    };
  }, [photoNo]);
  return (
    <div className="flex items-center -mt-8">
      <FcPrevious
        className="mr-5 text-4xl cursor-pointer"
        onClick={() => {
          if (photoNo > 0) {
            setPhotoNo(photoNo - 1);
          } else {
            setPhotoNo(photos.length - 1);
          }
        }}
      />
      <img
        src={photos[photoNo]}
        alt="Loading..."
        className="h-[350px] w-[340px] rounded-full scale-95 p-2 bg-gradient-to-r from-purple-500 to-red-500 shadow-2xl shadow-gray-700 mr-auto ml-auto"
      />
      <FcNext
        className="ml-5 text-4xl cursor-pointer"
        onClick={() => {
          if (photoNo < photos.length - 1) {
            setPhotoNo(photoNo + 1);
          } else {
            setPhotoNo(0);
          }
        }}
      />
    </div>
  );
}

export default ProfileAnim;
