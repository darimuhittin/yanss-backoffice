import React from "react";
import styles from "./YFileInput.module.scss";

import { Row, Col } from "react-bootstrap";
const YFileInput = ({ multiple = false, onChange = () => {} }) => {
  const [files, setFiles] = React.useState([]);
  const [previews, setPreviews] = React.useState([]);
  React.useEffect(() => {
    const prv = [];

    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const fr = new FileReader();
      fr.onload = (e) => {
        prv.push(e.target.result);
        setPreviews(prv);
      };
      fr.readAsDataURL(files[i]);
    }
  }, [files]);
  return (
    <>
      <div className="d-flex space-x-2 align-items-center">
        <label for="files" className={styles.yFileInput__btn}>
          Select Image
        </label>
        {previews.length > 0 && (
          <span>
            {previews.length} {previews.length > 1 ? "images" : "image"}{" "}
            selected.
          </span>
        )}
      </div>
      <input
        id="files"
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        multiple={multiple}
        onChange={(e) => {
          setFiles(e.target.files);
          onChange(e);
        }}
        style={{ visibility: "hidden" }}
      />
      <Row>
        {previews.map((preview) => {
          return (
            <Col key={preview} xs={6} md={3} className="my-1 text-center mb-4">
              <img
                alt="product preview"
                src={preview}
                width={100}
                height={100}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default YFileInput;
