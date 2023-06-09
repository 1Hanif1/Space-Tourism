import classes from "./Home.module.css";
export default function Home() {
  return (
    <section className={classes.section}>
      <div className={classes.left}>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <p>SPACE</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={classes.right}>
        <div className={classes.button}>EXPLORE</div>
      </div>
    </section>
  );
}
