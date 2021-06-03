import "./Main.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React from 'react'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Main = () => {

  const data01 = [
    {name: "TITN", value: 20},
    {name: "SYRS", value: 20},
    {name: "AIH", value: 20},
    {name: "LNTH", value: 20},
    {name: "DUO", value: 20},
  ]
  return (
    <main>
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Monthly Performance</h1>
                <p>For testing purposes</p>
              </div>
              <i className="fa fa-info" aria-hidden="true"></i>
            </div>
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>For testing purposes</p>
              </div>
              <i className="fa fa-info" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Balance</h1>
                <p>$254,00</p>
              </div>

              <div className="card2">
                <h1>Returns</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Performance</h1>
                <p>150%</p>
              </div>

              <div className="card4">
                <h1>Risk</h1>
                <p>High</p>
              </div>
            </div>
          </div>
          <div className="charts__left">
          <div className="charts__left__title">
              <div>
                <h1>Monthly Performance</h1>
                <p>For testing purposes</p>
              </div>
              <i className="fa fa-info" aria-hidden="true"></i>
            </div>
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>For testing purposes</p>
              </div>
              <i className="fa fa-info" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Balance</h1>
                <p>$254,00</p>
              </div>

              <div className="card2">
                <h1>Returns</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Performance</h1>
                <p>150%</p>
              </div>

              <div className="card4">
                <h1>Risk</h1>
                <p>High</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
