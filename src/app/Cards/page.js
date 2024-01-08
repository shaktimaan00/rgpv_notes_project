'use client';
import { useSearchParams, useRouter } from "next/navigation";
import subjectsData from '../data.json';
import "../components/style.css"
import { Button, Card } from '@nextui-org/react';
import Link from 'next/link';


const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const branch = searchParams.get("branch");
    const year = searchParams.get("year");

    const filteredData = subjectsData.find((data) => {
        return data.year === Number(year) && data.branch === branch;
    });

    if (!filteredData) {
        return <h1>No Data Found</h1>;
    }

    const handleClick = () => {
        router.back();
    }

    return (
        <div id='main-card'>
            <Button className='card-back-btn' variant='flat' color='danger' onClick={handleClick}><p>&lt; Back</p></Button>
            <div id='semi-main-card-2'>
                <h1 id='title1'>{filteredData.sem[0].first}</h1>
                {filteredData.subjects1.map((item) => (
                    <div key={item.content_id} id={item.id}>
                        <Card radius="lg" className={item.class}>
                            <div className='card-content'>
                                <p className="subject-id">{item.subject_id}</p>
                                <p className="subject-name">{item.subject_name}</p>
                            </div>
                            <Button className=" card-notes-btn text-white bg-black/20" variant="ghost" color="default" radius="md" size="md">
                                <Link
                                    href={{
                                        pathname: './pages',
                                        query: {
                                            subjectId: `${item.subject_id}`,
                                            subjectName: `${item.subject_name}`
                                        }
                                    }}
                                    as={'../PageDetails'}
                                >
                                    Click for Notes..
                                </Link>
                            </Button>
                        </Card>
                    </div>
                ))}
            </div>

            <div id='semi-main-card-2'>
                <h1 id="title2">{filteredData.sem[0].second}</h1>
                {filteredData.subjects2.map((item) => (
                    <div key={item.content_id} id={item.id}>
                        <Card radius="lg" className={item.class}>
                            <div className='card-content'>
                                <p className="subject-id">{item.subject_id}</p>
                                <p className="subject-name">{item.subject_name}</p>
                            </div>
                            <Button className=" card-notes-btn text-white bg-black/20" variant="ghost" color="default" radius="md" size="md">
                                <Link
                                    href={{
                                        pathname: '../pages',
                                        query: {
                                            subjectId: `${item.subject_id}`
                                        }
                                    }}
                                >
                                    Click for Notes..
                                </Link>
                            </Button>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page;