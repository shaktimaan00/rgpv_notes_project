import "../components/style.css";
import RetrieveData from "../components/RetriveData";

export async function generateMetadata({searchParams}) {
  const SubjectId = searchParams.subjectId;
  const branch = searchParams.branch;

  return{
      title: `${SubjectId} Branch Subject`,
      robots: {
          index: true,
          follow: true,
      },
      description: `RGPV Notes for ${SubjectId} & ${branch} Branch`,
  }

}


export default async function Page({ searchParams }) {
  const SubjectId = searchParams.subjectId;

  return (
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