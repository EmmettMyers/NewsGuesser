import '../scss/index.css';

function Loading(){
    return (
        <>
            <div className="bg-violet-700 h-full w-full absolute flex justify-center">
                <div id="loaderHolder"><div id="loader"></div></div>
            </div>
            <img 
                className="h-full w-full opacity-10 absolute top-20" 
                src="https://mediaengagement.org/wp-content/uploads/2014/04/News_Site-600x398.jpg" 
            />
        </>
        
    );
}

export default Loading;