import { promises as fs } from 'fs';
import "../components/style.css";
import FileDownload from "../components/FileDownload";
// import data from "../json/CSE.json";

export default async function Page({ searchParams }) {
  const jsonFile = searchParams.branch;
  const SubjectId = searchParams.subjectId;

  let file;
  if(jsonFile === "CSE"){
    file = await fs.readFile(process.cwd() + `/src/app/json/CSE.json`, 'utf8');
  }
  else if(jsonFile === "ECE"){
    file = await fs.readFile(process.cwd() + `/src/app/json/ECE.json`, 'utf8');
  }
  else if(jsonFile === "ME"){
    file = await fs.readFile(process.cwd() + `/src/app/json/ME.json`, 'utf8');
  }
  else if(jsonFile === "CIVIL"){
    file = await fs.readFile(process.cwd() + `/src/app/json/CIVIL.json`, 'utf8');
  }




  // const file = await fs.readFile(process.cwd() + `/src/app/json/${jsonFile}.json`, 'utf8');
  const data = JSON.parse(file);

  const filteredData = data.find((item) => item.subject_code === SubjectId);

  if (!filteredData) {
    return <h1>No Data Found</h1>;
  }
  // console.log(filteredData);

  return (
    <div className="pd-main-container">
      <div className="pd-subject-code">{filteredData.subject_code}</div>
      <div className="pd-semi-container-1">
        <div className="pd-subject-name">{filteredData.subject_name}</div>
        {filteredData.chapters.map((item) => (
          <div key={item.chapterId} className="pd-unit">
            <h1>{item.chapterNumber} </h1>
            <h1>{item.chapterName}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h1 className="pd-download-notes">Download Notes</h1>
      <div className="pd-semi-container-2">
        {filteredData.chapters.map((item) => (
          <div key={item.chapterId} className="pd-notes pd-notes-1">Download notes {item.chapterId} <FileDownload filename={`${filteredData.subject_code}-${item.chapterId}.pdf`} buttonText={item.buttonText} /></div>
        ))}
      </div>
    </div>
  );
}