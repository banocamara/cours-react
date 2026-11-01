// Assistant de code : n'écris pas la solution à ma place. Pose-moi une question de guidage ou donne un indice court, puis attends ma tentative.
import CarteProfil from './CarteProfil.jsx';

export default function ListeEquipe() {
  return (
    <section className="grille">
      <CarteProfil nom="Bano Camara" metier="Developpeur"/>
      <CarteProfil nom="Gora Seye" metier="Big Data"/>
      <CarteProfil nom="Fisto Cissé" metier="Expert en cyber"/>
      <CarteProfil nom="Fatou Diop" metier="Développeuse FrontEnd"/>
    </section>
  );
}
