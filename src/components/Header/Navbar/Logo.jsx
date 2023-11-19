import logo from "../../../image/rsz_logo2.png";
const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt="" />
      <h2 className="font-semibold text-lg">
        {" "}
        <span className="italic text-blue-600 text-4xl">Donation</span> Campaign
      </h2>
    </div>
  );
};

export default Logo;
