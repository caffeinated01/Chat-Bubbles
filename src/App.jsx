import { useEffect, useState } from "react";

function App() {
  const [enteredMsg, setEnteredMsg] = useState("");
  const [msgs, setMsgs] = useState([]);

  function addMsg(event) {
    if (event.keyCode == 13) {
      setMsgs([...msgs, event.target.value]);
      setEnteredMsg("");
    }
  }

  function handleInputChange(event) {
    setEnteredMsg(event.target.value);
  }

  useEffect(() => {
    if (msgs.length > 4) {
      setMsgs((prevMsgs) => prevMsgs.slice(1));
    }
  }, [msgs]);

  return (
    <div
      key="key"
      className="bg-green-600 h-screen flex flex-col justify-end p-10"
    >
      {msgs.map((msg, idx) => (
        <div key={idx} className="chat chat-start overflow-auto max-w-[800px]">
          <div className="chat-bubble bg-white text-black">{msg}</div>
        </div>
      ))}
      <div className="chat chat-start">
        <div className="chat-bubble bg-white text-black text-wrap">
          <textarea
            className="bg-white focus:outline-0 resize-none overflow-hidden"
            onKeyDown={addMsg}
            onChange={handleInputChange}
            value={enteredMsg}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
