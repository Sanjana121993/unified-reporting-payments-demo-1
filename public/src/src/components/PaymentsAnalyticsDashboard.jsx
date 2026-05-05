import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/dashboard.css';

// Sample trend data for 30 days
const generateTrendData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      day: i,
      value: 90 + Math.random() * 3 + (i * 0.05)
    });
  }
  return data;
};

const PaymentsAnalyticsDashboard = () => {
  const trendData = generateTrendData();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Payments Analytics – Homepage</h1>
        <p className="dashboard-subtitle">Real-time payment metrics and insights</p>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {/* Card 1: Primary - Approval Rate */}
        <div className="metric-card primary-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Approval Rate</h3>
              <p className="card-subtitle">Last 30 days</p>
            </div>
            <button className="info-icon" title="Definition: Percentage of approved payments">
              ⓘ
            </button>
          </div>

          <div className="card-content">
            <div className="metric-display">
              <div className="metric-value">92.3%</div>
              <div className="metric-delta success">
                <span className="delta-icon">↑</span>
                <span>+1.5 pts vs previous period</span>
              </div>
            </div>
          </div>

          {/* Sparkline Chart */}
          <div className="chart-container">
            <p className="chart-label">Daily trend (last 30 days)</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" hide={true} />
                <YAxis hide={true} domain={[85, 96]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px 12px'
                  }}
                  formatter={(value) => `${value.toFixed(1)}%`}
                  labelFormatter={(label) => `Day ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Action Button */}
          <button className="explore-button">
            Explore <span className="arrow">→</span>
          </button>
        </div>

        {/* Card 2: Secondary - Total Payment Volume */}
        <div className="metric-card secondary-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Total Payment Volume</h3>
              <p className="card-subtitle">Last 30 days</p>
            </div>
            <button className="info-icon" title="Definition: Total transaction value processed">
              ⓘ
            </button>
          </div>

          <div className="card-content">
            <div className="metric-display">
              <div className="metric-value">1.2M</div>
              <div className="metric-delta success">
                <span className="delta-icon">↑</span>
                <span>+8.2% vs previous period</span>
              </div>
            </div>
          </div>

          <button className="explore-button">
            Explore <span className="arrow">→</span>
          </button>
        </div>

        {/* Card 3: Secondary - Chargeback Rate */}
        <div className="metric-card secondary-card">
          <div className="card-header">
            <div>
              <h3 className="card-title">Chargeback Rate</h3>
              <p className="card-subtitle">Last 30 days</p>
            </div>
            <button className="info-icon" title="Definition: Percentage of disputed transactions">
              ⓘ
            </button>
          </div>

          <div className="card-content">
            <div className="metric-display">
              <div className="metric-value">0.8%</div>
              <div className="metric-delta success">
                <span className="delta-icon">↓</span>
                <span>-0.2 pts vs previous period</span>
              </div>
            </div>
          </div>

          <button className="explore-button">
            Explore <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsAnalyticsDashboard;
