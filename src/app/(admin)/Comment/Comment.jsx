import React from 'react';

const Comment = () => {
  const comments = [
    {
      section: 'COMMENTS',
      items: [
        {
          author: 'Joe D.',
          date: '19 Aug 25',
          time: '20:46',
          text: 'A customer from Muscat submitted an inquiry for Al Mouj Seaside Apartment. Assign to team?',
          align: 'left'
        },
        {
          author: 'Marketing Dept. Admin',
          date: '19 Aug 25',
          time: '20:46',
          text: "Your Google Ads – Muscat Luxury Rentals campaign reached 75% of today's limit.",
          align: 'right'
        },
        {
          author: 'Arshad K.',
          date: '19 Aug 25',
          time: '20:46',
          text: 'Lead #OM-2374 reopened the Azaiba Villas brochure twice in the past hour.',
          align: 'left'
        }
      ]
    },
    {
      section: 'YESTERDAY',
      items: [
        {
          author: 'Marketing Dept. Admin',
          date: '19 Aug 25',
          time: '20:46',
          text: 'Qurum Heights Residence gained 95 new views today across digital channels.',
          align: 'right'
        },
        {
          author: 'Ali Shaikh',
          date: '19 Aug 25',
          time: '20:46',
          text: 'Only 1 townhouse remaining in Madinat Al Irfan Phase 2. Consider boosting visibility.',
          align: 'left'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-10 py-6">
        <h1 className="text-2xl font-normal text-gray-600">Comments & Log History</h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {comments.map((section, sectionIdx) => (
          <div key={sectionIdx} className={sectionIdx > 0 ? 'mt-16' : ''}>
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-xs font-semibold text-gray-500 tracking-widest">
                {section.section}
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {section.items.map((comment, idx) => (
                <div key={idx} className="relative pb-12">
                  {/* Dot on center line */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-gray-50">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {comment.align === 'left' ? (
                    // Left side comment
                    <div className="flex justify-end pr-[calc(50%+2.5rem)]">
                      <div className="max-w-lg bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100">
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-700">{comment.author}</span>
                          <span className="text-gray-400 mx-1.5">|</span>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                          <span className="text-gray-400 mx-1.5">|</span>
                          <span className="text-sm text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{comment.text}</p>
                      </div>
                    </div>
                  ) : (
                    // Right side comment
                    <div className="flex justify-start pl-[calc(50%+2.5rem)]">
                      <div className="max-w-lg bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-100">
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-700">{comment.author}</span>
                          <span className="text-gray-400 mx-1.5">|</span>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                          <span className="text-gray-400 mx-1.5">|</span>
                          <span className="text-sm text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{comment.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;

// const Comment = () => {
//   return (
//     <div className="min-h-screen bg-[#fafafa] px-10 py-8">
      
//       {/* Page Title */}
//       <h2 className="text-lg font-medium text-slate-600 mb-10">
//         Comments & Log History
//       </h2>

//       {/* Timeline */}
//       <div className="relative max-w-6xl mx-auto">

//         {/* Center Line */}
//         <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-slate-300"></div>

//         {/* COMMENTS */}
//         <div className="text-center mb-12">
//           <span className="text-xs font-semibold tracking-widest text-slate-500">
//             COMMENTS
//           </span>
//         </div>

//         {/* Item 1 – Left */}
//         <div className="relative mb-16 flex justify-start">
//           <div className="w-1/2 pr-12 text-right">
//             <div className="bg-white shadow-sm rounded-lg p-4 inline-block max-w-md">
//               <p className="text-sm font-medium text-slate-700">
//                 Joe D. | 19 Aug 25 | 20:46
//               </p>
//               <p className="text-sm text-slate-600 mt-1">
//                 A customer from Muscat submitted an inquiry for Al Mouj Seaside Apartment. Assign to team?
//               </p>
//             </div>
//           </div>

//           {/* Dot */}
//           <span className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full"></span>
//         </div>

//         {/* Item 2 – Right */}
//         <div className="relative mb-16 flex justify-end">
//           <div className="w-1/2 pl-12">
//             <div className="bg-white shadow-sm rounded-lg p-4 inline-block max-w-md">
//               <p className="text-sm font-medium text-slate-700">
//                 Marketing Dept. Admin | 19 Aug 25 | 20:46
//               </p>
//               <p className="text-sm text-slate-600 mt-1">
//                 Your Google Ads – Muscat Luxury Rentals campaign reached 75% of today’s limit.
//               </p>
//             </div>
//           </div>

//           {/* Dot */}
//           <span className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-600 rounded-full"></span>
//         </div>

//         {/* YESTERDAY */}
//         <div className="text-center mt-20 mb-12">
//           <span className="text-xs font-semibold tracking-widest text-slate-500">
//             YESTERDAY
//           </span>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Comment;
