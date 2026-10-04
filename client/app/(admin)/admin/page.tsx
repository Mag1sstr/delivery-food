"use client";

import { useState } from "react";

type Section = "products" | "orders";

export default function AdminPage() {
  const [section, setSection] = useState<Section>("products");

  const handleAdd = () => {};

  const handleEdit = (id: string) => {};

  const handleDelete = (id: string) => {};

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Админ-панель</h1>
            <p className="mt-1 text-sm text-zinc-500">Управление магазином</p>
          </div>

          {section === "products" && (
            <button
              onClick={handleAdd}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              + Добавить товар
            </button>
          )}
        </div>

        <div className="mb-6 flex gap-2 border-b border-zinc-200">
          <button
            onClick={() => setSection("products")}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              section === "products"
                ? "border-zinc-900 text-zinc-900"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Продукты
          </button>

          <button
            onClick={() => setSection("orders")}
            className={`border-b-2 px-4 py-3 text-sm font-medium ${
              section === "orders"
                ? "border-zinc-900 text-zinc-900"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Заказы
          </button>
        </div>

        {section === "products" && (
          <div className="rounded-xl border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 px-5 py-4">
              <h2 className="font-medium">Продукты</h2>
            </div>

            <div className="divide-y divide-zinc-100">
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium">Пепперони</p>
                  <p className="text-sm text-zinc-500">₸ 3 500</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit("1")}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50"
                  >
                    Изменить
                  </button>

                  <button
                    onClick={() => handleDelete("1")}
                    className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    Удалить
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium">Маргарита</p>
                  <p className="text-sm text-zinc-500">₸ 3 000</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit("2")}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50"
                  >
                    Изменить
                  </button>

                  <button
                    onClick={() => handleDelete("2")}
                    className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {section === "orders" && (
          <div className="rounded-xl border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 px-5 py-4">
              <h2 className="font-medium">Заказы</h2>
            </div>

            <div className="divide-y divide-zinc-100">
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium">Заказ #1024</p>
                  <p className="text-sm text-zinc-500">Иван · ₸ 8 500</p>
                </div>

                <button
                  onClick={() => handleEdit("1024")}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50"
                >
                  Открыть
                </button>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="font-medium">Заказ #1023</p>
                  <p className="text-sm text-zinc-500">Алексей · ₸ 6 200</p>
                </div>

                <button
                  onClick={() => handleEdit("1023")}
                  className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50"
                >
                  Открыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
