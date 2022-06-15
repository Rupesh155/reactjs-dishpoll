import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../database/db.json";
import axios from "axios";
export default function Start() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [rank1, setRank1] = useState(null);
  const [rank2, setRank2] = useState(null);
  const [rank3, setRank3] = useState(null);
  const duplicates = Data;
  var datas = data;
  const onSearchhandler = (e) => {
    let filtered = data.filter((item) =>
      item.name.includes(e.currentTarget.value)
    );
    setData(filtered);
  };
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setData(res.data);
        console.log(res,"startpage");
      });
      // onSearchhandler()
  }, []);
  const rankone = (e) => {
    if (e !== rank2 && e !== rank3) {
      localStorage.setItem("rank1", e);
      setRank1(e);
    }
  };
  const ranktwo = (e) => {
    if (e !== rank1 && e !== rank3) {
      localStorage.setItem("rank2", e);
      setRank2(e);
    }
  };
  const rankthree = (e) => {
    if (e !== rank2 && e !== rank1) {
      localStorage.setItem("rank3", e);
      setRank3(e);
    }
  };
  const pollhandler = () => {
    navigate("/view");
  };
  return (
    <div className="start">
      {rank1 !== null && rank2 !== null && rank3 !== null ? (
        <button onClick={()=>pollhandler(console.log("submit"))}>Submit Poll</button>
      ) : (
        <div />
      )}
      <div className="dish">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="itemCard">
                <div className="buttonWrapper">
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank1 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => rankone(item.id)}
                  >
                    1
                  </button>
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank2 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => ranktwo(item.id)}
                  >
                    2
                  </button>
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank3 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => rankthree(item.id)}
                  >
                    3
                  </button>
                </div>
                <img src={item.image} alt="image" />
                <h2>{item.dishName}</h2>
                <p>{item.description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
