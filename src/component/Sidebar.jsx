import React from 'react';
import logo from '../img/accordiqlogo.png';
import img1 from '../img/Vector1.png';
import img2 from '../img/Vector2.png';
import img3 from '../img/Vector3.png';
import img4 from '../img/Vector4.png';
import img5 from '../img/Vector5.png';
import img6 from '../img/Vector6.png';
import img7 from '../img/Vector7.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between p-3 h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-5">
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-12 h-auto" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="bg-[#013566] rounded-full flex items-center justify-center w-12 h-12">
            <img src={img1} alt="Icon 1" className="w-6 h-6" />
          </div>
          {[img2, img3, img4, img5].map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-full flex items-center justify-center w-12 h-12 shadow-sm"
            >
              <img src={img} alt={`Icon ${index + 2}`} className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        {[img6, img7].map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-full flex items-center justify-center w-12 h-12 shadow-sm"
          >
            <img src={img} alt={`Icon ${index + 6}`} className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
