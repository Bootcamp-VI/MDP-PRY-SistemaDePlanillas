import { SectionCard } from "./SectionCard";

export const ContentSection = ({ sectionName, EmployeData }, index) => {
  console.log("x4", EmployeData);

  const tittle1 = 'Datos del empleo';


  const docIdentidad = [
    { nombre: 'Tipo de documento', valor: EmployeData?.tipoDocumento },
    { nombre: 'Número de documento', valor: EmployeData?.documento },
    { nombre: 'País de emisión', valor: EmployeData?.pais }
  ];

  const datosContacto = [
    { nombre: 'Celular', valor: EmployeData?.datosContacto.celular },
    { nombre: 'Correo personal', valor: EmployeData?.datosContacto.correoPersonal },
    { nombre: 'Correo empresa', valor: EmployeData?.datosContacto.correoEmpresa }
  ]

  const otros =[
    { nombre: 'Sexo', valor: EmployeData?.sexo},
    { nombre: 'Estado civil', valor: EmployeData?.datosExtras.estadoCivil },
    { nombre: 'Grupo sanguineo', valor: EmployeData?.datosExtras.grupoSanguineo }

  ]
  return (
    <>
      <div className="col-12 col-md-6 px-1">
        <SectionCard objetos={docIdentidad} tittle = {'Datos de identidad'}>
        </SectionCard>
      </div>
      <div className="col-12 col-md-6 px-1" >

        <SectionCard objetos={otros} tittle = {'Otros datos'}>

        </SectionCard>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-7 px-1">
          <SectionCard objetos={datosContacto} tittle = {'Datos de contacto'}>

              </SectionCard>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto">
      <div className="col-12 col-md-8 px-1">
        
      </div>
      
      </div> */}
      
      </>
      

  );
}

  // return (
  //   <>
  //     <div className="col-12 col-md-6 px-1">
  //       <SectionCard />
  //     </div>
  //     <div className="col-12 col-md-6 px-1">
  //       <SectionCard />
  //     </div>
  //   </>
  // );