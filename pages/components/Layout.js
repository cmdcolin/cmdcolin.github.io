export default function Layout({ children }) {
  return (
    <div>
      <a href="/">Return home</a>
      <div style={{ margin: "0 auto", width: "75%" }}>{children}</div>
    </div>
  );
}
