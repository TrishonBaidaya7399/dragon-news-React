import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import NewsDetails from "./NewsDetails";
import { SlCalender } from 'react-icons/sl';

const News = () => {
    const { id } = useParams();
    const news = useLoaderData();
    console.log(news);

    // Find the news item with the matching id
    const selectedNews = news.find((aNews) => aNews._id === id);

    return (
        <div className="mt-[50px]">
            <Header />
            <div className="NavBar bg-gray-100 rounded-lg mt-8">
                <Navbar />
            </div>
            <div className="grid grid-cols-4 mt-[30px] gap-6">
                <div className="col-span-3">
                    <h1 className="text-[20px] text-gray-700 font-semibold mb-[20px]">Dragon News</h1>
                    {selectedNews ? (
                        <NewsDetails key={selectedNews._id} selectedNews={selectedNews}></NewsDetails>
                    ) : (
                        <p>No news found with the specified ID.</p>
                    )}
                    <h1 className="text-[20px] text-gray-700 font-semibold mb-[20px]">Editors Insight</h1>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-5">
                            <img className="w-full" src="../../../src/assets/images/editorsInsight1.png" alt="" />
                            <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                            <p className="flex gap-2 items-center text-[16px] text-gray-500"><SlCalender/>Jan 4, 2022</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <img className="w-full" src="../../../src/assets/images/editorsInsight2.png" alt="" />
                            <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                            <p className="flex gap-2 items-center text-[16px] text-gray-500"><SlCalender/>Jan 4, 2022</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <img className="w-full" src="../../../src/assets/images/editorsInsight3.png" alt="" />
                            <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                            <p className="flex gap-2 items-center text-[16px] text-gray-500"><SlCalender/>Jan 4, 2022</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;
