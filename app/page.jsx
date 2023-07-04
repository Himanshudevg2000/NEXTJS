import React from "react";
import {notFound} from "next/navigation";

const page = () => {

    // this is use for error
    // return new Error('lol')
    // notFound();

  return (
    <div>
      <h1> Home Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ullam
        vitae dolores modi dolorum voluptate corrupti, iusto possimus fuga
        fugiat iste temporibus. Accusantium, temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ullam
        vitae dolores modi dolorum voluptate corrupti, iusto possimus fuga
        fugiat iste temporibus. Accusantium, temporibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ullam
        vitae dolores modi dolorum voluptate corrupti, iusto possimus fuga
        fugiat iste temporibus. Accusantium, temporibus.
      </p>
    </div>
  );
};

export default page;
