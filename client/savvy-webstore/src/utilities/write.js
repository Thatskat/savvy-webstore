function getFileFromUrl(downloadUrl) {
  const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${
    import.meta.env.VITE_STORAGE_BUCKET_URL
  }/o/`;
  let fileGlob = downloadUrl.replace(baseUrl, "");
  const indexOfEndPath = fileGlob.indexOf("?");
  fileGlob = fileGlob.substring(0, indexOfEndPath);
  console.log(`Generated File Glob: ${fileGlob}`);
  return fileGlob;
}

export { getFileFromUrl };
