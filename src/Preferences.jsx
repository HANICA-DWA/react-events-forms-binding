import React, { useState } from "react";

export default function Preferences(props) {
  const [localPrefs, setLocalPrefs] = useState({
    sidekicks: ["Robin", "Sparten", "Ant-Man"],
    ceos: ["Jeff MF Bezos", ""],
    logoColor: props.preferences.logoColor,
    companyName: props.preferences.companyName,
  });

  const logoColorChangeHandler = (e) => {
    console.log(e.target.value);
    setLocalPrefs({
      ...localPrefs,
      logoColor: e.target.value,
    });
  };

  const companyNameHandler = (e) =>
    setLocalPrefs({ ...localPrefs, companyName: e.target.value });

  const clearCompanyName = () =>
    setLocalPrefs({ ...localPrefs, companyName: "" });

  function onSubmit(e) {
    e.preventDefault();
    props.setUpstreamPrefs(localPrefs);
    clearCompanyName();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <select
        onChange={(e) => logoColorChangeHandler(e)}
        value={localPrefs.logoColor}
      >
        <option>red</option>
        <option>salmon</option>
        <option>ochre</option>
        <option>seagreen</option>
      </select>
      <input
        type="text"
        placeholder="Type the company name"
        onChange={companyNameHandler}
      />
      <input type="submit" value="Save Preferences" />
      <div className={`preview ${localPrefs.logoColor}`}>
        Preview for: {localPrefs.companyName}
      </div>
    </form>
  );
}
