import axios from "../../utils/axios";
import React, { useState } from "react";
import styled from "styled-components";

const Uploads = () => {
  const [upload_type, setUploadType] = useState(1);
  const [image_file, setImageFile] = useState();
  const [video_file, setVideoFile] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [stream_data, setStreamData] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",name);
    formData.append("description",description);
    if (upload_type === 2) {
      formData.append("image", image_file);
      axios
        .post("/api/live/start_livestream", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => setStreamData(resp.data))
        .catch((e) => console.error(e));
    }
  };

  return (
    <Container>
      <UploadForm onSubmit={submitForm}>
        <FormHeader
          children={
            upload_type === 1
              ? "Upload Video"
              : upload_type === 2
              ? "Livestream"
              : "Uploads"
          }
        />
        <InputLabel>
          Please select video or livestream
          <RadioContainer>
            <RadioLabel>
              <RadioButton
                type="radio"
                name="upload_type"
                checked={upload_type === 1}
                onChange={(e) => e.target.checked && setUploadType(1)}
              />
              Video
            </RadioLabel>
            <RadioLabel>
              <RadioButton
                type="radio"
                name="upload_type"
                checked={upload_type === 2}
                onChange={(e) => e.target.checked && setUploadType(2)}
              />
              Livestream
            </RadioLabel>
          </RadioContainer>
        </InputLabel>
        <InputBox
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Description (optional)"
          type="text"
          rows="4"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <InputLabel for="image_input">
          Select Image
          <InputBox
            id="image_input"
            placeholder="Select Image"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
          />
        </InputLabel>
        {upload_type === 1 && (
          <InputLabel>
            Select Video
            <InputBox
              placeholder="Select Video"
              type="file"
              onChange={(e) => setVideoFile(e.target.files[0])}
              required
            />
          </InputLabel>
        )}
        {stream_data ? (
          <SubmitBtn value="Running..." type="submit" disabled full_width />
        ) : (
          <SubmitBtn
            value={upload_type === 2 ? "Start" : "Submit"}
            type="submit"
            full_width
          />
        )}

        {stream_data && (
          <InfoContainer>
            <h2>RTMP Link for your stream</h2>
            <h5>Stream url: </h5>
            {stream_data.stream_link}
            <h5>Stream Key: </h5>
            {stream_data.stream_key}
            <br />
            <br />
            <br />
            *Note: Put this url and key in your livestream application for
            starting the stream.
          </InfoContainer>
        )}
      </UploadForm>
    </Container>
  );
};

export default Uploads;

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
`;
const UploadForm = styled.form`
  background-color: #efefef;
  /* margin-top: 10%; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1px;
  padding: 20px;
  column-gap: 20px;
`;

const RadioLabel = styled.label`
  padding-left: 10px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  margin-top: 10px;
  font-size: 1rem;
  &:focus {
    border: 3px solid #555;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const RadioButton = styled.input`
  margin: 0 10px;
`;

const FormHeader = styled.p`
  font-size: 1.7rem;
  color: #000000a2;
  text-align: center;
  margin: 0 10px 20px 10px;
  font-weight: bold;
  text-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10px;
  font-size: 1rem;
  border: 0.2px solid #555;
  &:focus {
    border: 1px solid #555;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 10px;
  font-size: 1rem;
  &:focus {
    border: 1px solid #555;
  }
`;

const SubmitBtn = styled.input`
  background-color: #4caf50;
  width: ${(props) => props.full_width && "100%"};
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InputLabel = styled.label``;

const InfoContainer = styled.div`
  margin-top: 20px;
  background-color: #faf6c763;
  padding: 20px;
  border-radius: 20px;
`;
