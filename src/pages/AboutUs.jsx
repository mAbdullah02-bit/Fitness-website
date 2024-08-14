import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* About Us Section */}
      <section className="about-us-section relative bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=400')" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold">ABOUT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            <div className="feature">
              <i className="icon-gym-equipment"></i>
              <h3 className="text-xl font-semibold mt-4">Quality Equipment</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
              <i className="icon-nutrition-plan"></i>
              <h3 className="text-xl font-semibold mt-4">Healthy Nutrition Plan</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
              <i className="icon-support-service"></i>
              <h3 className="text-xl font-semibold mt-4">Support Service</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature">
              <i className="icon-tailored-program"></i>
              <h3 className="text-xl font-semibold mt-4">Unique To Your Needs</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section bg-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <p className="text-3xl font-bold">
            “Since starting the over 60's mat class at Create, I am much more aware of my body, how I move and my posture. As a result, I no longer take pain medication for my back!”
          </p>
          <p className="mt-4">- Christina Smith, Happy Customer</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">MEET OUR STRONGEST TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="team-member text-center">
              <img src="team-member1.jpg" alt="Team Member 1" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">John Doe</h3>
              <p className="text-sm mt-2">Personal Trainer</p>
            </div>
            <div className="team-member text-center">
              <img src="team-member2.jpg" alt="Team Member 2" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-sm mt-2">Fitness Coach</p>
            </div>
            <div className="team-member text-center">
              <img src="team-member3.jpg" alt="Team Member 3" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Michael Johnson</h3>
              <p className="text-sm mt-2">Nutritionist</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="read-more-btn bg-red-600 text-white py-2 px-4 rounded">READ MORE</button>
          </div>
        </div>
      </section>
      <section className="take-charge-section py-20">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">TAKE CHARGE OF YOUR LIFE</h2>
        <p className="text-gray-500 mt-4">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
          Donec pede justo, fringilla vel, aliquet nec.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="treadmill.jpg" alt="Treadmill" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">ONE-HOUR WORKOUT!</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudinlorem quis bibendum aucti elit consequat ipsutis sem...
              </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block">READ MORE →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="workout.jpg" alt="Workout" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">MORE DISCIPLINE.</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudinlorem quis bibendum aucti elit consequat ipsutis sem...
              </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block">READ MORE →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="boxing.jpg" alt="Boxing" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-gray-400 text-xs">MARCH 2, 2018</p>
              <h3 className="text-xl font-bold mt-2">GET FIT IN THE GYM.</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudinlorem quis bibendum aucti elit consequat ipsutis sem...
              </p>
              <a href="/read-more" className="text-red-600 font-semibold mt-4 inline-block">READ MORE →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
