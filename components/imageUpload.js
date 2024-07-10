// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const NewPost = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [previewImage, setPreviewImage] = useState(null);
//   const router = useRouter();

//   const [form, setForm] = useState({});

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setPreviewImage(null);
//     }
//   };

//   const onSubmit = async (data) => {
//     let formData = new FormData();

//     formData.append("name", data.name);
//     for (let file of data.imageUrl) {
//       formData.append(file.name, file);
//     }

//     await fetch("http://localhost:3000/api/upload-images", {
//       method: "POST",
//       body: formData,
//     });

//     // Clear form data and reset input fields
//     setForm({});
//     setPreviewImage(null);
//     reset();
//     router.refresh();
//   };
//   return (
//     <main className="flex flex-col items-center justify-between ">
//       <div className="max-w-md mx-auto">
//         <form
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="input1"
//             >
//               Text Input 1
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full
//                          py-2 px-3 text-gray-700 leading-tight focus:outline-none
//                          focus:shadow-outline"
//               id="input1"
//               type="text"
//               placeholder="Enter text input 1"
//               {...register("name")}
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="fileInput"
//             >
//               File Input
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               className="file-input file-input-bordered w-full max-w-xs"
//               id="fileInput"
//               {...register("imageUrl")}
//               onChange={handleFileChange}
//             />
//             {previewImage && (
//               <Image
//                 width={200}
//                 height={200}
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-2 w-full h-32 object-cover"
//               />
//             )}
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold
//                          py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default NewPost;

"use client";
import React, { useState } from "react";
const App = (e) => {
  const [file, setFile] = useState([]); // State to hold selected files
  const [message, setMessage] = useState(""); // State for error message

  const handleFile = (e) => {
    const fileList = e.target.files;

    setMessage("abc,xyz"); // Clear any previous error messages
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileType = file.type;
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

        if (validImageTypes.includes(fileType)) {
          // Add preview property to File object
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
          setFile((prevFiles) => [...prevFiles, fileWithPreview]);
        } else {
          setMessage("Only images accepted");
        }
      }
    }
  };
  const removeImage = (i) => {
    setFile(file.filter((x) => x.name !== i));
  };
  const [files1, setFiles1] = useState([]); // State to hold selected files
  const [message1, setMessage1] = useState([]); // State for error message

  const handleFile1 = (e) => {
    setMessage("Hi"); // Clear any previous error messages
    const fileList = e.target.files;

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileType = file.type;
        const validVideoTypes = ["video/mp4"];

        if (validVideoTypes.includes(fileType)) {
          // Add preview property to File object
          const fileWithPreview = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
          setFiles1((prevFiles) => [...prevFiles, fileWithPreview]);
        } else {
          setMessage1("Only Video accepted");
        }
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }

    try {
      let result = await fetch("http://localhost:3000/api/upload-images", {
        method: "POST",
        body: formData,
      });
      result = await result.json();
      console.log(result);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-3 gap-10">
        <div className="w-full">
          <label>Image Upload</label>
          <div className="rounded-lg shadow-md bg-gray-50 w-full">
            <div className="m-4">
              <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                {message}
              </span>
              {/* image input */}

              <div className="flex items-center justify-center w-full">
                <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleFile}
                    enctype="multipart/form-data"
                    // onChange={(e) => setFile(e.target.files?.[0])}
                    className="opacity-0"
                    multiple
                    name="files"
                  />
                </label>
              </div>
              <button onClick={(e) => onSubmit(e)}>abc</button>
              {/* image preview */}
              <div className="flex flex-wrap gap-2 mt-2">
                {file.map((file, key) => {
                  return (
                    <div key={key} className="overflow-hidden relative">
                      <i
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                      >
                        x
                      </i>
                      <img
                        className="h-20 w-20 rounded-md"
                        src={URL.createObjectURL(file)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full">
          <label>Video Upload</label>
          <div className="rounded-lg shadow-md bg-gray-100 w-full">
            <div className="m-4">
              <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                {message1}
              </span>
              {/* Video input  */}
              <div className="flex items-center justify-center w-full">
                <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="./images__2_-removebg-preview (2).png"
                      className="h-24"
                      alt=""
                    />
                    <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a Video
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleFile1}
                    className="opacity-0"
                    multiple
                    name="files[]"
                  />
                </label>
              </div>
              {/* video preview */}
              <div className="flex flex-wrap gap-2 mt-2">
                {files1.map((file, key) => {
                  return (
                    <div key={key} className="overflow-hidden relative">
                      <i
                        onClick={() => {
                          removeImage(file.name);
                        }}
                        className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                      ></i>
                      <video
                        className="h-20 w-20 rounded-md"
                        controls
                        src={URL.createObjectURL(file)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
