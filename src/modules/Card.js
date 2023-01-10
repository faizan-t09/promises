import "./Card.css";

export const Card = ({ data }) => {
  return (
    <div className="card">
      <div>
        <h4>{data.id}</h4>
        <h1>{data.name}</h1>
        <h3>{data.username}</h3>
        <h4>{data.email}</h4>
      </div>
      <div>
        <p>{data.address.street}</p>
        <p>{data.address.suite}</p>
        <p>{data.address.city}</p>
        <p>{data.address.zipcode}</p>
      </div>
    </div>
  );
};
