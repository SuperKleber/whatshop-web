const slug = (str) => {
  const from = "ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç";
  const to = "AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc";
  const expresionRegular = new RegExp(`['${from}']`);
  try {
    const result = str
      .replace(expresionRegular, (match) => to.charAt(from.indexOf(match)))
      .replace(/\?|¿|!|¡|\.|%|#|"|:|\,/gi, "")
      .replace(/\s|_/gi, "-")
      .replace(/ñ/gi, "n")
      .replace(/--/gi, "-")
      .toLowerCase();
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error con procesar el slug ${str}`);
  }
};
module.exports = slug;
