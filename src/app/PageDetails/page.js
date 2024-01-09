// "use client"
import "../components/style.css";
import { promises as fs } from 'fs';
import FileDownload from "../components/FileDownload";

export default async function SubjectDetails ({searchParams}) {
    const SubjectId = searchParams.subjectId;
    const SubjectName  = searchParams.subjectName;
    const file = await fs.readFile(process.cwd() + '/src/app/json/subjectData.json', 'utf8');
    const data = JSON.parse(file);
    
    const filteredData = data.find((item)=> item.subject_code === SubjectId);

    return (
        <div className="pd-main-container">
            <div className="pd-semi-container-1">
                <div>{filteredData.subject_name}</div>
                {filteredData.chapters.map((item) => (
                    <div key={item.chapterId} className={`pd-unit-${item.chapterId}`}>
                        <h1>{item.chapterNumber} </h1> 
                        <h1>{item.chapterName}</h1>
                    </div>
                ))}
            </div>
            <h1 className="pd-download-notes">Download Notes</h1>
            <div className="pd-semi-container-2">
                {filteredData.chapters.map((item) => (
                    <div key={item.chapterId} className="pd-notes pd-notes-1">Download notes 1 <FileDownload filename={`${filteredData.subject_code}-${item.chapterId}.pdf`} buttonText={item.buttonText}/></div>    
                ))}
            </div>
        </div>
    )
}