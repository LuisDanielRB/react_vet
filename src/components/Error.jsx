import React from "react";

function Error({ children }) {
  return (
    <div className="border border-red-600 text-red-600 text-center p-3 uppercase font-bold mb-3 rounded">
      {children}
    </div>
  );
}

export default Error;
