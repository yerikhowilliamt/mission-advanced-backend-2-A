const uploadFile = (req, res) => {
  const { body, file } = req;

  if(file) {
    res.status(201).json({
      message: "Sukses upload image",
      data: {
        title: body.title,
        description: body.description,
        file: file.filename
      },
    });
  } else {
    return res.status(442).json({ message: "Imgae harus diupload" });
  }
};

module.exports = {uploadFile};