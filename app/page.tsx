import Image from "next/image";
import styles from "./page.module.css";
import Form from "./ui/Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.main__bg}
        src={"/stars.svg"}
        alt={"Background Stars"}
        priority
        fill
      />
      <section className={styles.main__form}>
        <h1>Sign up</h1>
        <Form />
      </section>
    </main>
  );
}
