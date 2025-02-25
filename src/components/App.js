import { useEffect, useState } from "react";

// create your App component here
function App() {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setImg(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <p>Loading...</p> : <img src={img} alt="A Random Dog" />}</>
  );
}

export default App;
