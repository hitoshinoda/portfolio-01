const contentData = [
    {
        id: 1,
        title: "About",
        description: "私たちは設計だけでなく、コンセプトを実現するまで施工にもこだわります。",
        className: "border-t border-gray-300",
    },
    {
        id: 2,
        title: "Service",
        description: "デザイン、施工、監理まで一貫して行います。",
        className: "md:border-t border-gray-300",
    },
    {
        id: 3,
        title: "Works",
        description: "過去の事例やプロジェクトを紹介します。",
        className: "",
    },
    {
        id: 4,
        title: "Contact",
        description: "住宅・店舗・デザインのご相談はお気軽にお問い合わせください。",
        className: "border-b border-gray-300",
    },
];

interface ContentListProps {
    className: string;
}

export default function ContentList({ className }: ContentListProps) {
  return (
    <>
      <div className={`container-wide ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 divide-y divide-gray-300">
          {contentData.map((content) => (
          <div key={content.id} className={`flex items-center p-4 cursor-pointer ${content.className}`}>
            <div className="w-1/3 font-semibold">
              {content.title}
            </div>
            <div className="w-2/3 text-sm">
              {content.description}
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
