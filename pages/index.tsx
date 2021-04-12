import { Board } from "../components/Board";

const HomePage = () => {
  return (
    <div>
      <Board rowCount={3} cellCount={2} />
    </div>
  );
};

export default HomePage;
