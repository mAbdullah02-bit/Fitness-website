import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Us Section */}
      <section className="bg-no-repeat  bg-cover bg-center bg-fixed text-white " style={{ backgroundImage: "url('https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/about-us-title-img-1.jpg')" }}>
        <div className="">
          <h2 className="md:text-6xl sm:text-4xl text-2xl font-extrabold  lg:py-[130px] lg:p-[300px]  sm:py-[100px] sm:p-[100px] ">ABOUT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-60 bg-white w-auto p-20 text-black  text-center ">
            <div className="  ">
              <img src="/images/dumbell.png" alt="" className='mx-auto '/>
              <h3 className="text-xl font-semibold mt-4hover:text-red-600">Quality Equipment</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
            <img src="/images/register.png" alt="" className='mx-auto' />
              <h3 className="text-xl font-semibold mt-4 hover:text-red-600">Healthy Nutrition Plan</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
            <img src="/images/shower.png" alt="" className='mx-auto' />
              <h3 className="text-xl font-semibold mt-4 hover:text-red-600">Support Service</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
            <img src="/images/Heart.png" alt="" className='mx-auto' />
              <h3 className="text-xl font-semibold mt-4 hover:text-red-600">Unique To Your Needs</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section bg-red-600 text-white py-20 px-10 ">
        <div className="container mx-auto text-center">
          <p className="md:text-3xl text-xl font-bold">
            “Since starting the over 60's mat class at Create, I am much more aware of my body, how I move and my posture. As a result, I no longer take pain medication for my back!”
          </p>
          <p className="mt-4">- Christina Smith, Happy Customer</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-20 text-white">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-bold text-center">MEET OUR STRONGEST TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
            <div className=" text-center hover: lg:hover:scale-[110%] md:hover:scale-[110%] sm:hover:scale-[105%] 
                 transition ease-in-out ">
              <img src="https://media.istockphoto.com/id/665330426/photo/handsome-trainer-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=leFcWOBKuhRqA6LHFl1eOIX2jNF3AhrN4JkS2RcgbUo=" alt="Team Member 1" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-0 bg-white pt-4 text-black">John Doe</h3>
              <p className="text-sm p-2 text-black font-semibold bg-white rounded-b-lg">Personal Trainer</p>
            </div>
            <div className="text-center hover: lg:hover:scale-[110%] md:hover:scale-[110%] sm:hover:scale-[105%]
                 transition ease-in-out">
              <img src="https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?s=612x612&w=0&k=20&c=m4Wk3lVvjEFIHbiAfUuFNBwEhvvSgf4Vv5ib9JUsrJk=" alt="Team Member 2" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-0 bg-white pt-4 text-black">Michael Johnson </h3>
              <p className="text-sm p-2 text-black font-semibold bg-white rounded-b-lg">Fitness Coach</p>
            </div>
            <div className="team-member    transition ease-in-out text-center  hover: lg:hover:scale-[110%] md:hover:scale-[110%] sm:hover:scale-[105%]">
              <img src="https://media.istockphoto.com/id/1161433609/photo/weight-loss-and-right-nutrition-concept.jpg?s=612x612&w=0&k=20&c=iUdFTlepoEOFVMIbvDbtfLRo9uO0qbM6cp7_TQX7ARs=" alt="Team Member 3" className="mx-auto" />
              <h3 className="text-2xl  font-semibold mt-0 bg-white pt-4 text-black">Jane Smith</h3>
              <p className="text-sm p-2 text-black font-semibold bg-white rounded-b-lg ">Nutritionist</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="read-more-btn bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 transition ease-in-out">READ MORE</button>
          </div>
        </div>
      </section>
      <hr className='text-white mx-40'/>
      <section className="take-charge-section py-20">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="md:text-4xl  text-2xl font-bold text-white">TAKE CHARGE OF YOUR LIFE</h2>
        <p className="text-gray-500 mt-4 px-10">
        Take charge of your life right now, Join our fitness 
          community to stay up-to-date with the latest
           workouts, health tips, and more. We’re here to help
            you achieve your fitness goals!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-10">
          {/* Card 1 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1287910461/photo/cheerful-fit-couple-on-white-background.jpg?s=612x612&w=0&k=20&c=wRuD6hog_RoPPuMy3S-tpjzuY_1biPCjeAG_HBm6JTQ=" alt="Treadmill" 
            className="w-full h-48 object-cover hover:scale-125 hover:translate-y-5 transition ease-in-out" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">ONE-HOUR WORKOUT!</h3>
              <p className="text-gray-600 mt-2">
              Take charge of your life right now, Join our fitness 
          community to stay up-to-date with the latest
           workouts, health tips, and more.   </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block hover:scale-110 transition ease-in-out">READ MORE →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1320143958/photo/shot-of-a-young-man-working-out-with-battle-ropes-at-the-gym.jpg?s=612x612&w=0&k=20&c=3uJXw_Pq0eRsSVvNKFmmbB3i-U2YDNL78MasHw4hx6U=" alt="Workout" 
            className="w-full h-48 object-cover hover:scale-125 hover:translate-y-5 transition ease-in-out" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">MORE DISCIPLINE.</h3>
              <p className="text-gray-600 mt-2">
              Take charge of your life right now, Join our fitness 
          community to stay up-to-date with the latest
           workouts, health tips, and more.   </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block hover:scale-110 transition ease-in-out">READ MORE →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1438034462/photo/latino-and-african-sport-woman-exercising-and-build-muscle-in-stadium-active-strong-beautiful.jpg?s=612x612&w=0&k=20&c=kFwCRkh8Q1v6uCoSTL7sQcsbk02zgSZJ1kDgnJ3DAZc=" alt="Boxing" 
            className="w-full h-48 object-cover hover:scale-125 hover:translate-y-5 transition ease-in-out" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">GET FIT IN THE GYM.</h3>
              <p className="text-gray-600 mt-2">
              Take charge of your life right now, Join our fitness 
          community to stay up-to-date with the latest
           workouts, health tips, and more.    </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block hover:scale-110 transition ease-in-out">READ MORE →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
