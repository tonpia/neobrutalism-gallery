'use client';

import { useState } from 'react';

export default function ButtonsPage() {
  const [isToggled, setIsToggled] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you'd show a toast notification
    alert('Copied to clipboard!');
  };

  const buttonExamples = [
    {
      title: 'Primary Button',
      component: (
        <button 
          className="border-4 border-black px-6 py-3 font-bold text-lg transition-all duration-200"
          style={{ 
            backgroundColor: '#005eff',
            color: 'white',
            boxShadow: '4px 4px 0px 0px #000000'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translate(0px, 0px)';
            e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000000';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translate(4px, 4px)';
            e.currentTarget.style.boxShadow = '0px 0px 0px 0px #000000';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000000';
          }}
        >
          Click Me
        </button>
      ),
      code: `<button class="border-4 border-black px-6 py-3 font-bold text-lg transition-all duration-200" style="background-color: #005eff; color: white; box-shadow: 4px 4px 0px 0px #000000;">
  Click Me
</button>`
    },
    {
      title: 'Secondary Button',
      component: (
        <button 
          className="border-4 border-black px-6 py-3 font-bold text-lg transition-all duration-200"
          style={{ 
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '4px 4px 0px 0px #000000'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000000';
            e.currentTarget.style.backgroundColor = 'black';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translate(0px, 0px)';
            e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000000';
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = 'black';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translate(4px, 4px)';
            e.currentTarget.style.boxShadow = '0px 0px 0px 0px #000000';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000000';
          }}
        >
          Secondary
        </button>
      ),
      code: `<button class="border-4 border-black px-6 py-3 font-bold text-lg transition-all duration-200" style="background-color: white; color: black; box-shadow: 4px 4px 0px 0px #000000;">
  Secondary
</button>`
    },
    {
      title: 'Ghost Button',
      component: (
        <button className="border-4 border-transparent text-black px-6 py-3 font-bold text-lg hover:border-black transition-all">
          Ghost Button
        </button>
      ),
      code: `<button class="border-4 border-transparent text-black px-6 py-3 font-bold text-lg hover:border-black transition-all">
  Ghost Button
</button>`
    },
    {
      title: 'Toggle Button Group',
      component: (
        <div className="flex border-4 border-black">
          <button
            className="px-4 py-2 font-bold border-r-4 border-black transition-all duration-200"
            style={{ 
              backgroundColor: !isToggled ? '#005eff' : 'white',
              color: !isToggled ? 'white' : 'black'
            }}
            onClick={() => setIsToggled(false)}
          >
            Option 1
          </button>
          <button
            className="px-4 py-2 font-bold transition-all duration-200"
            style={{ 
              backgroundColor: isToggled ? '#005eff' : 'white',
              color: isToggled ? 'white' : 'black'
            }}
            onClick={() => setIsToggled(true)}
          >
            Option 2
          </button>
        </div>
      ),
      code: `<div class="flex border-4 border-black">
  <button class="px-4 py-2 font-bold border-r-4 border-black" style="background-color: #005eff; color: white;">
    Option 1
  </button>
  <button class="px-4 py-2 font-bold" style="background-color: white; color: black;">
    Option 2
  </button>
</div>`
    },
    {
      title: 'Icon Button',
      component: (
        <button className="border-4 border-black p-3 bg-white hover:bg-black hover:text-white transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
        </button>
      ),
      code: `<button class="border-4 border-black p-3 bg-white hover:bg-black hover:text-white transition-all">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18M3 12h18M3 18h18"></path>
  </svg>
</button>`
    },
    {
      title: 'Disabled Button',
      component: (
        <button 
          className="border-4 border-black bg-gray-300 text-gray-500 px-6 py-3 font-bold text-lg cursor-not-allowed opacity-50"
          disabled
        >
          Disabled
        </button>
      ),
      code: `<button class="border-4 border-black bg-gray-300 text-gray-500 px-6 py-3 font-bold text-lg cursor-not-allowed opacity-50" disabled>
  Disabled
</button>`
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold border-4 border-black px-6 py-4 bg-white mb-4 inline-block">
            Buttons
          </h1>
          <p className="text-xl font-mono border-4 border-black px-4 py-2 bg-white max-w-3xl">
            Interactive elements with bold states and tactile feedback
          </p>
        </div>

        {/* Button Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buttonExamples.map((example, index) => (
            <div key={index} className="border-4 border-black bg-white p-6">
              <h3 className="text-2xl font-bold mb-4">{example.title}</h3>
              
              {/* Live Preview */}
              <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-300">
                {example.component}
              </div>

              {/* Code Snippet */}
              <div className="relative">
                <pre className="bg-black text-white p-4 rounded-none font-mono text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(example.code)}
                  className="absolute top-2 right-2 border-2 border-white px-3 py-1 text-xs font-mono transition-colors"
                  style={{ 
                    backgroundColor: '#005eff',
                    color: 'white'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#005eff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#005eff';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* State Demonstrations */}
        <div className="mt-16 border-4 border-black bg-white p-8">
          <h2 className="text-3xl font-bold mb-6">Button States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Default</h3>
              <button 
                className="border-4 border-black px-6 py-3 font-bold text-lg"
                style={{ backgroundColor: '#005eff', color: 'white', boxShadow: '4px 4px 0px 0px #000000' }}
              >
                Hover Me
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Hover</h3>
              <button 
                className="border-4 border-black px-6 py-3 font-bold text-lg translate-x-1 translate-y-1 shadow-none"
                style={{ backgroundColor: '#005eff', color: 'white' }}
              >
                Pressed Look
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Active</h3>
              <button 
                className="border-4 border-black px-6 py-3 font-bold text-lg -translate-x-1 -translate-y-1 shadow-none"
                style={{ backgroundColor: '#005eff', color: 'white' }}
              >
                Clicked
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
