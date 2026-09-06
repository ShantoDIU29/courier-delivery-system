import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logoImage} alt="Zap Shift" />
      <h3 className="text-3xl font-bold">zapShift</h3>
    </div>
  );
};

export default Logo;
