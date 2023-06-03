import { Router } from "express";
var router = Router();
import db from "../models";
const Categorie = db.categorie;
router.post("/", async (req, res) => {
  await Categorie.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
router.get("/", async (req, res) => {
  await Categorie.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories.",
      });
    });
});

router.get("/:categorieId", async (req, res) => {
  await Categorie.findByPk(req.params.categorieId)
    .then((data) => {
      if (data) res.send(data);
      else res.send({ message: "not found" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving categories.",
        });
    });
});
router.delete("/:categorieId", async (req, res) => {
  const { categorieId } = req.params;
  await Categorie.findByPk(categorieId)
    .then(async (cat) => {
      await cat
        .destroy()
        .then(() => {
          res.send(`Category num ${cat.id} is removed`);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    })
    .catch((err) => {
      res.json({ message: "Not Found" });
    });
});
router.put("/:categorieId", async (req, res) => {
  const { categorieId } = req.params;

  await Categorie.update(req.body, {
    where: {
      id: categorieId,
    },
  })
    .then((result) => {
      if (result[0] != 0) res.json("Edited record");
      else res.send({ message: "not found" });
    })
    .catch((err) => {
      res.send(err);
    });
});

export default router;
