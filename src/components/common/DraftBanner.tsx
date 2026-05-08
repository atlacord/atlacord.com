import styles from './styles/DraftBanner.module.css';

export default function DraftBanner() {
    return (
        <div id="draft-banner">
            <p className={styles.draft}>
                WORK IN PROGRESS
            </p>
        </div>
    )
}