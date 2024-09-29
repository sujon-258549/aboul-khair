"use client"

const Homevideo = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <video
                autoPlay
                muted
                loop
                src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/mombatti.mp4"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1'
                }}
            />
            <div style={{ position: 'relative', zIndex: '1', color: 'white', textAlign: 'center', padding: '20px' }}>
                <img className='w-8/12 mx-auto -mt-14' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/guiding-light-min.png" alt="" />
                <img className='h-36 -mt-20 w-32 mx-auto' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/chairman-sir-290x400-1.jpg" alt="" />

                <h1 className='text-xl font-medium uppercase'>ABUL KHAIR GROUP FOUNDER : LATE MR. ABUL KHAIR 
                </h1>
                <p className='text-[14px] font-light w-[80%] mx-auto mt-5 mb-5'>
                    In 1948, a young man left village home at Nateswar of Noakhali district in search of a better fortune with little money in his pocket but a big dream. He arrived in Chittagong and settled in a retail business job at Pahartali. He spent couple of years working and studying the dynamics of retail trade. Then he opened a retail outlet himself. He also got interested in a cottage tobacco operation near his workplace. After a few years in 1953 he decided to venture himself with a small cottage tobacco business (bidi) named after him. He started small with only a few workers in a single room and personally supervised material procurement, making and distribution operation. This is the day the seed of the country’s one of the largest business conglomerates was sewn by our Founder.
                    <br />
                    With determination and hard work his business flourished rapidly and he accumulated sufficient capital to diversify in other businesses. He was a smart entrepreneur who always scanned for new opportunities and had the courage to pursue new business completely unknown to him. He soon entered in the construction business by acquiring a Brickfield. He subsequently invested in two cottage handlooms. Abul Khair Group corporate office stands tall today where bidi factory and handlooms were located. By the year 1964 he was also engaged in import business with licensing arrangement. After independence he gradually became a major importer of steel plate, cement, coconut oil, milk, cigarette paper etc. Interestingly, Abul Khair Group today is one of the leading manufacturers of most of the products our founder started off as an import business. During his 25 years as business entrepreneur, he ventured in many diverse businesses before he expired prematurely in 1978 at the age of only 49 years.
                    <br />
                    His legacy however lives on in AKG’s entrepreneurial spirit and in its courage to venture in unknown. His virtues of learning quickly and staying connected with the grass-roots remain firmly embedded in AKG business culture. The self-made life of Abul Khair Group Founder remains an inspiration for all young men and women who is determined to work hard to realize their dreams. 

                </p>
            </div>
        </div>
    );
}

export default Homevideo;
