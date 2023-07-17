import FormOrganizationalData from "./components/dataEmplLabo/FormOrganizationalData";
import FormWorkerData from "./components/dataEmplLabo/FormWorkerData";
import FormWorkersPension from "./components/dataEmplLabo/FormWorkersPension";

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