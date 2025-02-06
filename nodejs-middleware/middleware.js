const ROLES_FILE = __dirname + "/roles.txt";
const fs = require("fs");

const getRoles = () => {
  const rawData = fs.readFileSync(ROLES_FILE, "utf-8");
  return JSON.parse(rawData);
}

//   function getRolePermissions(role) {
//     const roles = getRoles();
//     const roleData = roles.find(r => r.role === role);
//     return roleData ? roleData.scopes : null;
//   }

module.exports = (scope) => (req, res, next) => {
  console.log("data => ", getRoles());
  const userRole = req.headers["x-role"];

  if (!scope) {
    return res.status(200).json({ message: "Ok" });
  }

  if (!userRole) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};
