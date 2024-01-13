import { promises as fs } from 'fs';
import "../components/style.css";
import FileDownload from "../components/FileDownload";
// import data from "../json/CSE.json";

export default async function Page({ searchParams }) {
  const jsonFile = (searchParams.branch).toLowerCase();
  const SubjectId = searchParams.subjectId;

  let file;
  if(jsonFile === "cse"){
    file = await fs.readFile(process.cwd() + '/src/app/json/cse_data.json', 'utf8');
  }
  else if(jsonFile === "ece"){
    file = await fs.readFile(process.cwd() + '/src/app/json/ece_data.json', 'utf8');
  }
  else if(jsonFile === "me"){
    file = await fs.readFile(process.cwd() + '/src/app/json/me_data.json', 'utf8');
  }
  else if(jsonFile === "civil"){
    file = await fs.readFile(process.cwd() + '/src/app/json/civil_data.json', 'utf8');
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