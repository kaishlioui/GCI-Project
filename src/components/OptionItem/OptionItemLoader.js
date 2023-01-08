import ContentLoader from "react-content-loader";

// styles
import { StyledOptionItemLoader } from "./OptionItemLoader.styled";

const OptionItemLoader = () => {
  return (
    <StyledOptionItemLoader>
      <ContentLoader speed={2} width="100%" height={365} backgroundColor="#d9d9d9" foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="200" />
        <rect x="0" y="216" rx="0" ry="0" width="70%" height="16" />
        <rect x="0" y="238" rx="0" ry="0" width="30%" height="16" />
        <rect x="0" y="272" rx="0" ry="0" width="100px" height="30" />
        <rect x="0" y="318" rx="0" ry="0" width="100%" height="47" />
      </ContentLoader>
    </StyledOptionItemLoader>
  );
};

export default OptionItemLoader;
