import React from "react";

/**
 * Create a pokemon form with 4 fields (name, type, weight, height)
 * Add emojies for each type, add htmlFor and ids.
 * Use valueAsNumber for height and weight
 * use 4 useState for this
 */
export function PokemonForm() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <label htmlFor="type">Type:</label>
      <select
        id="type"
        name="type"
        value={type}
        onChange={(e) => setType(e.currentTarget.value)}
      >
        <option value="bug">🐛 Bug</option>
        <option value="dark">🌚 Dark</option>
        <option value="dragon">🐉 Dragon</option>
        <option value="electric">⚡ Electric</option>
        <option value="fairy">🧚 Fairy</option>
        <option value="fighting">🥊 Fighting</option>
        <option value="fire">🔥 Fire</option>
        <option value="flying">🦅 Flying</option>
        <option value="ghost">👻 Ghost</option>
        <option value="grass">🌿 Grass</option>
        <option value="ground">🌍 Ground</option>
        <option value="ice">❄️ Ice</option>
        <option value="normal">🧑 Normal</option>
        <option value="poison">☠️ Poison</option>
        <option value="psychic">🔮 Psychic</option>
        <option value="rock">🪨 Rock</option>
        <option value="steel">🔩 Steel</option>
        <option value="water">💧 Water</option>
      </select>
      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.currentTarget.valueAsNumber)}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.currentTarget.valueAsNumber)}
      />
    </form>
  );
}
