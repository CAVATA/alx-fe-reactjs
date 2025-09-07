const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "12px", borderRadius: "6px", maxWidth: "320px" }}>
      <h2 style={{ color: "#0b5cff", margin: "0 0 8px 0", fontSize: "1.25rem" }}>{props.name}</h2>
      <p style={{ margin: "0 0 6px 0" }}>Age: <span style={{ fontWeight: "700" }}>{props.age}</span></p>
      <p style={{ margin: 0, color: "#333" }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
