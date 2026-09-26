import { Link } from "react-router-dom";

export const HomeLogoAncher = ({
  className = "",
  disableLink = false,
}) => {
  return (
    <div className={`${className}`}>
      {disableLink ? (
        <img className={`block w-full`} src={"LogoWText.png"}></img>
      ) : (
        <Link to="/" replace={true}>
          <img className={`block w-full`} src={"LogoWText.png"}></img>
        </Link>
      )}
    </div>
  );
};
