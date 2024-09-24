import './upload.css';

import { IKContext, IKImage, IKUpload } from 'imagekitio-react';

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/upload');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = () => {
  const onError = (err) => {
    console.log('Error', err);
  };

  const onSuccess = (res) => {
    console.log('Success', res);
  };

  const onUploadProgress = (progress) => {
    console.log('Progress', progress);
  };

  const onUploadStart = (evt) => {
    console.log('Start', evt);
  };
  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticationEndpoint={authenticator}
    >
      <IKUpload
        filename='test-upload.png'
        onSuccess={onSuccess}
        onError={onError}
        onUploadStart={onUploadStart}
        onUploadProgress={onUploadProgress}
        useUniqueFileName={true}
      />
    </IKContext>
  );
};

export default Upload;
