import React from "react";

const FootInfor: React.FC = () => {
  return (
    <div className="flex flex-col py-2">
      <div className="border-y-4 p-9">
        <img
          src="/images/mediaLogo.png"
          alt="Media Road Logo"
          className="h-16"
        />
      </div>
      <div className="p-9">
        <button>개인정보처리방침</button>
        <p className="text-xl mt-6">
          Copyrights © MediaRaod. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FootInfor;
