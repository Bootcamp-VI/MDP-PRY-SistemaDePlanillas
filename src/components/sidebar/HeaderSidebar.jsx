import logo from "../../assets/images/logo_top_header_shadow.png";

function HeaderSidebar() {
  return (
    <div
      className="text-center"
      style={{ marginBottom: "24px", marginTop: "16px" }}>
      <img src={logo} alt="Logo MDP" />
    </div>
  );
}

export default HeaderSidebar;
