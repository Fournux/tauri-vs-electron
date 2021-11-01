import { readDir } from "@tauri-apps/api/fs";

// path must be array of {name: string, isFile: () => bool, isDirectory () => bool}
export function getFolderContent(path) {
  return readDir(path)
    .then((entries) =>
      entries.map((entry) => ({
        name: entry.name,
        isFile: () => entry.children === null,
        isDirectory: () => !!entry.children,
      }))
    )
    .catch((error) => console.error(error));
}
