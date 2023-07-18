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
      <div className="col-12 col-md-12 px-1">
        <SectionCard objetos={docIdentidad} tittle = {'Datos de identidad'}>
        </SectionCard>
      </div>
      <div className="col-12 col-md-12 px-1">

        <SectionCard objetos={datosContacto} tittle = {'Datos de contacto'}>

        </SectionCard>
      </div>
      <div className="col-12 col-md-12 px-1" >

        <SectionCard objetos={otros} tittle = {'Otros datos'}>

        </SectionCard>
      </div>
      
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