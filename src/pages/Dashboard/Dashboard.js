import { useState } from "react";
import BarChart from "../../components/BarChart.js/BarChart";
import LineChart from "../../components/LineChart/LineChart";
// import PieChart from "../../components/PieChart/PieChart";
import { UserData } from "../../fakeData";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { GiSandsOfTime } from 'react-icons/gi'

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="dashboard page">
      <main>
        <div className="greetings">
          <h3>Bienvenue, Aboubacar</h3>
          <span>Voici un resumé des dernières activités.</span>
        </div>
        <div className="stats">
          <div className="stat-box">
            <div className="box-left">
              <span className="value">412</span>
              <p className="text">Total</p>
            </div>
          </div>
          <div className="stat-box">
            <div className="box-left">
            <span className="value">82</span>
            <p className="text">En attente</p>

            </div>
            <div className="box-right">
              <GiSandsOfTime />
            </div>
          </div>
          <div className="stat-box">
            <div className="box-left">
            <span className="value">30</span>
            <p className="text">Validées</p>

            </div>
            <div className="box-right">
              <AiOutlineCheckCircle />
            </div>
          </div>
          <div className="stat-box">
            <div className="box-left">
              <span className="value">10</span>
              <p className="text">Rejetées</p>
            </div>
            <div className="box-right">
              <AiOutlineCloseCircle />
            </div>
          </div>
        </div>
        <div className="charts">
          <h2>Statistiques</h2>
          <div className="graphes">
            <div className="bar-chart">
              <BarChart chartData={userData} />
            </div>
            <div className="line-chart">
              <LineChart chartData={userData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
