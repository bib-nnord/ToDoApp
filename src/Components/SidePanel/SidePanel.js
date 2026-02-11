const SidePanel = ({ boards, title }) => {
  return (
    <div className="sidepanel">
      <h2>{title}</h2>
      {boards.map((item) => (
        <BoardCard

        />
      ))}
      <button onClick={() => addBoard()}>+</button>
    </div>
  );
};
