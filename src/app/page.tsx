import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./Components/Banner/Banner";
import HomeProducts from "./Components/HomeProducts/HomeProducts";
import CategoryOnHome from "./Components/CategoryOnHome/CategoryOnHome";

export default function Home() {
  return (
    <>
     <CategoryOnHome/>
    <Banner />
    <HomeProducts />
    </>
  );
}
