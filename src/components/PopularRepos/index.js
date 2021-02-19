import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import GithubContext from "../../context/GithubContext";
import "./index.css";

const PopularRepos = () => {
  const { repos, isLoading } = useContext(GithubContext);

  if (isLoading) return null;

  const data = repos
    .sort((repo1, repo2) => repo1.stargazers_count - repo2.stargazers_count)
    .map(({ stargazers_count: stars, name }) => ({ stars, name }))
    .reverse()
    .splice(0, 5);

  const dataOfCharts = {
    labels: data.map(({ name }) => name),
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
        borderWidth: 2,
        data: data.map(({ stars }) => stars),
      },
    ],
  };
  const optionsOfCharts = {
    plugins: {
      display: false,
      labels: {
        fontSize: 32,
        fontColor: "black",
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        showZero: true,
      },
    },
    title: {
      display: true,
      text: "Count By Stars",
      fontSize: 20,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          minBarLength: 4,
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
        },
      ],
    },
  };
  return (
    <section className="popular-repos-section">
      <h2 className="section-title">Popular Repos</h2>
      <div className="chart-centred">
        <Bar data={dataOfCharts} options={optionsOfCharts} />
      </div>
    </section>
  );
};

export default PopularRepos;
