

export default function MainContent({ children }) {
  const mainStyle = {
    padding: "22px 12px",
    minHeight: "60vh",
    background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)"
  };
  const inner = { maxWidth: "980px", margin: "0 auto" };

  return (
    <main style={mainStyle}>
      <section style={inner}>
        {children}
      </section>
    </main>
  );
}
