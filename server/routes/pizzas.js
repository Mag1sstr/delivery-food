import { Router } from "express";
import { pool } from "../db/pool.js";

const router = Router();

router.get("/", async (req, res) => {
  const { sort } = req.query;

  const allowedSorts = {
    price_asc: "(prices->>'md')::int ASC",
    price_desc: "(prices->>'md')::int DESC",
    id_asc: "id ASC",
  };

  try {
    const result = await pool.query(`
      SELECT *
      FROM pizzas
      ORDER BY ${allowedSorts[sort] || "id"}
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении пицц",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
        SELECT *
        FROM pizzas
        WHERE id = $1
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Пицца не найдена",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Ошибка при получении пиццы",
    });
  }
});

export default router;
