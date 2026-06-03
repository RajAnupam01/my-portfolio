const MainLayout = ({
  children,
}) => {
  return (
    <main className="bg-dark min-h-screen text-white">
      {children}
    </main>
  );
};

export default MainLayout;