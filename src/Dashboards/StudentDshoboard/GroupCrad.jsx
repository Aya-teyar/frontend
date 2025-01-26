
import React from 'react';

const GroupCard = ({ title, time, link, files }) => {
    return (
      <div className="bg-yellow-50 w-[2000px]  mt-0  border  p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{time}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            Session Link:{" "}
            <a
              href={link}
              className="text-blue-500 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </p>
          <div className="mt-4">
            <h4 className="text-gray-800 font-medium">
              Attach Files ({files.length})
            </h4>
            <div className="space-y-2 mt-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm border"
                >
                  <div>
                    <p className="text-gray-700 text-sm">{file.name}</p>
                    <p className="text-gray-500 text-xs">{file.size}</p>
                  </div>
                  <a
                    href="#"
                    className="text-customGreen hover:text-green-600 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default GroupCard;  