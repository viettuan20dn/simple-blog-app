import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name = "content", control, label, defaultValue }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange }, fieldState: {}, formState }) => (
          <Editor
            apiKey="azlcwb2st985oxqgko7tmalsk3qlrxmfv1k75fr8cg1ats18"
            initialValue={defaultValue}
            init={{ 
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
