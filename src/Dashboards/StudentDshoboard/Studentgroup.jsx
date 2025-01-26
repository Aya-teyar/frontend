import React from 'react';
import Sidebar from '../StudentDshoboard/Sidebar'; // Sidebar component
import GroupCard from '../StudentDshoboard/GroupCrad';

const Studentgroup = () => {
  const groups = [
    {
      title: "Group 01",
      time: "Fri, Sat 9:00 am",
      link: "https://meet.google.com/landing",
      files: [
        { name: "Create account on webflow.pdf", size: "12.6 MB" },
        { name: "Create account on webflow.pdf", size: "12.6 MB" },
      ],
    },
    
    
  ];

  return (
    <div className="mb-96 py-4 px-4">
      <h2 className="text-2xl font-bold mb-6">My Groups</h2>
      <div className="space-y-6">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            title={group.title}
            time={group.time}
            link={group.link}
            files={group.files}
          />
        ))}
      </div>
    </div>
  );
};

const StudentSchedule = () => {
  return (
    <div className="flex h-screen bg-white">
      
      <Sidebar />
      
     
      <div className="">
        
        <Studentgroup />
      </div>
    </div>
  );
};

export default StudentSchedule;
