

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#f6f8fb",
    color: "#333",
    padding: "12px",
    textAlign: "center",
    borderTop: "1px solid #e6e9ef",
    marginTop: "18px"
  };

  return (
    <footer style={footerStyle}>
      <small>© {new Date().getFullYear()} My App. All rights reserved.</small>
    </footer>
  );
}
