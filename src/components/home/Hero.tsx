import styles from './styles/Hero.module.css';
import BackgroundImage from '../common/BackgroundImage';
import background from '../../assets/hero-bg.png';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />
      <div id="bg-image"><BackgroundImage bg={background}/></div>

      {/* Four nation orbs */}
      <div className={styles.orbs} aria-hidden>
        <span className={`${styles.orb} ${styles.orbWater}`} />
        <span className={`${styles.orb} ${styles.orbEarth}`} />
        <span className={`${styles.orb} ${styles.orbFire}`} />
        <span className={`${styles.orb} ${styles.orbAir}`} />
      </div>


      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleAccent}>ATLAcord</span>
        </h1>
        <p className={styles.subtitle}>
          The largest Discord community for fans of the Avatar Legends franchise <br/>
          Avatar: The Last Airbender, Legend of Korra, Seven Havens, and all other associated media.
        </p>

        <div className={styles.actions}>
          <a href="#join" className={styles.btnPrimary}>Join the Community</a>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden>
        <span>scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}