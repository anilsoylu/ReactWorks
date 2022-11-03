import { useEffect, useMemo, useState } from "react";

function App() {
  const genders = [
    { key: "1", value: "Erkek" },
    { key: "2", value: "Kadın" },
  ];
  const categoryList = [
    {
      key: 1,
      value: "C#",
    },
    {
      key: 2,
      value: "Javascript",
    },
    {
      key: 3,
      value: "CSS",
    },
    {
      key: 4,
      value: "HTML",
    },
  ];
  const levels = [
    { key: "beginner", value: "Başlangıç" },
    { key: "jr_developer", value: "Jr. Developer" },
    { key: "sr_developer", value: "Sr. Developer" },
  ];

  const [name, setName] = useState("Anıl");
  const [description, setDescription] = useState();
  const [gender, setGender] = useState();
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "1. Kuralı kabul ediyorum", checked: false },
    { key: 2, value: "2, Kuralı kabul ediyorum", checked: false },
    { key: 3, value: "3, Kuralı kabul ediyorum", checked: true },
  ]);
  const [level, setLevel] = useState("jr_developer");

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const submitHandle = () => {
    const formData = new FormData();

    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  const selectedGender = genders.find((g) => g.key === gender);
  const selectedLevel = levels.find((g) => g.key === level);
  const selectedCategories =
    !!categories && categoryList.filter((c) => categories.includes(c.key));
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);
  const enabled = rules.every((rule) => rule.checked) && !!avatar;

  useEffect(() => {
    if (!!avatar) {
      const fileReader = new FileReader();

      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  return (
    <>
      <button onClick={() => setName("Cengizhan")}>Adı Değiştir</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <textarea
        value={description}
        cols="30"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <br />
      <br />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Cinsiyet Seçin</option>
        {/* <option value="1">Erkek</option>
  <option value="2">Kadın</option> */}
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br />
      <pre>{JSON.stringify(selectedGender, null, 2)}</pre>

      <hr />

      <button onClick={() => setCategories([2, 3, 4])}>Kategori Seç</button>
      <br />
      <br />
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br />
      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>

      <br />

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları Kabul Ediyorum.
      </label>

      <br />
      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={!!rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}

      <br />

      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <br />

      {levels.map((l, i) => (
        <label key={i}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}

      <br />

      <pre>{JSON.stringify(selectedLevel, null, 2)}</pre>

      <br />

      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>

      <br />

      {!!avatar && (
        <>
          <h3>{avatar.name}</h3>
          {!!image && <img src={image} alt="" />}
        </>
      )}

      <br />
      <br />

      <button onClick={submitHandle} disabled={!enabled}>
        Devam Et
      </button>
    </>
  );
}

export default App;
