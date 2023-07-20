export const Button = ({btnName , icon, color}) =>{
    return(
        <>        
        <button
        type="button"
        class={`btn btn-${color} mx-2 ${ color ==='light'?'text-secondary':''}`}
        data-bs-dismiss="modal"
      >
        <i className={`fa-regular ${icon} mx-1`}></i> 
        {btnName}
      </button>
      
      </>

    )
}

