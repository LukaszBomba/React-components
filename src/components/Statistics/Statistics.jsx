import Stats from '../Statistics/Statistics.module.css';

export const StatsData = ({ title, stats }) => {
  return (
    <section className={Stats.statistics}>
      <h2 className={Stats.title}>{title}</h2>
      <ul className={Stats.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={Stats.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={Stats.label}>{label}</span>
            <span className={Stats.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>

    // <section className="statistics">
    //   <h2 className="title">Upload stats</h2>
    //   <ul className="stat-list">
    //     <li className="item">
    //       <span className="label">.docx</span>
    //       <span className="percentage">4%</span>
    //     </li>
    //     <li className="item">
    //       <span className="label">.mp3</span>
    //       <span className="percentage">14%</span>
    //     </li>
    //     <li className="item">
    //       <span className="label">.pdf</span>
    //       <span className="percentage">41%</span>
    //     </li>
    //     <li className="item">
    //       <span className="label">.mp4</span>
    //       <span className="percentage">12%</span>
    //     </li>
    //   </ul>
    // </section>
  );
};

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16755122).toString(16)}`;
};
