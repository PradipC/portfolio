import { MdDownload } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

export default function ViewResume() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 bg-blue-100/50 dark:bg-[#191e2c] border border-blue-300/50 dark:border-[#2d3240] rounded-xl shadow-sm hover:shadow-md transition-all">
      <HiDocumentText className="text-blue-600 dark:text-[#5c87f6] text-3xl" />
      <div className="text-left">
        <p className="text-sm font-semibold text-gray-800 dark:text-white">
          My Resume
        </p>
        <div className="flex gap-4 mt-1">
          {/* View */}
          <a
            href="/documents/java_pradip_6Y_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-[#5c87f6] text-sm font-medium hover:underline"
          >
            View PDF
          </a>

          {/* Download */}
          <a
            href="/documents/java_pradip_6Y_CV.pdf"
            download="java_pradip_6Y_CV.pdf"
            className="text-blue-600 dark:text-[#5c87f6] text-sm font-medium hover:underline flex items-center gap-1"
          >
            Download <MdDownload className="text-base" />
          </a>
        </div>
      </div>
    </div>

  );
}
