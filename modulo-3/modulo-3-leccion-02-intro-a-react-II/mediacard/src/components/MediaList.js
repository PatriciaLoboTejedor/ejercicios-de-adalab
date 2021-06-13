import React from "react";
import MediaCard from "./Mediacard";

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cards">
        <h1>Media Cards</h1>
        <ul className="section-cards_list">
          <li>
            <MediaCard
              cardTitle="Bob Dylan"
              cardDate="May 24, 1941"
              image="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
              cardDescription="Bob Dylan (Duluth, Minesota; 24 de mayo de 1941),​ registrado al nacer como Robert Allen Zimmerman, es un músico, compositor, cantante y poeta estadounidense, ampliamente considerado como una de las figuras más prolíficas e influyentes en la música popular del siglo XX y de comienzos del siglo XXI. En 2016 recibió el Premio Nobel de Literatura.​"
              url=""
              numberLikes="37"
              hearthClass="far fa-heart"
            />
          </li>
          <li>
            <MediaCard
              cardTitle="David Bowie"
              cardDate="Jan 08, 1947"
              image="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
              cardDescription="David Robert Jones (Londres, 8 de enero de 1947–Nueva York, 10 de enero de 2016),​ más conocido por su nombre artístico David Bowie, fue un músico y compositor británico de rock, quien ejerció a su vez como actor, productor discográfico, arreglista y diseñador gráfico. Figura importante de la música popular durante casi cinco décadas, Bowie es considerado un innovador, en particular por sus trabajos de la década de 1970 y por su peculiar voz, además de la profundidad intelectual de su obra."
              url=""
              numberLikes="55"
              hearthClass="fas fa-heart"
            />
          </li>
          <li>
            <MediaCard
              cardTitle="John Lennon"
              cardDate="Oct 09, 1940"
              image="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
              cardDescription="ohn Winston Lennon (Liverpool, 9 de octubre de 1940-Nueva York, 8 de diciembre de 1980) fue un artista, músico, multiinstrumentista, cantautor, compositor, poeta, dibujante, productor, escritor, pacifista, activista y actor inglés, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles."
              url=""
              numberLikes="41"
              hearthClass="far fa-heart"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
