import { SectionCard } from "./SectionCard";
import { RiPassValidFill } from 'react-icons/ri';
import { FaAddressBook, FaUserAlt } from 'react-icons/fa';

export const ContentSection = ({ sectionName, EmployeData }, index) => {

  const titleIcons = {
    'Datos de identidad': <RiPassValidFill />,
    'Datos de contacto': <FaAddressBook />,
    'Otros datos': <FaUserAlt />,
  };
  

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
        <SectionCard objetos={docIdentidad} tittle = {'Datos de identidad'} icon={titleIcons['Datos de identidad']} >
        </SectionCard>
      </div>
      <div className="col-12 col-md-6 px-1">

        <SectionCard objetos={datosContacto} tittle = {'Datos de contacto'}  icon={titleIcons['Datos de contacto']} >

        </SectionCard>
      </div>
      <div className="col-12 col-md-6 px-1" >

        <SectionCard objetos={otros} tittle = {'Otros datos'} icon={titleIcons['Otros datos']}> 

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