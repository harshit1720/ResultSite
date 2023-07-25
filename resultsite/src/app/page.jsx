import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import style from "./page.module.css";

export const metadata = {
  title: "Home",
  description: "HomePage of Result Site",
};


export default function Home() {
  
  return (
    <div className="">
      <div className={style.heading}>
        <h1>Get the Latest Examination Result online & Education News 2023</h1>
      </div>
      <div className={style.homeDiv}>
        <Button url={"/admitCard"} text={"Admit Card"}></Button>
        <Button url={"/govtJobs"} text={"Goverment Jobs"}></Button>
        <Button url={"/result"} text={"Results"}></Button>
      </div>
      <div className={style.wrapper}>

      
      <div className={style.admitCardSection}>
        <h1 className={style.heading}>Admit Card</h1>
        <div className={style.admitCard}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
      <div className={style.admitCardSection}>
        <h1 className={style.heading}>Result</h1>
        <div className={style.admitCard}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
      <div className={style.admitCardSection}>
        <h1 className={style.heading}>Goverment</h1>
        <div className={style.admitCard}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
      </div>
    </div>
  );
}
