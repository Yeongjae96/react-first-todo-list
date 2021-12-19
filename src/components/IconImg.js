import React from "react";
import styled from "styled-components";

function IconImg({src, size}) {
  const getSize = (sizeString) => {
    const result = {
      width: "0px",
      height: "0px",
    };

    sizeString = sizeString || "m";

    switch (sizeString.toLowerCase()) {
      case "s":
        result.width = "16px";
        result.height = "16px";
        break;
      case "m":
        result.width = "32px";
        result.height = "32px";
        break;
      case "l":
        result.width = "64px";
        result.height = "64px";
        break;
    }

    return result;
  };

  const resultSize = getSize(size);

  return <Image src={src} size={resultSize} />;
}
const Image = styled.img`
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
`;

export default IconImg;
