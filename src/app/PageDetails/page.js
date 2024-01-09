// "use client"
import "../components/style.css";
import FileDownload from "../components/FileDownload";
import data from '../json/subjectData.json';

export default function SubjectDetails ({searchParams}) {
    const SubjectId = searchParams.subjectId;
    const SubjectName  = searchParams.subjectName;
    
    const filteredData = data.find((item)=> item.subject_code === SubjectId);

    if(!filteredData){
        return <h1>No Data Found</h1>;
    }

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