import { Router } from "express";
var router = Router();
import db from "../models";
const SCategorie = db.scategorie;
const Categorie = db.categorie;
router.get("/", async (req, res) => {
  await SCategorie.findAll({
    include: [{ model: Categorie, as: "categorie" }],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sous catégorie.",
      });
    });
});
router.post("/", async (req, res) => {
  await SCategorie.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
router.get("/:scategorieId", async (req, res) => {
  await SCategorie.findByPk(req.params.scategorieId)
    .then((data) => {
      if (data) res.send(data);
      else res.send({ message: "not found" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while  retrieving scategories.",
        });
    });
});
router.delete("/:scategorieId", async (req, res) => {
  const { scategorieId } = req.params;
  await SCategorie.findByPk(scategorieId)
    .then(async (cat) => {
      await cat
        .destroy()
        .then(() => {
          res.send(`SCategorie num ${cat.id} est supprimee`);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    })
    .catch((err) => {
      res.json({ message: "Not Found" });
    });
});
router.put("/:scategorieId", async (req, res) => {
  const { scategorieId } = req.params;

  await SCategorie.update(req.body, {
    where: {
      id: scategorieId,
    },
  })
    .then((result) => {
      if (result[0] != 0) res.json("Enregistrement modifié");
      else res.send({ message: "not found" });
    })
    .catch((err) => {
      res.send(err);
    });
});

export default router;
