import { BandCardProps } from "../../interfaces/fakeBand";
import styles from "./bandCard.module.css";


const BandCard: React.FC<BandCardProps> = ({ band }) => {
    
    return (
        <section className={styles.mainCard}>
            <img className={styles.cardImg} src={band.bandImage} alt={band.band} />
            <div className={styles.cardDetails}>
                <ul className={styles.detailedList}>
                    <h3>Name: {band.band}</h3>
                    <br />
                    <li >Discs: {band.discs ? band.discs.map((disc, index) => {
                        return <ul className={styles.discList} key={index}><li>{disc}</li></ul>
                    }):null}</li>
                    <br />
                    <li>Genres: {band.genres ? band.genres.map((gen, index) => {
                        return <ul className={styles.discList} key={index}><li>{gen}</li></ul>
                    }):null}</li>
                    <br />
                    <li>Start Date: {band.startDate}</li>
                    <li>Years active: {band.activeYears}</li>
                    <li>Members: {band.numbOfMembers}</li>
                </ul>
            </div>
        </section>
    );
}

export default BandCard;