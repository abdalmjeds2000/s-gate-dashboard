import { useState } from 'react';

interface Folder {
  title: string;
  fileCount: number;
}

const folders: Folder[] = [
  { title: 'SALIC Docs', fileCount: 25 },
  { title: 'Investment', fileCount: 15 },
  { title: 'Finance', fileCount: 5 },
  { title: 'Corporate', fileCount: 10 },
  { title: 'Risk Strategy', fileCount: 2 },
  { title: 'Legal', fileCount: 31 },
  { title: 'Corporate', fileCount: 22 },
];

const OrganizationDocuments = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-4 pt-3 w-full max-w-xs space-y-4">
      <h2 className="text-lg font-semibold text-salic">Organization Documents</h2>

      <div className="grid grid-cols-2 gap-3">
        {folders.map((folder, index) => {
          const isMainFolder = index === 0;
          const isHovered = hoveredIndex === index;

          const backgroundImage = isMainFolder
            ? '/images/folder-bg.svg'
            : isHovered
            ? '/images/folderbgSmHover.svg'
            : '/images/folderbgSm.svg';

          return (
            <div
              key={index}
              className={`
                relative rounded-xl p-2
                ${isMainFolder ? 'col-span-2 h-36' : 'h-20'}
                flex flex-col justify-end
                cursor-pointer transition
              `}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
              }}
              onMouseEnter={() => !isMainFolder && setHoveredIndex(index)}
              onMouseLeave={() => !isMainFolder && setHoveredIndex(null)}
            >
              <h3 className={`${isMainFolder ? 'text-2xl font-bold' : 'text-sm font-semibold'} leading-tight text-salic-primary m-0`}>
                {folder.title}
              </h3>
              <p className="text-xs text-salic-primary font-medium m-0">{folder.fileCount} File</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrganizationDocuments;
