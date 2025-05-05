import SimpleButton from "./Button/SimpleButton";

interface NewsProps {
  className?: string;
}

interface NewsItem {
  date: string;
  title: string;
  tag: string;
}

const newsData: NewsItem[] = [
  {
    date: "2024.03.15",
    title: "新規物件の完成について",
    tag: "お知らせ",
  },
  {
    date: "2024.03.10",
    title: "リノベーション事例の追加",
    tag: "事例",
  },
  {
    date: "2024.03.05",
    title: "展示場の営業時間変更のお知らせ",
    tag: "お知らせ",
  },
];

export default function News({ className }: NewsProps) {
  return (
    <>
      <div className={`container-wide ${className}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
          {/* 左側: タイトル */}
          <div className="w-full md:w-1/4 text-center">
            <h2>News</h2>
            <div className="text-sm text-gray-500">お知らせ</div>
          </div>

          {/* 右側: ニュースリスト */}
          <div className="w-full md:w-3/4">
            <div className="flex flex-col gap-8 border-t border-gray-200 pt-8">
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-gray-200 pb-8 cursor-pointer transition-all duration-300 hover:opacity-70"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                    <span className="text-sm text-gray-500 min-w-[100px]">
                      {news.date}
                    </span>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
                      <div className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">
                        {news.title}
                      </div>
                      <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">
                        {news.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          {/* More ボタン */}
          <div className="mt-12 text-center">
            <SimpleButton className="max-w-[180px] w-full">more</SimpleButton>
          </div>
      </div>
    </>
  );
}
