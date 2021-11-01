import Paper from "@mui/material/Paper";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderIcon from "@mui/icons-material/Folder";

import "./Entry.scss";

export default function Entry({ entry, onClick }) {
  const isFile = entry.isFile();
  return (
    <Paper
      key={entry.name}
      className="entry-paper"
      sx={
        !isFile
          ? {
              ":hover": { cursor: "pointer", backgroundColor: "#f5f5f5" },
            }
          : {}
      }
      variant="outlined"
      onClick={() => onClick?.(entry)}
    >
      {isFile ? <InsertDriveFileIcon /> : <FolderIcon />}
      <div>{entry.name}</div>
    </Paper>
  );
}
