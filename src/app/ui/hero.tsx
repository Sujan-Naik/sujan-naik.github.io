// components/HeroSection.tsx

"use client"
import React, {useState} from 'react';

import PrimaryTabs from "@/app/ui/components/Tabs/primary-tabs";
import GLTFModelLoader from "@/app/ui/GLTFModelLoader";
import PrimaryCard from "@/app/ui/components/Card/card";
import {Radio, RadioGroup} from "@headlessui/react";

interface HeroProps {
  models: string[]; // Define models as an array of strings
}

const Hero: React.FC<HeroProps> = ({ models }) => {
    const [selectedItem, setSelectedItem] = useState<string>(''); // Track selected item
    console.log(models)
  return (
    <div className="expandable-radio-group">
      <h2 className="text-2xl mb-4">Select Your Skill Area</h2>
      <RadioGroup value={selectedItem} onChange={setSelectedItem}>
        <div className="space-y-4">
          {/* Radio Item 1 */}
          <Radio value="gameDev" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Video Game Development & Design</span>
              </>
            )}
          </Radio>

          {/* Radio Item 2 */}
          <Radio value="programming" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Programming</span>
              </>
            )}
          </Radio>

          {/* Radio Item 3 */}
          <Radio value="fullstack" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Fullstack Web Development</span>
              </>
            )}
          </Radio>

          {/* Radio Item 4 */}
          <Radio value="modding" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Game Modding</span>
              </>
            )}
          </Radio>

          {/* Radio Item 5 */}
          <Radio value="art" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Prototype Level Art</span>
              </>
            )}
          </Radio>

          {/* Radio Item 6 */}
          <Radio value="animating" className={({ checked }) => `relative flex items-center p-4 cursor-pointer rounded-lg border ${checked ? 'bg-blue-500 text-white' : 'bg-white border-gray-300'}`}>
            {({ checked }) => (
              <>
                <span className="flex items-center justify-center h-4 w-4 rounded-full border-2 border-gray-300 mr-3">
                  {checked && <span className="block w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                </span>
                <span className="text-lg">Modeling and Animating</span>
              </>
            )}
          </Radio>
        </div>
      </RadioGroup>

      {/* Display selected item content conditionally */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Selected Skill Area:</h3>
        {selectedItem === 'gameDev' && <p>You selected Video Game Development & Design.</p>}
        {selectedItem === 'programming' && <p>You selected Programming.</p>}
        {selectedItem === 'fullstack' && <p>You selected Fullstack Web Development.</p>}
        {selectedItem === 'modding' && <p>You selected Game Modding.</p>}
        {selectedItem === 'art' && <p>You selected Prototype Level Art.</p>}
        {selectedItem === 'animating' && <div>You selected Modeling and Animating.
                <PrimaryCard height={"50%"}>


                <PrimaryTabs tabs={models}>
                    {models && models.map(value =>
                        <GLTFModelLoader key={value} url={`models/${value}`}></GLTFModelLoader>
                    )}
                </PrimaryTabs>
                    </PrimaryCard>
        </div>}
      </div>
    </div>
  );
};





export default Hero;