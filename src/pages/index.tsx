import TextLoader from "@/components/TextLoading";
import { html, p } from "framer-motion/client";
import pptxgen from "pptxgenjs";
import { useState } from "react";
const mammoth = require("mammoth");
//const  exec  = require("child_process");
// const { exec } = require("node:child_process");

export default function Home() {
  const [resultHtml, setResultHtml] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  // const convertDocxToTxt = (inputFilePath: string, outputDir: string) => {
  //   const command = `libreoffice --headless --convert-to txt --outdir ${outputDir} ${inputFilePath}`;

  //   exec(command, (error: { message: any; }, stdout: any, stderr: any) => {
  //     if (error) {
  //       console.error(`Lỗi khi chuyển đổi: ${error.message}`);
  //       return;
  //     }
  //     if (stderr) {
  //       console.error(`Stderr: ${stderr}`);
  //       return;
  //     }
  //     console.log(`Chuyển đổi thành công: ${stdout}`);
  //   });
  // };

  //Option when extract text from docx file
  const option = {
    styleMap: [],
    transformDocument: mammoth.transforms?.paragraph(
      (paragraph: { numbering: any }) => {
        if (paragraph.numbering) {
          // Kiểm tra nếu đoạn văn là một phần của danh sách đánh số
          return {
            ...paragraph,
            numbering: {
              ...paragraph.numbering,
              // Điều chỉnh thuộc tính nếu cần thiết
            },
          };
        }
        return paragraph;
      }
    ),
  };

  const generateDOC = () => {
    // convertDocxToTxt("/home/dattx/Downloads/hehe.docx","/home/dattx/Downloads")

    setLoading(true);
    if (file) {
      const reader = new FileReader();

      // Khi FileReader hoàn thành việc đọc file
      reader.onload = async function (event) {
        const arrayBuffer = event.target?.result; // Lấy ArrayBuffer từ file

        try {
          // Sử dụng Mammoth để chuyển đổi ArrayBuffer sang văn bản
          const result = await mammoth.convertToHtml(
            {
              arrayBuffer: arrayBuffer,
            },
            
          );
          if (result) {
            setLoading(false);
            setResultHtml(result.value); // Văn bản đã chuyển đổi
            console.log("value:", result.value);
            console.log("msg:", result.message);
          }
        } catch (err) {
          console.error("Lỗi khi chuyển đổi:", err);
        }
      };

      // Đọc file dưới dạng ArrayBuffer
      reader.readAsArrayBuffer(file);
    }
  };
  //get img from docx
  const getImgData = (value: string) => {
    if(value.includes("img")){
      const firstIndex = value.indexOf(`"`)
      const lastIndex = value.lastIndexOf(`"`)
      return value.slice(firstIndex,lastIndex)
    }
    else return ""
  }

  //get question text from docx
  const getQuestionFromDoc = (string: string) => {
    if(string.includes("Ví dụ:")){
      const firstIndex = string.indexOf("<p>") + 3
      const lastIndex = string.indexOf("</p>")
      return string.slice(firstIndex, lastIndex)
    }
    else return ""
  }

  console.log(getQuestionFromDoc(resultHtml))
  // 1. Create a new Presentation
  const generatePPT = () =>  {
    console.log("generate");
    let pres = new pptxgen();

    // 2. Add a Slide
    let slide = pres.addSlide();
    //setting property of slide
    slide.background = { color: "000000" }; // Solid color

    // 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
    //add title
    slide.addText("TOÁN NÂNG CAO NỀN TẢNG CHUYÊN LỚP 8", {
      x: 1.5,
      y: 0.3,
      color: "FFFFFF",
      fill: { color: "ca99b4" },
      align: pres.AlignH.center,
    });

    //add header
    slide.addText("PHÉP CỘNG VÀ PHÉP TRỪ CÁC PHÂN THỨC ĐẠI SỐ", {
      x: 1.5,
      y: 0.6,
      color: "FFFFFF",
      fill: { color: "ca99b4" },
      align: pres.AlignH.center,
    });

    //add question
    slide.addText(getQuestionFromDoc(resultHtml), {
      x: 0.3,
      y: 1,
      color: "FFFFFF",
      fill: { color: "ca99b4" },
      align: pres.AlignH.left,
    });

    //add image if need
    // slide.addImage({data:getImgData(resultHtml), //base64 image
    //   x: 1.5,
    //   y: 1.3,
    //   w: 3,
    //   h: 1.6
    // });

    // 4. Save the Presentation
    pres.writeFile({ fileName: "Sample Presentation.pptx" });
  };

  return (
    <div className="pt-40 flex justify-center gap-6 w-full items-center ">
      {loading && (
        <>
          <p>Loading...</p>
        </>
      )}
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
        <button
          className="h-10 w-32 bg-red-600"
          onClick={() => {
            setResultHtml("");
            setFile("")
            setLoading(false);
          }}
        >
          Reset text
        </button>
      </div>
      <div className="w-[900px] h-full bg-red-300" >
        {/* text here */}
        {/* {resultHtml} */}
        <div dangerouslySetInnerHTML={{__html:resultHtml}}></div>
      </div>

      <div>
        <h1>PPTX TEST</h1>
        <button onClick={() => generatePPT()} className="h-10 w-32 bg-red-600">
          Generate PPTx
        </button>
      </div>
    </div>
  );
}
