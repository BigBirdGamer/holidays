import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const [holiday, setHoliday] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();
//? you need to change this below
  if (id === "simon") {
    navigate("/")
  }

  useEffect(() => {
    fetch(`/api/holidays/${id}`)
      .then((response) => response.json())
      .then((data) => setHoliday(data));
  }, []);
  if (holiday.status === "fail") {
    return "No Holidays";
  }

  return (
    <div>
      <h1>Holiday Info</h1>
      <h2>{holiday.name}</h2>
      <dl>
        <dt>Celebrated</dt>
        <dd>{holiday.celebrated ? "Yes" : "No"}</dd>
        <dt>Likes</dt>
        <dd>{holiday.likes}</dd>
        <dt>Description</dt>
        <dd>{holiday.description}</dd>
      </dl>
    </div>
  );
}

export default Detail;
