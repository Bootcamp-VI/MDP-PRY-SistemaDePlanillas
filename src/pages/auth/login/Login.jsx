import { FormLogin } from "./components/FormLogin/FormLogin";
import { LefTextDescription } from "./components/LeftTextDescription/components/Index";
import "./Login.css";

export const Login = () => {

    return (
        <section className="background-radial-gradient overflow-hidden d-flex align-items-center bg-opacity-50">
            <div className="container px-4 py-1 px-md-1 text-center text-lg-start my-5">

                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-8 mb-1 mb-lg-0 text-center mt-sm-4">
                        <LefTextDescription />
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
                        <div className="bg-glass-custom-login card p-4">
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
