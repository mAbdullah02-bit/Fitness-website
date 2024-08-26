import React from 'react';
import ImageCard from '../components/ImageCard';

function Classes() {
  return (
    <div>
      <div className="bg-[url('https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/calculator-title-img.jpg')] bg-no-repeat bg-center bg-cover h-[400px] w-auto bg-fixed text-white">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold md:p-40 p-20 py-40">Classes</h1>
      </div>

      <div className="p-16 bg-white text-center">
        <h1 className="font-extrabold text-4xl">Training Programs</h1>
        <h2 className="mt-4 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing imperdiet elit.
          Nean commodo ligula eget dolor. Cum sociis Theme natoque penatibus et
          magnis dis.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white">
        <div className="col-span-2">
          <ImageCard
            title="CROSSFIT"
            subtitle="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas."
            image="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-2-550x550.jpg"
            link="#"
          />
        </div>
        <div>
          <ImageCard
            title="BODY BALANCE"
            subtitle="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas."
            image="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-3-550x550.jpg"
            link="#"
          />
        </div>
        <div>
          <ImageCard
            title="CARDIO"
            subtitle="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas."
            image="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-4-550x550.jpg"
            link="#"
          />
        </div>
        <div className="col-span-2">
          <ImageCard
            title="BOX"
            subtitle="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas."
            image="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-1-550x550.jpg"
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Classes;
