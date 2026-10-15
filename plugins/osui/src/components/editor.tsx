import { useState } from "react";
import { ReactPhotoEditor } from "react-photo-editor";

export function Editor() {
  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);

  // Show modal if file is selected
  const showModalHandler = () => {
    if (file) {
      setShowModal(true);
    }
  };

  // Hide modal
  const hideModal = () => {
    setShowModal(false);
  };

  // Save edited image
  const handleSaveImage = (editedFile: any) => {
    setFile(editedFile);
    // Do something with the edited file
  };

  const setFileData = (e: any) => {
    if (e?.target?.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <input type="file" onChange={(e) => setFileData(e)} multiple={false} />

      <button onClick={showModalHandler}>Edit Photo</button>

      <ReactPhotoEditor
        open={showModal}
        onClose={hideModal}
        file={file}
        onSaveImage={handleSaveImage}
      />
    </>
  );
}
