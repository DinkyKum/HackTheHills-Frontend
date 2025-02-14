import React from 'react'

const HeroSection = () => {
  return (
    <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://web-assets.bcg.com/dims4/default/4bfb467/2147483647/strip/true/crop/2880x1620+0+0/resize/2880x1620!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F3d%2F22%2F67198e294336beb251864ff8c2d9%2Fnet-zero-trucks-rectangle-opt.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://static.vecteezy.com/system/resources/previews/039/099/634/non_2x/ai-generated-a-large-white-semi-truck-was-driving-on-the-road-near-the-lake-commercial-cargo-semi-truck-in-a-refrigerated-semi-trailer-along-the-road-with-green-trees-near-the-lake-photo.jpeg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://ftl-media.imgix.net/truck/long-haul/cascadia-red-1366x475.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.mobilesemitruckrepairlv.com/wp-content/uploads/2020/10/types-of-semi-trucks.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default HeroSection