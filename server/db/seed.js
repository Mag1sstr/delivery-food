import "dotenv/config";
import { readFileSync } from "node:fs";

import { pool } from "./pool.js";
import { pizzas } from "../data/pizzas.js";

async function seed() {
  try {
    // Создаём таблицы
    const schema = readFileSync("./db/schema.sql", "utf-8");

    await pool.query(schema);

    console.log("Таблицы созданы");

    // Добавляем пиццы
    for (const pizza of pizzas) {
      await pool.query(
        `
          INSERT INTO pizzas (
            name,
            description,
            image,
            prices,
            toppings
          )
          VALUES ($1, $2, $3, $4, $5)
        `,
        [
          pizza.name,
          pizza.description,
          pizza.image,
          JSON.stringify(pizza.prices),
          JSON.stringify(pizza.toppings),
        ],
      );
    }

    console.log(`Добавлено пицц: ${pizzas.length}`);
  } catch (error) {
    console.error("Ошибка seed:", error);
  } finally {
    await pool.end();
  }
}

seed();
