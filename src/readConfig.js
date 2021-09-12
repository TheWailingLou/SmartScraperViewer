// TODO: if session config does not exist set up flow to walk through set up.
let configExists = true;
let sessionConfig;
try {
  sessionConfig = require("./sessionConfig.json")
} catch (err) {
  configExists = false;
  sessionConfig = { sessionManagerPath: "nonExistent"};
}

const fs = window.require("fs");

const readSessionConfig = () => {
  const path = sessionConfig.sessionManagerPath;
  const fullPath = "/" + path + "/smart_search/session_manager.json"
  const sessionDataExists = fs.existsSync(fullPath)
  if (sessionDataExists) {
    const config = fs.readFileSync(fullPath, {encoding:'utf8', flag:'r'});
    const parsedConfig = JSON.parse(config);
    const firstFile = parsedConfig[0][Object.keys(parsedConfig[0])[0]][0];

    // TODO display first file, then work on adding system to walk through files

  } else {
    throw new Error("Could not find session manager path");
  }
}

export { readSessionConfig  };
