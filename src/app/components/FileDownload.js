'use client'
import { useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { Button } from "@nextui-org/react";

const FileDownload = ({ filename, buttonText}) => {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const storageRef = ref(storage, `uploads/${filename}`);
      const url = await getDownloadURL(storageRef);
      setDownloadUrl(url);
      setError(null);

      // Open the download link in a new tab
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error downloading file:', error);
      setDownloadUrl('');
      setError('Error downloading file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant='flat' color='secondary' onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : buttonText}
      </Button>
      {error && <p className='text-red-600 text-[13px] pt-2 pb-2'>{error}</p>}
    </div>
  );
};

export default FileDownload;
