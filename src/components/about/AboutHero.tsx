import styles from './styles/AboutHero.module.css';
 
export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />
 
      <div className={styles.content}>
        <p className={styles.eyebrow}>Our Story</p>
        <h1 className={styles.title}>
          Born from a shared<br />
          <span className={styles.accent}>love of ATLA</span>
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod. 
          Sed at arcu tincidunt, malesuada nibh sed, ultrices odio. Curabitur sed semper magna. 
          Nullam mollis mauris ut nisl finibus vulputate. 
          Morbi finibus ante ac diam rutrum gravida. Cras gravida vel lorem id porttitor.
        </p>
      </div>
 
      <div className={styles.divider} aria-hidden>
        <span>〜</span>
        <span>⬡</span>
        <span>△</span>
        <span>◎</span>
      </div>
    </section>
  );
}