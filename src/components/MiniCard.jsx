import React from "react";

const MiniCard = ({ children, icon: Icon, img, title, description, color }) => {
  return (
    <div className="MiniCard">
      <div className="MiniCardIconContainer">
        {/* <img src={cardMedia} alt={`imagen de ${title}`} /> */}
        {Icon && (
          <Icon
            className="MiniCardIcon"
            style={{
              fill: `${color} !important`,
              color: `${color} !important`,
            }}
          />
        )}
      </div>
      <div className="MiniCardContent">
        <h3 className="title">{title}</h3>
        <br />
        <h5 className="description">{description}</h5>
        {children}
      </div>
    </div>
  );
};

export default MiniCard;
