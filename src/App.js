import React, { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const [topFive, setTopFive] = useState();

  /// Character Count ///
  const count = (text) => {
    const string = text;

    const seen = new Set();

    let order = "";

    const count = {};

    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      count[char] = count[char] === undefined ? 1 : count[char] + 1;

      if (!seen.has(char)) {
        order += char;
        seen.add(char);
      }
    }

    let out = [];
    for (let i = 0; i < order.length; i++) {
      let char = order[i];
      let countOfChar = count[char];
      out.push({
        character: char,
        count: countOfChar,
      });
    }
    setCharacters(out);

    /// Top 5 Characters ///
    let sortedArray = [];
    for (let char in count) {
      sortedArray.push([char, count[char]]);
    }
    sortedArray.sort((a, b) => b[1] - a[1]);

    let top5sorted = "";
    for (let i = 0; i < sortedArray.length; i++) {
      top5sorted += sortedArray[i][0];
      if (top5sorted.length === 5) break;
    }
    setTopFive(top5sorted);
  };

  return (
    <div>
      <div className="pt-10 pb-5">
        <div className="text-center">
          <p className="text-2xl font-bold text-red-600">TOP SECRET</p>
          <p className="text-xl font-bold p-2">Character Counter</p>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <textarea
          rows={"8"}
          style={{
            width: "50%",
            height: "30%",
            borderColor: "black",
            borderWidth: "3px",
            outline: "none",
            overflow: "auto",
          }}
          autoFocus
          placeholder="Enter Text Here"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            count(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        {characters.map((character) => {
          return (
            <div className="flex justify-center space-x-2">
              <p className="font-bold">
                {character.character}:{character.count}
              </p>
              <p className="text-red-500 font-bold">
                {topFive.includes(character.character) && "Top 5"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
