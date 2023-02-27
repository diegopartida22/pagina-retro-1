function cambiarPagina(url) {
  $.ajax({
    url: url,
    dataType: "html",
    success: function (response) {
      // Eliminar el contenido que viene después de #paginaNueva
      $("#paginaNueva").nextAll().remove();

      $("#paginaNueva").html(response);

      // Obtener el nombre del archivo HTML
      var nombreArchivo = url.split("/").pop();

      // Obtener el elemento link correspondiente al CSS
      var linkCSS = document.querySelector("link[href='style.css']");

      // Cambiar el href del linkCSS al CSS correspondiente
      linkCSS.href = "pages/" + nombreArchivo.split(".")[0] + ".css";
    },
  });
  return false;
}
