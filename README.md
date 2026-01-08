import React, { useState } from 'react';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const CalligraphyJudgment = () => {
  const [showDetails, setShowDetails] = useState({});

  const criteria = [
    'Letter Formation',
    'Composition & Balance',
    'Readability',
    'Creativity & Expression',
    'Overall Finish'
  ];

  const results = {
    entries: [
      { 
        entry: 'B', 
        total: 46,
        scores: [9, 10, 9, 9, 9],
        rank: 1,
        award: '🥇 1st Place',
        color: 'bg-yellow-50 border-yellow-500'
      },
      { 
        entry: 'C', 
        total: 42,
        scores: [9, 9, 8, 8, 8],
        rank: 2,
        award: '🥈 2nd Place',
        color: 'bg-gray-50 border-gray-400'
      },
      { 
        entry: 'A', 
        total: 42,
        scores: [9, 8, 8, 8, 9],
        rank: 2,
        award: '🥈 2nd Place',
        color: 'bg-gray-50 border-gray-400'
      },
      { 
        entry: 'E', 
        total: 40,
        scores: [8, 8, 8, 8, 8],
        rank: 3,
        award: '🥉 3rd Place',
        color: 'bg-amber-50 border-amber-600'
      },
      { 
        entry: 'H', 
        total: 40,
        scores: [8, 8, 7, 9, 8],
        rank: 3,
        award: '🥉 3rd Place',
        color: 'bg-amber-50 border-amber-600'
      },
      { 
        entry: 'K', 
        total: 38,
        scores: [8, 8, 8, 7, 7],
        rank: 6,
        color: 'bg-white'
      },
      { 
        entry: 'J', 
        total: 37,
        scores: [8, 7, 7, 8, 7],
        rank: 7,
        color: 'bg-white'
      },
      { 
        entry: 'F', 
        total: 36,
        scores: [7, 8, 7, 7, 7],
        rank: 8,
        color: 'bg-white'
      },
      { 
        entry: 'L', 
        total: 35,
        scores: [7, 7, 7, 7, 7],
        rank: 9,
        color: 'bg-white'
      },
      { 
        entry: 'N', 
        total: 34,
        scores: [7, 7, 6, 7, 7],
        rank: 10,
        color: 'bg-white'
      },
      { 
        entry: 'D', 
        total: 33,
        scores: [7, 7, 6, 6, 7],
        rank: 11,
        color: 'bg-white'
      },
      { 
        entry: 'I', 
        total: 32,
        scores: [6, 7, 6, 7, 6],
        rank: 12,
        color: 'bg-white'
      },
      { 
        entry: 'M', 
        total: 32,
        scores: [7, 6, 6, 7, 6],
        rank: 12,
        color: 'bg-white'
      },
      { 
        entry: 'G', 
        total: 31,
        scores: [6, 6, 6, 6, 7],
        rank: 14,
        color: 'bg-white'
      }
    ]
  };

  const toggleDetails = (entry) => {
    setShowDetails(prev => ({ ...prev, [entry]: !prev[entry] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-amber-900">
          Arabic Calligraphy Competition
        </h1>
        <p className="text-center text-amber-700 mb-8">Detailed Judgment & Scoring</p>

        {/* Criteria Legend */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Judging Criteria (10 marks each)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-900">Letter Formation</p>
              <p className="text-blue-700 text-xs mt-1">Correctness, stroke control</p>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="font-bold text-green-900">Composition & Balance</p>
              <p className="text-green-700 text-xs mt-1">Layout, spacing, harmony</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-bold text-purple-900">Readability</p>
              <p className="text-purple-700 text-xs mt-1">Clarity of text</p>
            </div>
            <div className="bg-pink-50 p-3 rounded">
              <p className="font-bold text-pink-900">Creativity & Expression</p>
              <p className="text-pink-700 text-xs mt-1">Originality, visual impact</p>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <p className="font-bold text-orange-900">Overall Finish</p>
              <p className="text-orange-700 text-xs mt-1">Neatness, confidence</p>
            </div>
          </div>
        </div>

        {/* Winners Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {results.entries.slice(0, 5).map((entry) => (
            <div key={entry.entry} className={`bg-white rounded-lg shadow-lg p-6 border-4 ${entry.color.split(' ')[1]}`}>
              <div className="text-center mb-3">
                <p className="text-2xl mb-1">{entry.award?.split(' ')[0]}</p>
                <p className="text-sm font-semibold text-gray-600">{entry.award?.split(' ').slice(1).join(' ')}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-800">Entry {entry.entry}</p>
                <p className="text-3xl font-bold text-amber-600 mt-2">{entry.total}/50</p>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Leaderboard with Detailed Scores */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Complete Leaderboard</h2>
          
          <div className="space-y-3">
            {results.entries.map((entry) => (
              <div key={entry.entry} className={`rounded-lg border-2 ${entry.color} transition-all`}>
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-opacity-80"
                  onClick={() => toggleDetails(entry.entry)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center">
                      <p className="text-xl font-bold text-gray-700">#{entry.rank}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">Entry {entry.entry}</p>
                      {entry.award && <p className="text-sm text-gray-600">{entry.award}</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-3xl font-bold text-amber-600">{entry.total}</p>
                      <p className="text-xs text-gray-500">out of 50</p>
                    </div>
                    {showDetails[entry.entry] ? 
                      <ChevronUp className="w-6 h-6 text-gray-400" /> : 
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    }
                  </div>
                </div>
                
                {showDetails[entry.entry] && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                      {criteria.map((criterion, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded">
                          <p className="text-xs font-semibold text-gray-600 mb-1">{criterion}</p>
                          <p className="text-2xl font-bold text-gray-800">{entry.scores[idx]}/10</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Competition Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-600">14</p>
              <p className="text-sm text-gray-600">Total Entries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-600">46</p>
              <p className="text-sm text-gray-600">Highest Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-600">37.1</p>
              <p className="text-sm text-gray-600">Average Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">50</p>
              <p className="text-sm text-gray-600">Maximum Possible</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-amber-100 rounded-lg p-4 text-center">
          <p className="text-sm text-amber-800">
            Click on any entry to view detailed scoring breakdown across all five criteria
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalligraphyJudgment;# AllamaCalligraphyAwards
