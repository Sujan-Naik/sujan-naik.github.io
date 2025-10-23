'use client'
import {SetStateAction, useState} from 'react';

const ColorPalette = () => {
    const [copiedText, setCopiedText] = useState('');

    const colors = [
        {
            name: "Fennel Tea",
            hsl: "hsl(141, 96%, 92%)",
            rgb: "rgb(217, 254, 230)",
            hex: "#dafee7",
            contrastWhite: 1.09,
            contrastBlack: 19.34,
            darkText: false
        },
        {
            name: "Seafair Green",
            hsl: "hsl(156, 85%, 83%)",
            rgb: "rgb(177, 249, 221)",
            hex: "#b2f9de",
            contrastWhite: 1.20,
            contrastBlack: 17.50,
            darkText: false
        },
        {
            name: "Turquoise Chalk",
            hsl: "hsl(172, 71%, 72%)",
            rgb: "rgb(134, 234, 221)",
            hex: "#86ebde",
            contrastWhite: 1.40,
            contrastBlack: 14.95,
            darkText: false
        },
        {
            name: "Skink Blue",
            hsl: "hsl(187, 55%, 58%)",
            rgb: "rgb(88, 192, 207)",
            hex: "#59c0cf",
            contrastWhite: 2.12,
            contrastBlack: 9.88,
            darkText: false
        },
        {
            name: "Taiwan Blue Magpie",
            hsl: "hsl(203, 55%, 40%)",
            rgb: "rgb(46, 117, 162)",
            hex: "#2e75a2",
            contrastWhite: 5.00,
            contrastBlack: 4.20,
            darkText: true
        },
        {
            name: "Blue Leviathan",
            hsl: "hsl(218, 75%, 21%)",
            rgb: "rgb(13, 42, 94)",
            hex: "#0d2a5e",
            contrastWhite: 13.84,
            contrastBlack: 1.52,
            darkText: true
        }
    ];

    const copyToClipboard = async (text: SetStateAction<string>) => {
        try {
            if (typeof text === "string") {
                await navigator.clipboard.writeText(text);
            }
            setCopiedText(text);
            setTimeout(() => setCopiedText(''), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <aside className="w-full max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Color Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-6 shadow-lg transition-transform hover:scale-105"
                        style={{backgroundColor: color.hex}}
                    >
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${color.darkText ? 'text-white' : 'text-gray-900'}`}>
                                {color.name}
                            </h3>

                            <div className="space-y-2 mb-4">
                                <button
                                    onClick={() => copyToClipboard(color.hsl)}
                                    className={`w-full text-left px-3 py-2 rounded text-sm font-mono transition-colors ${
                                        color.darkText
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-900'
                                    }`}
                                    title="Click to copy"
                                >
                                    {copiedText === color.hsl ? '✓ Copied!' : color.hsl}
                                </button>
                                <button
                                    onClick={() => copyToClipboard(color.rgb)}
                                    className={`w-full text-left px-3 py-2 rounded text-sm font-mono transition-colors ${
                                        color.darkText
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-900'
                                    }`}
                                    title="Click to copy"
                                >
                                    {copiedText === color.rgb ? '✓ Copied!' : color.rgb}
                                </button>
                                <button
                                    onClick={() => copyToClipboard(color.hex)}
                                    className={`w-full text-left px-3 py-2 rounded text-sm font-mono transition-colors ${
                                        color.darkText
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-900'
                                    }`}
                                    title="Click to copy"
                                >
                                    {copiedText === color.hex ? '✓ Copied!' : color.hex}
                                </button>
                            </div>

                            <div
                                className={`border-t pt-3 ${color.darkText ? 'border-white border-opacity-30' : 'border-white border-opacity-30'}`}>
                                <h5 className={`text-xs font-semibold mb-2 uppercase tracking-wide ${color.darkText ? 'text-white' : 'text-gray-900'}`}>
                                    WCAG Contrast:
                                </h5>
                                <div
                                    className={`flex gap-4 text-sm ${color.darkText ? 'text-white' : 'text-gray-900'}`}>
                                    <div className="flex items-center gap-1">
                                        <span style={{color: '#ffffff'}}>Aa</span>
                                        <span className="opacity-75">{color.contrastWhite}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span style={{color: '#000000'}}>Aa</span>
                                        <span className="opacity-75">{color.contrastBlack}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default ColorPalette;