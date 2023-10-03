import React,{useEffect} from 'react'
import { Howl} from 'howler';
import BgImage from './happy-birthday-heart-baloons.gif'
import Img_1 from './IMG-1.jpg'
import Img_2 from './IMG-2.jpg'
import Img_3 from './IMG-3.jpg'
import Img_4 from './IMG-4.jpg'

import Audio from './birthday-comedy-songs-tamil.mp3'

import Carousel from 'react-bootstrap/Carousel'


const App=()=> {

  useEffect(() => {
    // Create a new Howl instance with your audio file
    const sound = new Howl({
      src: [Audio], // Use the imported audio variable
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    // Clean up the Howl instance when the component unmounts
    return () => {
      sound.unload();
    };
  }, []);

  return (
    <div>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className="col-md-4"> 
          
            <div className='card text-cente border-0 text-white'>
                <audio  autoPlay loop >
                  <source src={Audio} type="audio/mpeg" />
                </audio>
                <img src={BgImage} alt="" style={{width: "460px", height: "750px"}} />
                <div className='card-img-overlay ml-4 d-flex flex-column align-items-center justify-content-center text-center'>
                    <div className="bg-transprent bg-opacity-50 py-3 p-3 d-flex flex-column justify-content-center align-items-center mx-auto">          

                                      
                      <Carousel style={{width: "250px", height: "300px", marginBottom: "5px"}}>
                      <Carousel.Item >
                          <img text="Second slide" src={Img_1} alt="" className="d-block w-100 rounded-circle"/> 
                          <Carousel.Caption >
                            <h3 className='mb-4 fw-bold fs-1' style={{ transform: 'rotate(-30deg)', fontFamily: "Brush Script MT", color: "#7d0657"}}>Gopikrishna</h3>
                          </Carousel.Caption>                         
                        </Carousel.Item>
                        <Carousel.Item >
                          <img text="Second slide" src={Img_2} alt="" className="d-block w-100 rounded-circle"/> 
                          <Carousel.Caption>
                            <h3 className='text-warning mb-4 fw-bold fs-1' style={{ transform: 'rotate(-30deg)', fontFamily: "Brush Script MT"}}>Gopikrishna</h3>
                          </Carousel.Caption>                         
                        </Carousel.Item>
                        <Carousel.Item>
                          <img text="Third slide" src={Img_3} alt="" className="d-block w-100 rounded-circle"/>
                          <Carousel.Caption>
                            <h3 className='text-white mb-4 fw-bold fs-1' style={{ transform: 'rotate(-30deg)', fontFamily: "Brush Script MT"}}>Gopikrishna</h3>
                          </Carousel.Caption>                           
                        </Carousel.Item>
                        <Carousel.Item>
                          <img text="Third slide " src={Img_4} alt="" className="d-block w-100 rounded-circle"/>
                          <Carousel.Caption>
                            <h3 className='text-warning mb-4 fw-bold fs-1' style={{ transform: 'rotate(-30deg)', fontFamily: "Brush Script MT"}}>Gopikrishna</h3>
                          </Carousel.Caption>                           
                        </Carousel.Item>
                      </Carousel>

                      <h5 className='mt-5 fs-4 fw-bold p-3' style={{color: "#030b63"}}>“I could not have asked for a better brother than you. Thank you for always being there for me through thick and thin. Love you, bro. – Happy Birthday Brother”</h5>

                    </div>

                </div>
            </div>
              
          </div>

        </div>     
      </div>
    </div>
  )
}

export default App

