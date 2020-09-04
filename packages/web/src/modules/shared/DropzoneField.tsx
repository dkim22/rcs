import * as React from 'react';
import { FieldProps } from 'formik';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { Button } from 'antd';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name, value },
  form: { setFieldValue, values, setValues },
}) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      setFieldValue(name, acceptedFiles[0]);
    },
  });

  const pUrl = (value ? value.preview : null) || values.pictureUrl;

  const thumbs = files.map((file: any) => (
    <div style={thumb as any} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="preview" />
      </div>
    </div>
  ));

  // TODO: Check updatelisting with picture preview
  return (
    <>
      <section className="container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer as any}>{thumbs}</aside>
        {pUrl && (
          <div style={thumb as any}>
            <div style={thumbInner}>
              <img src={pUrl} style={img} alt="preview" />
            </div>
          </div>
        )}
      </section>
      <Button
        onClick={() =>
          setValues({
            ...values,
            pictureUrl: null,
            picture: null,
          })
        }
      >
        remove
      </Button>
    </>
  );
};
