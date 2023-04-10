import Swal from "sweetalert2"

export  function alertSA(icono, titulo, texto, ) {
  return (
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
        showConfirmButton: true,
        timer: 8000,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    })
  )
}
