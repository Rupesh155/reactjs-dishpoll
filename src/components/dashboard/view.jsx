import React, { useEffect, useState } from "react";
import Data from "../../database/db.json";
import axios from "axios";
export default function View() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [rank1, setRank1] = useState([]);
  const [rank2, setRank2] = useState([]);
  const [rank3, setRank3] = useState([]);
  const [rem, setRem] = useState([]);
  // const rank1Count = 30 + 1;
  // const rank2Count = 20 + 1;
  // const rank3Count = 10 + 1;
  
  useEffect(() => {
  //  
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        // console.log(res,"wewewewe")
        setData(res.data);
        console.log( res.data,"wwwwwwwwwwwwwww")
        setCount(res.data.length + 60);
        console.log(rankone)
        setRank1(rankone);
        setRank2(ranktwo);
        setRank3(rankthree);
        setRem(remg)
      });
  }, []);
  const rankone = data.filter(
    (item) => item.id === JSON.parse(localStorage.getItem("rank1"))
  );
  const ranktwo = data.filter(
    (item) => item.id === JSON.parse(localStorage.getItem("rank2"))
  );
  const rankthree = data.filter(
    (item) => item.id === JSON.parse(localStorage.getItem("rank3"))
  );
  const remg = data.filter(
    (item) =>
      item.id !== JSON.parse(localStorage.getItem("rank3")) &&
      item.id !== JSON.parse(localStorage.getItem("rank2")) &&
      item.id !== JSON.parse(localStorage.getItem("rank1"))
     
  );
 
  // console.log(remg,"qqqqqqqqqqqqqq");
  return (

    // <div>   hello !!!</div>
    <div>
      Polling
      {rank1.length > 0 ? (
        <div>
          <label for="file">{rank1[0].dishName}</label>
          <progress id="file" value={(31 / 90) * 100} max="100"></progress>
          {(31 / 90) * 100}%
        </div>
      ) : null}
      {rank2.length > 0 ? (
        <div>
          <label for="file">{rank2[0].dishName}</label>
          <progress id="file" value={(21 / 90) * 100} max="100"></progress>
          {(21 / 90) * 100}%
        </div>
      ) : null}
      {rank3.length > 0 ? (
        <div>
          <label for="file">{rank3[0].dishName}</label>
          <progress id="file" value={(11 / 90) * 100} max="100"></progress>
          {(11 / 90) * 100}%
        </div>
      ) : null}
      {remg.length > 0
        ? remg.map((item, index) => (
            <div key="index">
              <label for="file">{item.dishName}</label>
              <progress id="file" value={(1 / 90) * 100} max="100"></progress>
              {(1 / 90) * 100}%
            </div>
            
          ))
        : null}
    </div>
  );
}
