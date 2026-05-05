import styles from './styles/DiscordWidget.module.css';

export default function DiscordWidget({serverID, theme}: any) {
    const link = `https://discord.com/widget?id=${serverID}&theme=${theme}`;
    return (
        <iframe src={link} className={styles.widget} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    )
}