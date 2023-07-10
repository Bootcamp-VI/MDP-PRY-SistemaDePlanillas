import { UserHeader } from "./UserHeader";
import { UserContent } from "./UserContent";

export const Modal = () => {
  return (
    <>
      <div className="row m-3">
        <UserHeader />
        <UserContent />
      </div>
    </>
  );
};
