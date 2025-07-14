import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [fortune, setFortune] = useState<string | "welcome">("welcome");
  const fortunes = [
    "The stars say: Yes ✨",
    "No – the path is blocked 🛑",
    "The mist is unclear. Try again later 🌫️",
    "The spirits whisper: Absolutely! 🌀",
    "You already know the answer... 🔁",
    "A surprise awaits you 🌟",
    "A change is coming. Prepare yourself 🌪️",
  ];

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  const handleTellFortune = (min: number, max: number) => {
    const questionBox = document.getElementById(
      "questionBox"
    ) as HTMLInputElement;
    const fortuneText = document.getElementById(
      "fortuneText"
    ) as HTMLHeadingElement;

    fortuneText.style.display = "none";
    fortuneText.style.border = "none";
    fortuneText.style.backgroundColor = "transparent";

    if (!questionBox || questionBox.value.trim() === "") {
      alert("Please ask a question before revealing your fortune!");
      return;
    } else {
      alert("🔮 The Mystic AI is consulting the stars...");

      min = Math.ceil(min);
      max = Math.floor(max);
      var index = Math.floor(Math.random() * (max - min + 1) + min);

      fortuneText.style.display = "block";
      fortuneText.style.color = "#ffcc00";
      fortuneText.style.fontSize = "2rem";
      fortuneText.style.fontWeight = "bold";
      fortuneText.style.textShadow = "0 0 10px #ffcc00, 0 0 20px #ffcc00";
      fortuneText.style.transition = "all 0.3s ease-in-out";
      fortuneText.style.opacity = "1";
      fortuneText.style.transform = "scale(1.1)";
      fortuneText.style.marginTop = "20px";
      fortuneText.style.marginBottom = "20px";
      fortuneText.style.textAlign = "center";
      fortuneText.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      fortuneText.style.padding = "20px";
      fortuneText.style.borderRadius = "10px";
      fortuneText.style.boxShadow = "0 0 20px rgba(255, 204, 0, 0.5)";
      fortuneText.style.border = "2px solid #ffcc00";
      fortuneText.style.display = "block";
      fortuneText.style.zIndex = "1000";
      fortuneText.style.position = "relative";
      fortuneText.style.left = "23%";
      fortuneText.style.transform = "translateX(-50%)";
      fortuneText.style.whiteSpace = "pre-wrap";
      fortuneText.style.width = "90%";
      fortuneText.style.maxWidth = "600px";
      fortuneText.style.lineHeight = "1.5";
      fortuneText.style.fontFamily = "'Segoe UI', sans-serif";
      fortuneText.style.fontSize = "1.5rem";
      fortuneText.style.color = "#ffcc00";
      fortuneText.style.textShadow = "0 0 10px #ffcc00, 0 0 20px #ffcc00";
      fortuneText.style.transition = "all 0.3s ease-in-out";
      fortuneText.style.opacity = "1";
      fortuneText.style.transform = "scale(1.1)";

      if (index > 0) {
        fortuneText.textContent = fortunes[index];
        setFortune(fortunes[index]);
      } else {
        setFortune("...");
      }

      questionBox.value = "";
    }
  };

  return (
    <div>
      <h1>🔮 Mystic AI Fortune Teller</h1>
      <div className="crystal-ball"></div>
      <input type="text" placeholder="Ask your question..." id="questionBox" />
      <br />
      <button onClick={() => handleTellFortune(0, fortunes.length)}>
        Reveal My Fortune
      </button>
      <h1 className="fortune" id="fortuneText">
        {fortune}
      </h1>
    </div>
  );
}

export default App;
