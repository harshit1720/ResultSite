import React from "react";
import style from "./answer.module.css";
import Link from "next/link";
import DescTable from "@/components/DescTable/DescTable";

const AdmitCardDescription = () => {

  return (
    <div>
      <div>
        <div className={style.info}>
          <h3>Name of Post: </h3>
          <p>
          MPESB High School Selection Test HSTST Exam 2023 Admit Card for 8720 Post
          </p>
        </div>
        <div className={style.info}>
          <h3>Post Date / Update:</h3>
          <p>26 July 2023 | 09:17 PM</p>
        </div>
      </div>

      <DescTable
        heading="THDC India Limited JE Trainee Recruitment Overview"
        rows={[
          { label: "Post Name", value: "JE Trainee" },
          { label: "Application Form Apply Mode", value: "Online" },
          { label: "Advt No.", value: "11/2023" },
          { label: "Number of Vacancies", value: "271 Post" },
          {
            label: "Selection Process",
            value:
              "Computer Based Test (85% weightage) and Interaction/viva (15% weightage)",
          },
          { label: "Job Location", value: "India" },
          { label: "Category", value: "Sarkari Job" },
        ]}
      />
      <DescTable
        heading="Important Dates"
        rows={[
          { label: "Notification Date", value: "07-02-2023" },
          { label: "Online Application Start", value: "07-02-2023" },
          { label: "Registration Last Date", value: "11/2023" },
          { label: "Fees Payment Last Date", value: "271 Post" },
          {
            label: "Merit Exam date",
            value:
              "As per Schedule",
          },
          { label: "Admit Card", value: "Before Exam" },
        ]}
      />

      
   
      <DescTable
        heading="Important Links"
        rows={[
          {
            label: "Apply Online",
            value: (
              <Link href="/">
                <p>Click Here</p>
              </Link>
            ),
          },
          {
            label: "Download Notification",
            value: (
              <Link href="/">
                <p>Click Here</p>
              </Link>
            ),
          },
          {
            label: "Offical Website",
            value: (
              <Link href="/">
                <p>Click Here</p>
              </Link>
            ),
          },
          {
            label: "Govt Jobs",
            value: (
              <Link href="/">
                <p>Click Here</p>
              </Link>
            ),
          },
          
        ]}
      />
    </div>
  );
};

export default AdmitCardDescription;
