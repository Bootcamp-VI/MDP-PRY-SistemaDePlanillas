import { FormAddressData } from "./components/dataEmplBirthAddress/FormAddressData";
import { FormBirthData } from "./components/dataEmplBirthAddress/FormBirthData";

export const FormDataPerson = () => {
  return (
    <>
      <div className="container-fluid border rounded bg-light p-0">
        <div className="col-md-12 col-lg-12 ">
          <FormBirthData />
          <FormAddressData />
        </div>
      </div>
    </>
  );
};
