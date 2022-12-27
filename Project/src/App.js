import React, { useEffect, useState } from "react";
import Header from "./componenti/ParteStatica/Header";
import SezioneWelcome from "./componenti/ParteStatica/SezioneWelcome";
import MenuSelezioneSx from "./componenti/ParteStatica/MenuSelezioneSx";
import SezioneUtenti from "./componenti/PrimaSezione/SezioneUtenti";
import Carosello from "./componenti/SecondaSezione/Carosello";
import ListaPost from "./componenti/TerzaSezione/ListaPost";
import PopUpAggiunta from "./componenti/PopUp/PopUpAggiunta";
import PopUpModifica from "./componenti/PopUp/PopUpModifica";
import PopUpInfo from "./componenti/PopUp/PopUpInfo";
import Spinner from "./componenti/UI/Spinner";

function App() {
  const [sezioneAttivaUno, setSezioneAttivaUno] = useState(true);
  const [sezioneAttivaDue, setSezioneAttivaDue] = useState(false);
  const [sezioneAttivaTre, setSezioneAttivaTre] = useState(false);
  const [datiUtenti, setDatiUtenti] = useState([]);
  const [datiFoto, setDatiFoto] = useState([]);
  const [post, setPost] = useState([]);
  const [popUpAggiunta, setPopUpAggiunta] = useState(false);
  const [popUpModifica, setPopUpModifica] = useState(false);
  const [idUtentePerModifica, setIdUtentePerModifica] = useState("");
  const [popUpInfo, setPopUpInfo] = useState(false);
  const [prendiInfo, setPrendiInfo] = useState({});
  const [prendiPost, setPrendiPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // attivazione della sezione in base alla sezione cliccata
  const attivaVoceMenu = (voceUno, voceDue, voceTre) => {
    if (voceUno) {
      setSezioneAttivaUno(true);
      setSezioneAttivaDue(false);
      setSezioneAttivaTre(false);
    } else if (voceDue) {
      setSezioneAttivaDue(true);
      setSezioneAttivaTre(false);
      setSezioneAttivaUno(false);
    } else if (voceTre) {
      setSezioneAttivaTre(true);
      setSezioneAttivaUno(false);
      setSezioneAttivaDue(false);
    }
  };

  // get dell'API riguardante gli utenti
  useEffect(() => {
    setIsLoading(true);
    const fetchUtenti = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        debugger;
        throw new Error("Qualcosa è andato storto, riprova in seguito.");
      }

      const dati = await response.json();

      setDatiUtenti(dati);
      setIsLoading(false);
    };

    fetchUtenti().catch((error) => {
      setIsLoading(false);
      alert(error.message);
    });
  }, []);

  // get dell'API riguardante i post
  useEffect(() => {
    setIsLoading(true);
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Qualcosa è andato storto, riprova in seguito.");
      }

      const dati = await response.json();

      setPost(dati);
      setIsLoading(false);
    };

    fetchPost().catch((error) => {
      setIsLoading(false);
      alert(error.message);
    });
  }, []);

  // get dell'API riguardante le immagini
  useEffect(() => {
    setIsLoading(true);
    const fetchFoto = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      if (!response.ok) {
        throw new Error("Qualcosa è andato storto, riprova in seguito.");
      }

      const dati = await response.json();
      const array = [];

      for (let i = 0; i < 100; i++) {
        array.push(dati[i].url);
      }

      setDatiFoto(array);
      setIsLoading(false);
    };

    fetchFoto().catch((error) => {
      alert(error.message);
      setIsLoading(false);
    });
  }, []);

  // funzioni per aprire e chiudere pop-up per aggiunta utente
  const mostraPopUp = () => {
    setPopUpAggiunta(true);
  };

  const chiudiPopUp = () => {
    setPopUpAggiunta(false);
    setPopUpModifica(false);
    setPopUpInfo(false);
  };

  // prende i dati dal form per aggiungere un utente
  const prendiDatiNuovoUtente = (datiForm) => {
    const array = [...datiUtenti, datiForm];
    setDatiUtenti(array);
  };

  // funzione per cancellazione utente
  const cancellaUtente = (id) => {
    const array = [...datiUtenti];
    const arraySenzaElemento = array.filter((ele) => ele.id !== id);
    setDatiUtenti(arraySenzaElemento);
  };

  // funzione per ottenimento ID dopo aver premuto matita per modifica utente
  const modificaUtente = (id) => {
    setPopUpModifica(true);
    setIdUtentePerModifica(id);
  };

  // funzione per modifica reale dei dati dopo aver preso i dati dal form e insieme all'ID preso dalla funzione precedente
  const inserimentoDati = (nome, email) => {
    datiUtenti.forEach((ele) => {
      if (ele.id === idUtentePerModifica) {
        ele.name = nome;
        ele.email = email;
      }
    });
  };

  // funzione per visualizzazione popup info utenti
  const mostraInfo = (id) => {
    datiUtenti.forEach((elemento) => {
      if (elemento.id === id) {
        setPrendiInfo(elemento);
      }
    });

    post.forEach((elemento) => {
      if (elemento.id === id) {
        setPrendiPost(elemento);
      }
    });

    setPopUpInfo(true);
  };

  // contenuto mostrato nella sezione prinicipale in base alle varie casistiche di eventuali errori
  let content = "";

  if (sezioneAttivaUno) {
    content = (
      <SezioneUtenti
        dati={datiUtenti}
        attivaPopUpAggiunta={mostraPopUp}
        cancellazione={cancellaUtente}
        modifica={modificaUtente}
        mostraInfo={mostraInfo}
      />
    );
  }

  if (sezioneAttivaUno && isLoading) {
    content = <Spinner />;
  }

  if (sezioneAttivaDue && !isLoading) {
    content = (
      <div>
        <h4 className="titoloSecondaSezione">Carosello di foto</h4>
        <Carosello>
          {datiFoto.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt="placeholder"
              className="immagine"
              onClick={() => {
                window.open(foto, "_blank");
              }}
            />
          ))}
        </Carosello>
      </div>
    );
  }

  if (sezioneAttivaDue && isLoading) {
    content = <Spinner />;
  }

  if (sezioneAttivaTre && !isLoading) {
    content = <ListaPost datiPost={[...post]} />;
  }

  if (sezioneAttivaTre && isLoading) {
    content = <Spinner />;
  }

  return (
    <>
      {/* Popup utilizzati */}
      {/* popup aggiunta */}
      {popUpAggiunta && (
        <PopUpAggiunta
          chiudiPopUp={chiudiPopUp}
          prendiDatiNuovoUtente={prendiDatiNuovoUtente}
        />
      )}
      {/* popup modifica */}
      {popUpModifica && (
        <PopUpModifica
          chiudiPopUp={chiudiPopUp}
          datiModificati={inserimentoDati}
        />
      )}
      {/* popup info */}
      {popUpInfo && (
        <PopUpInfo
          chiudiPopUp={chiudiPopUp}
          datiUtente={{ ...prendiInfo }}
          datiPost={prendiPost}
        />
      )}
      {/* parte statica */}
      <Header
        sezioneAttivaUno={sezioneAttivaUno}
        sezioneAttivaDue={sezioneAttivaDue}
        sezioneAttivaTre={sezioneAttivaTre}
      />
      <SezioneWelcome />
      <MenuSelezioneSx
        onSelect={attivaVoceMenu}
        selezioneUno={sezioneAttivaUno}
        selezioneDue={sezioneAttivaDue}
        selezioneTre={sezioneAttivaTre}
      />
      {/* parte dinamica */}
      {content}
    </>
  );
}

export default App;
