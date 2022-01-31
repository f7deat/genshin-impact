import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gateway from "../gateway";

interface IQueryRouter {
    id: string
}

const NewsDetails = () => {

    const { id } = useParams<IQueryRouter>();

    const [newsDetail, setNewsDetail] = useState<any>(null);

    useEffect(() => {
        axios.get(Gateway.NEW_DETAIL + 'contentId=' + id + '&around=1').then((response) => {
            setNewsDetail(response.data.data);
        });
    }, [id]);

    return (
        <div className="flex">
            <div className="w-3/4">
                <div className="py-10 px-20 shadow-lg rounded">
                    <div className="font-bold mb-2 text-3xl">{newsDetail?.title}</div>
                    <div className=" mb-5 text-sm">{newsDetail?.intro}</div>
                    <div className="post">
                        <div dangerouslySetInnerHTML={{ __html: newsDetail?.content }} />
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <div className="pl-4">
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="https://uploadstatic-sea.mihoyo.com/contentweb/20210330/2021033011084436735.jpg" alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mountain</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsDetails