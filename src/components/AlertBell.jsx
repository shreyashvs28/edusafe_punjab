import React from 'react';
import { Bell } from 'lucide-react';

const AlertBell = ({ unreadCount, onClick }) => {
  return (
    <button onClick={onClick} className="relative p-2 border rounded-lg hover:bg-gray-100">
      <Bell className="w-5 h-5 text-gray-600" />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {unreadCount}
        </span>
      )}
    </button>
  );
};

export default AlertBell;
