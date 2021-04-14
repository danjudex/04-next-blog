import { Board } from "../components/board/Board";
import { boards } from "../data/boards";
import { DefaultLayout } from "../layouts/DefaultLayout";

const HomePage = () => {
  return (
    <DefaultLayout>
      {boards.map((i, index) => {
        return <Board key={index} {...i} />;
      })}
    </DefaultLayout>
  );
};

export default HomePage;
