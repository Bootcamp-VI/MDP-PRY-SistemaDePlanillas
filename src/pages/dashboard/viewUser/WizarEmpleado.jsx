import { SectionCard } from "./SectionCard";

function WizarEmpleado({ sectionName, EmployeData }, index) {
  console.log("x8", EmployeData);
 
  const datosEmpleo = [
    { nombre: 'Fecha de ingreso', valor: EmployeData.datosLaborales.fechaIngreso },
    { nombre: 'Codigo de empleado', valor: EmployeData.codigoEmpleado },
    { nombre: 'Cargo', valor: EmployeData.datosLaborales.cargo },
    { nombre: 'Área', valor: EmployeData.datosLaborales.arealLaboral },
    { nombre: 'Tipo de contrato', valor: EmployeData.datosLaborales.tipoContrato }
  ]
 

  const datosSalariales = [
    { nombre: 'Salario base', valor: EmployeData.datosLaborales.salario },
    { nombre: 'Categoría ocupacional', valor: EmployeData.datosLaborales.categoriaOcupacional},
    { nombre: 'Bonificaciones' , valor: EmployeData.datosLaborales.bonificaciones },
    { nombre: 'Descuentos' , valor: EmployeData.datosLaborales.descuentos },
  ];


  const datosHorario = [
    { nombre: 'Horario de trabajo', valor: EmployeData.datosLaborales.horario },
    { nombre: 'Días laborales', valor: EmployeData.datosLaborales.diasLaborales},
    { nombre: 'Horas extras', valor: EmployeData.datosLaborales.horasExtras }

  ]
  return (
    <>
      <div className="col-12 col-md-6 px-1">
        <SectionCard objetos={datosEmpleo} tittle = {'Datos del empleo'}>
        </SectionCard>
      </div>
      <div className="col-12 col-md-6 px-1">

        <SectionCard objetos={datosSalariales} tittle = {'Datos Salariales'}>

        </SectionCard>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-7 px-1">
          <SectionCard objetos={datosHorario} tittle = {'Horario'}>

          </SectionCard>
          </div>
        </div>
      </div>

    </>


  );
    // return (
    //   <>
    //     <div className="col-12 col-md-6 px-1">
    //       <h5>Datos de empleo</h5>
    //       <div className="card p-2 mb-2">
    //         <div className="container">
    //           <p className="mb-0">Fecha de Ingreso:</p>
    //           <h5 className="mt-0">31 de Mayo 2023</h5>
    //           <p className="mb-0">Código del empleado</p>
    //           <h5 className="mt-0">000777</h5>
  
    //           <p className="mb-0">Cargo:</p>
    //           <h5 className="mt-0">Analista Programador</h5>
  
    //           <p className="mb-0">Área o departamento:</p>
    //           <h5 className="mt-0">Area de TI</h5>
  
    //           <p className="mb-0">Tipo de contrato::</p>
    //           <h5 className="mt-0">RxH</h5>
    //         </div>
    //       </div>
  
    //       <h5>Datos Salariales</h5>
    //       <div className="card p-2 mb-2">
    //         <div className="container">
    //           <p className="mb-0">Salario base:</p>
    //           <h5 className="mt-0">400</h5>
    //           <p className="mb-0">Categoría ocupacional:</p>
    //           <h5 className="mt-0">Profesional</h5>
  
    //           <p className="mb-0">Bonificaciones o incentivos:</p>
    //           <h5 className="mt-0">-</h5>
  
    //           <p className="mb-0">Descuentos</p>
    //           <h5 className="mt-0">399</h5>
    //         </div>
    //       </div>
  
    //       <h5>Vacaciones y permisos</h5>
    //       <div className="card p-2 mb-2">
    //         <div className="container">
    //           <p className="mb-0">Fecha de inicio y fin de las vacaciones:</p>
    //           <h5 className="mt-0">-</h5>
    //           <p className="mb-0">Permiso por enfermedad</p>
    //           <h5 className="mt-0">-</h5>
  
    //           <p className="mb-0">Permiso por maternidad/paternidad</p>
    //           <h5 className="mt-0">-</h5>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-12 col-md-6">
    //       <h5>Datos de afiliación</h5>
    //       <div className="card p-2 mb-2">
    //         <div className="container">
    //           <p className="mb-0">
    //             Número de Seguro Social (NSS):Tipo de Documento
    //           </p>
    //           <h5 className="mt-0">-</h5>
    //           <p className="mb-0">AFP (Administradora de Fondos de Pensiones):</p>
    //           <h5 className="mt-0">-</h5>
  
    //           <p className="mb-0">CTS (Compensación por Tiempo de Servicios):</p>
    //           <h5 className="mt-0">-</h5>
  
    //           <p className="mb-0">Essalud (Seguro Social de Salud):</p>
    //           <h5 className="mt-0">-</h5>
    //         </div>
    //       </div>
    //       <h5>Datos de horario laboral</h5>
    //       <div className="card p-2 mb-2">
    //         <div className="container">
    //           <p className="mb-0">Horario de trabajo (inicio y fin):</p>
    //           <h5 className="mt-0">-</h5>
    //           <p className="mb-0">Días laborables:</p>
    //           <h5 className="mt-0">-</h5>
  
    //           <p className="mb-0">Horas extras:</p>
    //           <h5 className="mt-0">-</h5>
    //         </div>
    //       </div>
    //       <h5>Datos bancarios</h5>
    //       <div className="card p-2 mb-4">
    //         <div className="container">
    //           <p className="mb-0">Número de cuenta:</p>
    //           <h5 className="mt-0">-</h5>
    //           <p className="mb-0">Banco de la cuenta:</p>
    //           <h5 className="mt-0">-</h5>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // );
  }
  
  export default WizarEmpleado;
  