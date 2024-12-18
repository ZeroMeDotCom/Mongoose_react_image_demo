import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ImageCard from "./components/ImageCard";

const App = () => {
  const [days, setDay] = useState([]); // Store structured data
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/date");
        setDay(response.data); // Store structured data in state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        // setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="app">
      {days.map((day) => (
        <div key={day._id}>
          <h1>Task for {day.date}</h1>
          <ul>
            {day.task.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
          {/* <img src={day.imageurl} alt="img_of_today"></img> */}
          <ImageCard imgurl={day.imageurl}/>
        </div>
      ))}
    </div>
  );
};

export default App;