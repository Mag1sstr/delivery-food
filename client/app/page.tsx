import Header from "@/components/Header";
import Products from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Fibo | Главная",
  description: "Доставка еды.",
};
export default function Home() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}
