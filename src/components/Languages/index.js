import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import "./index.css";
import GithubContext from "../../context/GithubContext";

const Languages = () => {
  const { repos } = useContext(GithubContext);
  const languages = repos
    .map(({ language }) => language)
    .filter(Boolean)
    .reduce((acc, cur) => {
      if (acc[cur])
        return {
          ...acc,
          [cur]: acc[cur] + 1,
        };
      else return { ...acc, [cur]: 1 };
    }, {});

  const NumberOfProjects = Object.values(languages).reduce(
    (acc, cur) => acc + cur,
    0
  );

  const dataOfCharts = {
    labels: Object.keys(languages)
      .splice(0, 5)
      .map(
        (language) =>
          `${language} (${(
            (languages[language] * 100) /
            NumberOfProjects
          ).toFixed()}%)`
      ),
    datasets: [
      {
        backgroundColor: [
          "#1d78be",
          "#f0db4f",
          "#588157",
          "#845ec2",
          "#ffc75f",
        ],
        hoverBackgroundColor: [
          "#1d78be9f",
          "#f0db4f9f",
          "#5881579f",
          "#845ec29f",
          "#ffc75f9f",
        ],
        borderColor: "rgba(0,0,0,0.3)",
        data: Object.values(languages).splice(0, 5),
      },
    ],
  };

  const optionsOfCharts = {
    legend: {
      display: true,
      position: "right",
    },
  };

  return (
    <section className="languages-section">
      <h2 className="section-title">languages</h2>
      <div className="chart-centred">
        <Pie data={dataOfCharts} options={optionsOfCharts} />
      </div>
    </section>
  );
};

export default Languages;
