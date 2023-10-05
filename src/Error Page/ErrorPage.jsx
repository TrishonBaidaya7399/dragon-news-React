import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
<div id="error-page">
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/5nr9HDD/error-bg.png)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-8xl font-bold">Oops!</h1>
                <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
                <p className="mb-5 bg-red-600 text-[20px] text-white font-semibold py-2 rounded-lg my-4"><i>{error.statusText || error.message}</i></p>
                <NavLink><button onClick={()=>history.goBack()} className="btn btn-primary text-[20px] font-semibold text-white px-12">Back</button></NavLink>
            </div>
        </div>
    </div>
</div>
  );
}