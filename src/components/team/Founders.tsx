import { staffteam } from '@/data/team';
import styles from './styles/Founders.module.css';
import background from '../../assets/team-bg.png';
import BackgroundImage from '../common/BackgroundImage';
import Avatar from './Avatar';

export default function Founders() {
  let WL = staffteam.filter(f => f.role === 'White Lotus');
  let Sentry = staffteam.filter(f => f.role === 'Sentry');
  let DaiLi = staffteam.filter(f => f.role === 'Dai Li');
  return (
    <section className={styles.section}>
      <div><BackgroundImage bg={background} aria-hidden/></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet The Team</h2>
          <p className={styles.subtitle}>
            None of this happens without people who showed up and kept showing up.
          </p>
        </div>
        <h2 className={styles.roleTitle}>White Lotus</h2>
        <p className={styles.roleSubtitle}>The server admins. They handle operations regarding server management.</p>
        <div className={styles.grid}>
          {WL.map((f) => (
            <div key={f.name} className={`${styles.card}`}>
              <div className={styles.avatar}>
                <Avatar user={f.id} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{f.name}</h3>
                <p className={styles.joined}>Joined on {f.joined.toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                })}</p>
                <p className={styles.bio}>{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.roleTitle}>Sentries</h2>
        <p className={styles.roleSubtitle}>Sentries handle community moderation, as well as having a larger role in day-to-day community operations.</p>
        <div className={styles.grid}>
          {Sentry.map((f) => (
            <div key={f.name} className={`${styles.card}`}>
              <div className={styles.avatar}>
                <Avatar user={f.id} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{f.name}</h3>
                <p className={styles.joined}>Joined on {f.joined.toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                })}</p>
                <p className={styles.bio}>{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className={styles.roleTitle}>Dai Li</h2>
        <p className={styles.roleSubtitle}>The Dai Li, together with Sentries, enforce our rules and maintain a friendly environment.</p>
        <div className={styles.grid}>
          {DaiLi.map((f) => (
            <div key={f.name} className={`${styles.card}`}>
              <div className={styles.avatar}>
                <Avatar user={f.id} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{f.name}</h3>
                <p className={styles.joined}>Joined on {f.joined.toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                })}</p>
                <p className={styles.bio}>{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}