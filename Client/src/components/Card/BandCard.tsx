import { BandCardProps } from "../../interfaces/fakeBand";
import styles from "./bandCard.module.css";


const BandCard: React.FC<BandCardProps> = ({ band }) => {
    
    return (
        <section className={styles.mainCard}>
            <img className={styles.cardImg} src={band.bandImage} alt={band.band} />
            <div className={styles.cardDetails}>
                <ul className={styles.detailedList}>
                    <li>Name: {band.band}</li>
                    <li>Discs: {band.discs}</li>
                    <li>Genres: {band.genres}</li>
                    <li>Start Date: {band.startDate}</li>
                    <li>Years active: {band.activeYears}</li>
                    <li>Members: {band.numbOfMembers}</li>
                </ul>
            </div>
        </section>
    )

}

export default BandCard;