const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1420px] mx-auto px-4 sm:px-6 md:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;