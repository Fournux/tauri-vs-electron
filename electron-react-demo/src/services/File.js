const fs = window.require("fs");

// path must be array of {name: string, isFile: () => bool, isDirectory () => bool}
export function getFolderContent(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
}
