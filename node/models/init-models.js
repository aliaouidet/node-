import { DataTypes } from "sequelize";
import _article from "./article";
import _categorie from "./categorie";
import _login from "./login";
import _scategorie from "./scategorie";

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var login = _login(sequelize, DataTypes);
  var scategorie = _scategorie(sequelize, DataTypes);

  scategorie.belongsTo(categorie, { as: "categorie", foreignKey: "categorie_id"});
  categorie.hasMany(scategorie, { as: "scategories", foreignKey: "categorie_id"});
  article.belongsTo(scategorie, { as: "scategorie", foreignKey: "scategorieid"});
  scategorie.hasMany(article, { as: "articles", foreignKey: "scategorieid"});

  return {
    article,
    categorie,
    login,
    scategorie,
  };
}
const _initModels = initModels;
export { _initModels as initModels };
const _default = initModels;
export { _default as default };