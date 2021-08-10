// Site Components
import Heading from "../Heading";

// Styles
import styles from "../../styles/home/workItem.module.scss";

export default function WorkItem() {
  return (
    <div className={styles.item}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <Heading type="h5">Gamers Club</Heading>
        </div>
        <div className={styles.role}>Product Designer</div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            Criando experiências e resolvendo problemas na maior plataforma de
            esportes eletrônicos da América Latina. A Gamers Club é uma
            plataforma onde jogadores podem focar em seu lado competitivo
            jogando campeonatos, ganhando prêmios ou simplesmente jogar por
            diversão com seus amigos.
          </p>
        </div>
        <div className={styles.period}>March 2019 - now</div>
      </div>
    </div>
  );
}
