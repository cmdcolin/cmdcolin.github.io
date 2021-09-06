export default function Layout({ children }) {
  return (
    <div>
      <a href="/">Return home</a>
      <div className="blog">{children}</div>
    </div>
  );
}
