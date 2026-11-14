import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoImage} alt="Zap Shift" className="h-8 w-8 object-contain" />
      <h3 className="text-[2rem] font-extrabold leading-none tracking-[-0.05em] text-[#0b0b0b]">
        ZapShift
      </h3>
    </div>
  );
};

export default Logo;
