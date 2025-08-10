// import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';

function Header() {
  return(
    <div className="Header">
      <div className='catagories'>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100" alt="" />
          <p>Minutes</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt="" />
          <p>Mobiles & tablets</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" />
          <p>Fashion</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" />
          <p>Electronics</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" />
          <p>Home & Furniture</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100" alt="" />
          <p>TVs & Appliances</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" />
          <p>Flight bookings</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" />
          <p>Beauty, Food...</p>
        </div>
        <div className='catagory'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" alt="" />
          <p>Grocery</p>
        </div>
      </div>

      <div className='offers'>
        <div className='offer'>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80" alt="" />
          {/* <h1>Test</h1> */}
        </div>
      </div>

      <div className='list-catagories'>
        <h2>Best of Electronics</h2>
        <div className='lists'>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80" alt="" />
            <div className='list-content'>
              <p>Best True Wirelist headphones</p>
              <p>Grab Now</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Printers</p>
              <p>From $2336</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Fastrack Smart watches</p>
              <p>From $1,399</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Best Selling MobileSpeakers</p>
              <p>From $499</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Monitor</p>
              <p>From $8279</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/xif0q/printer/d/4/f/-original-imagtzvzgggbgqs6.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Printers</p>
              <p>From $10190</p>
            </div>
          </div>
        </div>
      </div>

      <div className='list-catagories'>
        <h2>Beauty, Food, Toys & More</h2>
        <div className='lists'>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Top Selling Stationary</p>
              <p>From $59</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Coffee Powder</p>
              <p>Upto 80% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Geared Cycles</p>
              <p>Up to 70% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Best of Action Toys</p>
              <p>Up to 70% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Soft Toys</p>
              <p>Up to 70% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Food Speeads</p>
              <p>Up to 75% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Remote Control Toys</p>
              <p>Up to 80% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Puzzles & Cubes</p>
              <p>From $79</p>
            </div>
          </div>
        </div>
      </div>

      <div className='list-catagories'>
        <h2>Beauty, Food, Toys & More</h2>
        <div className='lists'>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=80" alt="" />
           
            <div className='list-content'>
              <p>Dry Fruits</p>
              <p>Upto 75% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Breakfast Cereal</p>
              <p>Upto 75% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Tea Powder</p>
              <p>Upto 75% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Honey</p>
              <p>Upto 75% Off</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>Musical Toys</p>
              <p>Under $199</p>
            </div>
          </div>
          <div className='list'>
            <img src="https://rukminim2.flixcart.com/image/120/120/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=80" alt="" />
            
            <div className='list-content'>
              <p>learning & Educational Games</p>
              <p>Upto 80% Off</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
  
}

export default Header;
