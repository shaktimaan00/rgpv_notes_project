import SubjectBox from "./SubjectComponent";
// import { useSearchParams } from "next/navigation";


export async function generateMetadata({searchParams}) {
    const branch = searchParams.branch;
    const year = searchParams.year;

    const years = ['First', 'Second', 'Third', 'Fourth'];

    return{
        title: `${years[Number(year-1)]} Year ${branch} Subjects`,
        robots: {
            index: true,
            follow: true,
        },
        description: `Subjects for ${years[Number(year-1)]} Year ${branch} branch students of RGPV University`
    }

}


const SubjectList = () => {
  return (
    <>
        <SubjectBox />
    </>
  )
}

export default SubjectList