'use client'

import { useState, useEffect, useRef } from 'react'
import { Minus, Plus, UtensilsCrossed, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Ingredient = {
  amount?: number | string | undefined;
  unit?: string;
  name: string;
}

export function RecipeIngredients({
  initialServings = 1,
  ingredients,
  prepTime,
  cookTime
}: {
  initialServings?: number;
  ingredients: Ingredient[];
  prepTime?: number;
  cookTime?: number;
}) {
  const [servings, setServings] = useState(initialServings)
  const servingsRef = useRef(servings);
  const [checkedIngredients, setCheckedIngredients] = useState<{[key: number]: boolean}>({});
  
  // Update ref when servings change
  useEffect(() => {
    servingsRef.current = servings;
  }, [servings]);
  
  // Listen for global servings changes
  useEffect(() => {
    // Function to handle servings changes from other components
    const handleServingsChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.servings) {
        setServings(customEvent.detail.servings);
      }
    };

    // Listen for the custom event
    document.addEventListener('servings-changed', handleServingsChange);

    // Set initial servings to global input if it exists
    const servingsInput = document.getElementById('servings-input') as HTMLInputElement;
    if (servingsInput && servingsInput.value) {
      const inputServings = parseInt(servingsInput.value);
      if (!isNaN(inputServings) && inputServings > 0) {
        setServings(inputServings);
      }
    }

    // Cleanup
    return () => {
      document.removeEventListener('servings-changed', handleServingsChange);
    };
  }, []);
  
  const increaseServings = () => {
    const newServings = servings + 1;
    setServings(newServings);
    
    // Update global servings input if it exists
    const servingsInput = document.getElementById('servings-input') as HTMLInputElement;
    if (servingsInput) {
      servingsInput.value = newServings.toString();
    }
    
    // Dispatch event for other components
    const event = new CustomEvent('servings-changed', { 
      detail: { servings: newServings },
      bubbles: true 
    });
    document.dispatchEvent(event);
  }
  
  const decreaseServings = () => {
    if (servings > 1) {
      const newServings = servings - 1;
      setServings(newServings);
      
      // Update global servings input if it exists
      const servingsInput = document.getElementById('servings-input') as HTMLInputElement;
      if (servingsInput) {
        servingsInput.value = newServings.toString();
      }
      
      // Dispatch event for other components
      const event = new CustomEvent('servings-changed', { 
        detail: { servings: newServings },
        bubbles: true 
      });
      document.dispatchEvent(event);
    }
  }
  
  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Calculate the multiplier for ingredient amounts
  const multiplier = initialServings ? servings / initialServings : 1
  
  // Calculate total time
  const totalTime = (prepTime || 0) + (cookTime || 0);

  return (
    <div className="w-full mx-auto mb-4">
      {/* Recipe information section with servings and time */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-5 mb-5">
        {/* Servings - Interactive */}
        <div className="flex items-start">
          <div className="bg-[#f9d24f] p-1.5 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-black text-base uppercase">PORTIONEN</h3>
            <div className="flex items-center mt-1">
              <input 
                type="number" 
                value={servings}
                onChange={(e) => {
                  const newServings = Math.max(1, parseInt(e.target.value) || 1);
                  setServings(newServings);
                  
                  // Dispatch event for other components
                  const event = new CustomEvent('servings-changed', { 
                    detail: { servings: newServings },
                    bubbles: true 
                  });
                  document.dispatchEvent(event);
                }}
                className="w-20 h-8 text-center border-2 border-black text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#f9d24f]"
                min="1"
              />
            </div>
          </div>
        </div>
        
        {/* Time information */}
        <div className="flex items-start">
          <div className="bg-[#f9d24f] p-1.5 rounded-md mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-black text-base uppercase">ZUBEREITUNG</h3>
                <p className="text-base mt-1">{prepTime} Min</p>
              </div>
              <div className="text-center">
                <h3 className="font-black text-base uppercase">KOCHZEIT</h3>
                <p className="text-base mt-1">{cookTime || 0} Min</p>
              </div>
              <div className="text-center">
                <h3 className="font-black text-base uppercase">GESAMTZEIT</h3>
                <p className="text-base mt-1">{totalTime} Min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button className="border-2 border-black py-3 px-4 font-black text-base uppercase hover:bg-gray-100 rounded-md transition-colors">
          REZEPT SPEICHERN
        </button>
        <button 
          onClick={() => {
            // Create a new window for printing
            const printWindow = window.open('', '_blank');
            
            // Find the recipe card content and image
            const recipeCard = document.querySelector('.bg-white.border-2.border-gray-800.rounded-lg');
            const recipeTitle = document.querySelector('h2.text-3xl.md\\:text-4xl.font-black.uppercase.text-white');
            const recipeImage = document.querySelector('.border-2.border-gray-200 img') as HTMLImageElement;
            const recipeInstructions = document.querySelectorAll('.flex.gap-5');
            const recipeNutrition = document.querySelector('.grid.grid-cols-2.sm\\:grid-cols-4.gap-6');
            
            if (printWindow && recipeCard) {
              // Set up the print window with necessary styles
              printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                  <title>Rezept Drucken</title>
                  <style>
                    body {
                      font-family: 'Source Sans 3', sans-serif;
                      line-height: 1.5;
                      color: #000;
                      padding: 20px;
                      max-width: 800px;
                      margin: 0 auto;
                    }
                    h1, h2, h3 {
                      color: #0b3558;
                    }
                    h1 {
                      font-size: 28px;
                      text-align: center;
                      margin-bottom: 20px;
                      text-transform: uppercase;
                      font-weight: bold;
                    }
                    .recipe-image {
                      width: 100%;
                      max-width: 400px;
                      margin: 0 auto 20px;
                      display: block;
                      border-radius: 8px;
                      border: 1px solid #ddd;
                    }
                    .recipe-section {
                      margin-bottom: 30px;
                    }
                    .recipe-section-title {
                      font-size: 20px;
                      font-weight: bold;
                      margin-bottom: 15px;
                      text-transform: uppercase;
                      border-bottom: 2px solid #f9d24f;
                      padding-bottom: 5px;
                    }
                    .ingredients-list {
                      margin-bottom: 30px;
                    }
                    .ingredient-item {
                      padding: 8px 0;
                      border-bottom: 1px solid #eee;
                    }
                    .instruction-item {
                      margin-bottom: 15px;
                      display: flex;
                    }
                    .instruction-number {
                      font-weight: bold;
                      margin-right: 10px;
                      background: #f9d24f;
                      color: black;
                      width: 25px;
                      height: 25px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border-radius: 4px;
                      border: 1px solid black;
                    }
                    .nutrition-grid {
                      display: grid;
                      grid-template-columns: repeat(4, 1fr);
                      gap: 15px;
                      margin-top: 20px;
                    }
                    .nutrition-item {
                      border: 1px solid black;
                      padding: 10px;
                      text-align: center;
                      border-radius: 4px;
                    }
                    .nutrition-value {
                      font-size: 20px;
                      font-weight: bold;
                      color: #f9d24f;
                    }
                    .nutrition-label {
                      font-size: 14px;
                      font-weight: medium;
                    }
                    .nutrition-unit {
                      font-size: 12px;
                    }
                    .recipe-info {
                      display: flex;
                      justify-content: space-between;
                      margin-bottom: 20px;
                      padding-bottom: 15px;
                      border-bottom: 1px solid #eee;
                    }
                    .recipe-info-item {
                      text-align: center;
                    }
                    .recipe-info-label {
                      font-weight: bold;
                      text-transform: uppercase;
                      font-size: 12px;
                    }
                    .recipe-info-value {
                      font-size: 14px;
                      margin-top: 5px;
                    }
                    @media print {
                      body {
                        font-size: 12pt;
                      }
                      .no-print {
                        display: none;
                      }
                    }
                  </style>
                </head>
                <body>
                  <h1>${recipeTitle ? recipeTitle.textContent : 'Rezept'}</h1>
                  
                  ${recipeImage ? `<img src="${recipeImage.src}" alt="Rezeptbild" class="recipe-image">` : ''}
                  
                  <div class="recipe-info">
                    <div class="recipe-info-item">
                      <div class="recipe-info-label">Portionen</div>
                      <div class="recipe-info-value">${servings}</div>
                    </div>
                    <div class="recipe-info-item">
                      <div class="recipe-info-label">Zubereitung</div>
                      <div class="recipe-info-value">${prepTime} Min</div>
                    </div>
                    <div class="recipe-info-item">
                      <div class="recipe-info-label">Kochzeit</div>
                      <div class="recipe-info-value">${cookTime} Min</div>
                    </div>
                    <div class="recipe-info-item">
                      <div class="recipe-info-label">Gesamtzeit</div>
                      <div class="recipe-info-value">${(prepTime || 0) + (cookTime || 0)} Min</div>
                    </div>
                  </div>
                  
                  <div class="recipe-section">
                    <div class="recipe-section-title">Zutaten</div>
                    <div class="ingredients-list">
                      ${ingredients.map(ingredient => `
                        <div class="ingredient-item">
                          ${ingredient.amount !== undefined ? 
                            `<strong>${typeof ingredient.amount === 'number' 
                              ? Math.round((ingredient.amount * multiplier) * 10) / 10
                              : ingredient.amount}
                            ${ingredient.unit ? ingredient.unit : ''}</strong> ` : ''}
                          ${ingredient.name}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div class="recipe-section">
                    <div class="recipe-section-title">Zubereitung</div>
                    <div class="instructions-list">
                      ${Array.from(document.querySelectorAll('.flex.gap-5')).filter(el => 
                        el.querySelector('.w-8.h-8.rounded-md.bg-\\[\\#f9d24f\\]')
                      ).map((instruction, index) => {
                        const instructionText = instruction.querySelector('.flex-1 p')?.textContent;
                        return instructionText ? `
                          <div class="instruction-item">
                            <div class="instruction-number">${index + 1}</div>
                            <div>${instructionText}</div>
                          </div>
                        ` : '';
                      }).join('')}
                    </div>
                  </div>
                  
                  <div class="recipe-section">
                    <div class="recipe-section-title">Nährwerte</div>
                    <div class="nutrition-grid">
                      ${Array.from(document.querySelectorAll('.border-2.border-black.p-4.rounded-md.text-center')).map(item => {
                        const value = item.querySelector('.text-2xl')?.textContent;
                        const label = item.querySelector('.text-base')?.textContent;
                        return value && label ? `
                          <div class="nutrition-item">
                            <div class="nutrition-value">${value}</div>
                            <div class="nutrition-label">${label}</div>
                            <div class="nutrition-unit">pro Portion</div>
                          </div>
                        ` : '';
                      }).join('')}
                    </div>
                  </div>
                </body>
                </html>
              `);
              
              printWindow.document.close();
              
              // Print after the content is loaded
              printWindow.onload = function() {
                printWindow.print();
                // Close the window after printing (optional)
                setTimeout(function() {
                  printWindow.close();
                }, 500);
              };
            } else {
              // Fallback if we can't find the recipe card
              alert('Rezept konnte nicht zum Drucken vorbereitet werden. Bitte versuchen Sie es später erneut.');
            }
          }}
          className="border-2 border-black py-3 px-4 font-black text-base uppercase hover:bg-gray-100 rounded-md transition-colors"
        >
          REZEPT DRUCKEN
        </button>
        <button className="border-2 border-black py-3 px-4 font-black text-base uppercase col-span-1 md:col-span-2 hover:bg-gray-100 rounded-md transition-colors">
          BEWERTUNGEN LESEN
        </button>
      </div>

      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[2px] w-16 bg-[#f9d24f]/70" />
        <h3 className="font-black text-2xl uppercase text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#f9d24f] rounded-full flex items-center justify-center text-black">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span>ZUTATEN</span>
        </h3>
        <div className="h-[2px] w-16 bg-[#f9d24f]/70" />
        </div>

        {/* Ingredients list */}
      <div className="mb-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className="flex items-center border-b border-gray-100 pb-2 cursor-pointer"
              onClick={() => toggleIngredient(index)}
            >
              <div className={`w-6 h-6 border-2 rounded flex items-center justify-center mr-3 flex-shrink-0 ${checkedIngredients[index] ? 'border-[#f9d24f] bg-[#f9d24f]' : 'border-gray-300'}`}>
                {checkedIngredients[index] && <Check className="h-4 w-4 text-black" />}
              </div>
              <div className={`flex-1 text-lg text-black leading-relaxed font-normal ${checkedIngredients[index] ? 'line-through decoration-[#f9d24f] decoration-2 text-gray-400' : ''}`}>
                {ingredient.amount !== undefined && (
                  <span className="font-medium">
                    {typeof ingredient.amount === 'number' 
                      ? Math.round((ingredient.amount * multiplier) * 10) / 10
                      : ingredient.amount}
                        {ingredient.unit && ` ${ingredient.unit}`}
                  </span>
                )}
                <span className="ml-2">{ingredient.name}</span>
                </div>
              </div>
            ))}
        </div>

        {/* Shopping link */}
        <div className="text-center pt-8">
          <p className="text-sm text-[#0b3558] mb-2">Fehlt noch etwas für dein Rezept?</p>
          <a 
            href="https://www.amazon.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b3558] text-white px-6 py-2 rounded-full font-medium hover:bg-[#f9d24f] hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Lebensmittel kaufen
          </a>
        </div>
      </div>
    </div>
  )
}