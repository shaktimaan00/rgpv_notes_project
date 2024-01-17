// import { promises as fs } from 'fs';
import "../components/style.css";
import FileDownload from "../components/FileDownload";
import data from "../json/cse_data.json";
import RetrieveData from "../components/RetriveData";

export default async function Page({ searchParams }) {
  // const jsonFile = searchParams.branch;
  const SubjectId = searchParams.subjectId;
  // const file = await fs.readFile(process.cwd() + `/src/app/json/${jsonFile}.json`, 'utf8');
  // const data = JSON.parse(file);

  // const filteredData = data.find((item) => item.subject_code === SubjectId);

  // if (!filteredData) {
  //   return <h1>No Data Found</h1>;
  // }
  // console.log(filteredData);

  return (
    // <div className="pd-main-container">
    //   <div className="pd-subject-code">{filteredData.subject_code}</div>
    //   <div className="pd-semi-container-1">
    //     <div className="pd-subject-name">{filteredData.subject_name}</div>
    //     {filteredData.chapters.map((item) => (
    //       <div key={item.chapterId} className="pd-unit">
    //         <h1>{item.chapterNumber} </h1>
    //         <h1>{item.chapterName}</h1>
    //         <p>{item.description}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <h1 className="pd-download-notes">Download Notes</h1>
    //   <div className="pd-semi-container-2">
    //     {filteredData.chapters.map((item) => (
    //       <div key={item.chapterId} className="pd-notes pd-notes-1">Download notes {item.chapterId} <FileDownload filename={`${filteredData.subject_code}-${item.chapterId}.pdf`} buttonText={item.buttonText} /></div>
    //     ))}
    //   </div>
    // </div>
    <>
      <RetrieveData subjectId={SubjectId}/>
    </>
  );
}

// {
//     "id": 4,
//     "semester":"1st",
//     "branch":"CSE",
//     "subject_code": "BT-106",
//     "subject_name": "",
//     "chapters": [
//         {
//             "buttonText": "Chapter 1",
//             "chapterId": 1,
//             "chapterNumber": "Unit 1",
//             "chapterName": "",
//             "description": ""
//         },
//         {
//             "buttonText": "Chapter 2",
//             "chapterId": 2,
//             "chapterNumber": "Unit 2",
//             "chapterName": "",
//             "description": ""
//         },
//         {
//             "buttonText": "Chapter 3",
//             "chapterId": 3,
//             "chapterNumber": "Unit 3",
//             "chapterName": "",
//             "description": ""
//         },
//         {
//             "buttonText": "Chapter 4",
//             "chapterId": 4,
//             "chapterNumber": "Unit 4",
//             "chapterName": "",
//             "description": ""
//         },
//         {
//             "buttonText": "Chapter 5",
//             "chapterId": 5,
//             "chapterNumber": "Unit 5",
//             "chapterName": "",
//             "description": ""
//         }
//     ]
// }