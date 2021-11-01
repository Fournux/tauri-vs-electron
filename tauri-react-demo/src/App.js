import { getFolderContent } from "./services/File";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Entry from "components/Entry";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./App.scss";

const ROOT = "C:/";

function App() {
  const [entries, setEntries] = useState([]);
  const [currentPath, setCurrentPath] = useState(ROOT);

  useEffect(() => {
    getFolderContent(currentPath).then(setEntries);
  }, [currentPath]);

  const handleEntryClick = (entry) => {
    if (entry.isDirectory()) {
      setCurrentPath((prevPath) => prevPath + "/" + entry.name);
    }
  };

  const handleParent = () => {
    if (currentPath !== ROOT) {
      setCurrentPath((prevPath) =>
        prevPath.substring(0, prevPath.lastIndexOf("/"))
      );
    }
  };

  console.log("entries", entries);

  return (
    <div className="App">
      <div className="header">
        <ArrowUpwardIcon onClick={handleParent} />
        <span className="current-path">{"Current path: " + currentPath} </span>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {entries?.map((entry) => (
          <Entry entry={entry} onClick={handleEntryClick} />
        ))}
      </Box>
    </div>
  );
}

export default App;
