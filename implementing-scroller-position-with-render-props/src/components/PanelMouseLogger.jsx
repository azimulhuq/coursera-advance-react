import MousePosition from "./MousePosition";

const PanelMouseLogger = () => {
  return (
    <div className="border mb-32 p-4 border-solid border-[black]">
      <p className="m-0">Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="flex flex-row items-center justify-between w-[200px] h-16">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

export default PanelMouseLogger;
