export default function Layout({ children }) {
  return (
    <div>
      <div>
        <a href="/">Return home</a>
        <img src="/avatar.png" style={{ height: "2em", marginLeft: "1em" }} />
      </div>
      <div className="blog">{children}</div>
    </div>
  );
}
