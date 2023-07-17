import FormOrganizationalData from "./components/dataEmplComp/FormOrganizationalData";
import FormWorkerData from "./components/dataEmplComp/FormWorkerData";
import FormWorkersPension from "./components/dataEmplComp/FormWorkersPension";

export const FormDataEmpl = () => {
  return (
    <>
      <div className="container-fluid border rounded bg-light p-0">
        <div className="col-md-12 col-lg-12 ">
          <FormWorkerData/>
          <FormWorkersPension/>
          <FormOrganizationalData/>
        </div>
      </div>
    </>
  );
};