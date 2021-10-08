import CardRazasPerros from "components/CardRazasPerros";
import borderCollie from "media/border.jpg"; //Importar imagen broder-collie y abajo src{boderCollie}
import rhodesian from "media/rhodesian.jpg"; //Importar foto rhodesian

function Index() {
  return (
    <section>
      <h1>Razas de Perros</h1>
      <ul className="breedCardContainer">
        <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie} />
        <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian} />
      </ul>
    </section>
  );
}

export default Index;
