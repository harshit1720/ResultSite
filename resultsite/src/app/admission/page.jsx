import React from "react";
import style from "./admission.module.css"

export const metadata = {
  title: "Admission ",
  description: "HomePage of Answer Key",
};


const Admission = () => {
  // Sample data for job post dates (you can replace this with actual data from an API or other sources)
  const jobPostDates = [
    {
      jobTitle: "Bihar Vidhan Parishad Various Post Online Form 2023",
      date: "2023-07-26",
      viewMoreLink: "/admission/1",
    },
    {
      jobTitle: "Army School AWES TGT PGT PRT Online Form 2023",
      date: "2023-07-27",
      viewMoreLink: "/admission/2",
    },
    {
      jobTitle: "Jharkhand SSC Matric Level Online Form 2023",
      date: "2023-07-28",
      viewMoreLink: "/admission/3",
    },
    // Add more entries as needed
  ];

  return (
    <div className={style.container}>
      <h1>Admission</h1>
      <table className={style.table}>
        <thead>
          <tr className={style.cell}>
            <th className={style.heading}>Admission</th>
            <th className={style.heading}></th>
          </tr>
        </thead>
        <tbody>
          {jobPostDates.map((job, index) => (
            <tr key={index}>
              <td className={style.cell}>{job.jobTitle}</td>
             
              <td className={style.link}>
                <a href={job.viewMoreLink}>View More</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admission;
