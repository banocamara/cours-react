// Assistant de code : n'écris pas la solution à ma place. Pose-moi une question de guidage ou donne un indice court, puis attends ma tentative.
function CarteProfil() {
  function signalerClic() {
    console.info('Profil consulté');
  }

  return (
    <>
      <h2 className="titre-profil">Moussa Diallo</h2>
    <img src="/avatar.svg" alt="Portrait illustré de Moussa"/>
    <form>
      <label htmlFor="presentation">Ta présentation</label>
      <input id="presentation" className="presentation" />
      <button type ="button" onClick={signalerClic}>Enregistrer</button>
    </form>
    </>
    
  );
}
  export default CarteProfil;


