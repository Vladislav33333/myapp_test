import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="nav">
      <Header />
      {children}
    </div>
  );
};

export { Layout };
