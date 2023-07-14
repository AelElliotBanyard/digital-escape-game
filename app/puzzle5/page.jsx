"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HospitalRiddlePage = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // Setze den Anfangswert auf null
  const router = useRouter();

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setIsCorrect(null); // Setze die Antwortanzeige auf null, wenn eine neue Eingabe gemacht wird
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    const correctAnswer = "Krankenhaus";
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      router.push("/puzzle6"); // Weiterleitung zur Seite "Puzzle6"
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Rätsel 5</h1>
      <p
        style={{
          fontSize: "18px",
          marginBottom: "20px",
          whiteSpace: "pre-line",
        }}
      >
        Ein Ort der Heilung, Tag und Nacht,{"\n"}
        Wo Herzen genesen und Seelen erwachen.{"\n"}
        Betten bereit, doch Schlaf nicht zu finden,{"\n"}
        Denn Leben erblüht, wo Träume verschwinden.
      </p>
      <form onSubmit={checkAnswer}>
        <label
          htmlFor="answer"
          style={{ marginRight: "10px", fontSize: "16px" }}
        >
          Deine Antwort:
        </label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={handleInputChange}
          style={{ padding: "5px", fontSize: "16px", color: "black" }}
        />
        <button type="submit" style={{ marginLeft: "10px", fontSize: "16px" }}>
          Antwort überprüfen
        </button>
      </form>
      {isCorrect === true && (
        <p style={{ fontSize: "18px", color: "green", marginTop: "20px" }}>
          Herzlichen Glückwunsch! Die Antwort ist richtig!
        </p>
      )}
      {isCorrect === false && (
        <p style={{ fontSize: "18px", color: "red", marginTop: "20px" }}>
          Leider ist die Antwort falsch. Versuche es erneut.
        </p>
      )}
    </div>
  );
};

export default HospitalRiddlePage;
