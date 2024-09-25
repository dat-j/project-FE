import { html } from "framer-motion/client";
import pptxgen from "pptxgenjs";
import { useState } from "react";
const mammoth = require("mammoth");

export default function Home() {
  const [resultHtml, setResultHtml] = useState<any>();
  const [file, setFile] = useState<any>();
  const generateDOC = () => {
    if (file) {
      const reader = new FileReader();

      // Khi FileReader hoàn thành việc đọc file
      reader.onload = async function (event) {
        const arrayBuffer = event.target?.result; // Lấy ArrayBuffer từ file

        try {
          // Sử dụng Mammoth để chuyển đổi ArrayBuffer sang văn bản
          const result = await mammoth.convertToHtml({
            arrayBuffer: arrayBuffer,
          });
          debugger
          setResultHtml(result.value); // Văn bản đã chuyển đổi
          console.log("value:", result.value);
          console.log("msg:", result.message);
        } catch (err) {
          console.error("Lỗi khi chuyển đổi:", err);
        }
      };

      // Đọc file dưới dạng ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  };

  // 1. Create a new Presentation
  const generatePPT = () => {
    console.log("generate");
    let pres = new pptxgen();

    // 2. Add a Slide
    let slide = pres.addSlide();

    // 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
    slide.addText("Hello World from PptxGenJS...", {
      x: 3.5,
      y: 3.5,
      color: "363636",
      fill: { color: "F1F1F1" },
      align: pres.AlignH.center,
    });

    // 4. Save the Presentation
    pres.writeFile({ fileName: "Sample Presentation.pptx" });
  };

  return (
    <div className="pt-40 flex justify-center gap-6 w-full items-center ">
      <div className="flex flex-col gap-2 justify-center">
        <h1>DOCX TEST</h1>
        <input
          type="file"
          id="upload"
          accept=".docx"
          placeholder="upload .docx file"
          onChange={(e) => setFile(e.target.files && e.target.files[0])}
        />
        <button onClick={() => generateDOC()} className="h-10 w-32 bg-red-600">
          Generate DOCx
        </button>
      </div>
      <div className="w-[300px] h-full bg-red-300"></div>
      {resultHtml}
      <div>
        <h1>PPTX TEST</h1>
        <button onClick={() => generatePPT()} className="h-10 w-32 bg-red-600">
          Generate PPTx
        </button>
      </div>
    </div>
  );
}
