"use client";

import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { CldUploadWidget } from "next-cloudinary";
import classes from "./ImageUpload.module.css";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="s2han6av"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open?.()} className={classes.container}>
            <TbPhotoPlus size={50} />
            <div className={classes.instruction}>Click to upload</div>
            {value && (
              <div className={classes.image}>
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};
export default ImageUpload;
