import * as React from 'react'
import '../../setPublic/scss/loading.scss'

const Loading = () => {
    React.useEffect(() => {
        const path = document.getElementsByTagName('path')
        for(let i=0; i<path.length; i++) {
            path[i].style.strokeDasharray = path[i].getTotalLength().toString()
            path[i].style.strokeDashoffset = path[i].getTotalLength().toString()
            path[i].style.setProperty('--delay', (i * 0.1).toString() + 's')
        }
    }, [])
    return (<>
    <div className='loadingFull'>
        <svg className='loadingLogo' viewBox="0 0 77 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.6413 53.7727H29.5886L32.654 57.7894L41.1694 68.9476C39.9851 69.1527 38.7568 69.2557 37.4823 69.2557C33.525 69.2557 29.9985 68.263 26.8397 66.2975C23.7445 64.3571 21.2109 61.4644 19.2783 57.4925C17.4014 53.5868 16.4027 48.6675 16.4027 42.6364C16.4027 36.6051 17.4014 31.6858 19.2784 27.7801C21.2109 23.8085 23.7443 20.9159 26.8393 18.9755C29.9982 17.0098 33.5248 16.017 37.4823 16.017C41.4411 16.017 44.9539 17.0104 48.0865 18.9735L48.0929 18.9775C51.21 20.9179 53.7407 23.8084 55.6482 27.7752L55.6531 27.7852C57.5516 31.6889 58.5618 36.6061 58.5618 42.6364C58.5618 48.6667 57.5516 53.5839 55.653 57.4876L55.6482 57.4975C54.6902 59.4899 53.5749 61.2107 52.307 62.6761L46.2908 54.76L45.5405 53.7727H44.3004H34.6413ZM37.4823 82.4943C41.8577 82.4943 45.9522 81.7862 49.7436 80.3554L54.9393 87.3139L55.6891 88.3182H56.9425H66.6016H71.6104L68.5994 84.3154L60.5041 73.5533C63.3727 70.7998 65.76 67.485 67.6695 63.6332C70.6454 57.6306 72.0845 50.6051 72.0845 42.6364C72.0845 34.6676 70.6454 27.6421 67.6695 21.6396C64.7146 15.6792 60.6159 11.0045 55.3593 7.70621C50.0967 4.40422 44.112 2.77841 37.4823 2.77841C30.8525 2.77841 24.8678 4.40422 19.6052 7.70621C14.3486 11.0045 10.2499 15.6792 7.29495 21.6396C4.31911 27.6421 2.87997 34.6676 2.87997 42.6364C2.87997 50.6051 4.31911 57.6306 7.29495 63.6332C10.2499 69.5936 14.3486 74.2682 19.6052 77.5665C24.8678 80.8685 30.8525 82.4943 37.4823 82.4943Z" stroke="white" strokeWidth="5"/>
        </svg>
    </div>
    </>)
}

export default Loading
