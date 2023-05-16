import MousePosition from "./MousePosition";

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p className="m-0">
          {mousePosition.x}, {mousePosition.y}
        </p>
      )}
    />
  );
};

export default PointMouseLogger;
