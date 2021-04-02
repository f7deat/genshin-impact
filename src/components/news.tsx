import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gateway from "../gateway";

const News = () => {
  const [news, setNews] = useState<any>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    axios.get(Gateway.NEWS).then((response) => {
      setNews(response.data.data.list);
      setTotal(response.data.data.total);
      console.log(response.data.data.list);
    });
  }, []);

  return (
    <div>
      <div className="text-xl font-bold p-3 text-gray-800">News</div>
      <div className="flex -px-3">
        {news &&
          news.map((x: any) => (
            <div key={x.contentId} className="px-3 w-1/5">
              <div className="shadow-md rounded-b-2xl h-full bg-white">
                <div>
                  <img
                    src={
                      x.ext.find((e: any) => e.arrtName === "banner").value[0]
                        .url
                    }
                    alt="haha"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-3">
                  <div className="font-bold text-gray-700 flex-1 hover:text-red-500">
                    <Link to={"/news/details/" + x.contentId}>{x.title}</Link>
                  </div>
                  <div className="text-gray-400 text-sm">{x.start_time}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
