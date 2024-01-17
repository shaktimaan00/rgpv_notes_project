'use client'
import { useState, useEffect } from "react";
import { database } from "../firebase";
import { onValue, ref } from "firebase/database";
import FileDownload from "./FileDownload";
import SpinnerComponent from "./Spinner";
import NotFound from "./NotFound";

const RetrieveData = ({ subjectId }) => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDatabase = () => {
      const databaseRef = ref(database);
      const unsubscribe = onValue(databaseRef, (snapshot) => {
        setData(snapshot.val());
      });

      return () => {
        // Ensure that unsubscribe is called as soon as the component is unmounted
        if (unsubscribe) {
          unsubscribe();
        }
      };
    };

    handleDatabase();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = Object.values(data).find((item) => item.subject_code === subjectId);
      setFilteredData(filtered);
      setLoading(false); // Set loading to false once data is available
    }
  }, [data, subjectId]);

  if (loading) {
    return <SpinnerComponent/>; // Show a loading indicator
  }

  if (!filteredData) {
    return <NotFound/>;
  }

  return (
    <div className="pd-main-container">
      <div className="pd-subject-code">{filteredData.subject_code}</div>
      <div className="pd-semi-container-1">
        <div className="pd-subject-name">{filteredData.subject_name}</div>
        {filteredData.chapters.map((item) => (
          <div key={item.chapterId} className="pd-unit">
            <h1>{item.chapterNumber}</h1>
            <h1>{item.chapterName}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <h1 className="pd-download-notes">Download Notes</h1>
      <div className="pd-semi-container-2">
        {filteredData.chapters.map((item) => (
          <div key={item.chapterId} className="pd-notes pd-notes-1">
            Download notes {item.chapterId}{" "}
            <FileDownload filename={`${filteredData.subject_code}-${item.chapterId}.pdf`} buttonText={item.buttonText} />
          </div>
        ))}
      </div>
    </div>
    // <div>
    //   <SpinnerComponent/>
    // </div>
  );
};

export default RetrieveData;
