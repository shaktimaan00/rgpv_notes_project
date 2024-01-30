"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Data from "../json/cse_data.json";
import NotFound from "../components/NotFound";
import {SearchIcon} from "../components/SearchIcon.js";

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [filterdata, setFilterdata] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const router = useRouter(); // Add the useRouter hook

  console.log(query);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    let newQuery = '';
    if (query) newQuery = query.toUpperCase();

    setQuery(newQuery);

    const x = await fetchData(newQuery);
    setFilterdata(x);
    setSearchPerformed(true);

    // Redirect to PageDetails with the specified parameters
    if (x) {
      router.push(`/PageDetails?subjectId=${x.subject_code}&subjectName=${x.subject_name}&branch=${x.branch}`)
    //   setSearchPerformed(false);
    }
  };

  const fetchData = async (query) => {
    return new Promise((resolve) => {
      const result = Data.find((item) => item.subject_code === query);
      resolve(result);
    });
  };
  
  return (
    <div>
        <>
          <Input
            classNames={{
                base: "max-w-full sm:max-w-[15rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size='sm'
            startContent={<SearchIcon size={18} />}
            type="search"
            value={query}
            onKeyPress={handleKeyPress}
            onChange={(e) => setQuery(e.target.value)}
          />
        </>
    </div>
  );
};

export default SearchComponent;
