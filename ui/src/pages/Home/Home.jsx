import Header from "../../components/Header/Header";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Sponsor from "../../components/Sponsor/Sponsor";
import TimeTable from "../../components/TimeTable/TimeTable";
import "./Home.css";

const Home = () => {

  return (
    <div>
      <Header></Header>
      <Sponsor></Sponsor>
      <PopularMenu></PopularMenu>
      <TimeTable></TimeTable>
    </div>
  );
};

export default Home;
