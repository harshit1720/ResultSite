import Button from "@/components/Button/Button";
import style from "./page.module.css";
import { description } from "@/data";
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
        <Button url={"/answerKey"} text={"Answer Key"}></Button>
        <Button url={"/syllabus"} text={"Syllabus"}></Button>
      </div>
      <div className={style.wrapper}>

      {/*--------------------------admit card Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Admit Card</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------Goverment Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Goverment</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------Result Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Result</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------Answer Key Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Answer Key</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------Admissions Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Admissions</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------Syllabus Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Syllabus</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
          {/*--------------------------important Section---------------------------------*/}
      <div className={style.Section}>
        <h1 className={style.heading}>Important</h1>
        <div className={style.desciptions}>
        <hr />
          <p className={style.p}>20-02-2023</p>
          <hr />
          <p className={style.title}>UPRTOU BED Entrance Exam Admit Card 2023</p>
        </div>
      </div>
      <div className={style.Section}>
        
        Advertisment
      </div>
      </div>
      {description.map((item)=>(

      <div className={style.descriptionArea}>
        <div key={description.id}>
          <h2>{item.heading}</h2>
          <p>{item.description}</p>
        </div>
      </div>
      ))}
    </div>
  );
}
