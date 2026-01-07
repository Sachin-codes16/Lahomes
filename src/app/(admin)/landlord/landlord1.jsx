import React from 'react';

const LandlordDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      {/* Page Title */}
      <h1 className="text-3xl text-gray-700 font-semibold mb-8">Landlord</h1>

      {/* Top Stats - 4 Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-500 text-sm mb-2">No. of Landlords</div>
          <div className="text-3xl font-bold text-gray-900 mb-4">356</div>
          <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📅</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-500 text-sm mb-2">No. of Properties</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">574</div>
          <span className="inline-block px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded mb-3">+44%</span>
          <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📈</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-500 text-sm mb-2">Commercial</div>
          <div className="text-3xl font-bold text-gray-900 mb-4">274</div>
          <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center">
            <span className="text-2xl">👥</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-500 text-sm mb-2">Residencial</div>
          <div className="text-3xl font-bold text-gray-900 mb-4">300</div>
          <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>
      </div>

      {/* Middle Row - 3 Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Traffic Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base text-gray-700 font-semibold">Traffic Overview</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-600">
              <option>This Month</option>
            </select>
          </div>
          
          <div className="mb-8 h-40">
            <svg viewBox="0 0 400 140" className="w-full h-full">
              <path
                d="M 0 90 Q 50 60, 100 80 Q 150 100, 200 65 Q 250 45, 300 85 Q 350 105, 400 40"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.5"
              />
              <path
                d="M 0 90 Q 50 60, 100 80 Q 150 100, 200 65 Q 250 45, 300 85 Q 350 105, 400 40 L 400 140 L 0 140 Z"
                fill="url(#gradient1)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-1">Visitors</div>
              <div className="text-xl font-bold text-gray-900">1457</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-1">Website Traffic</div>
              <div className="text-xl font-bold text-gray-900">567</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-1">Social Media Traffic</div>
              <div className="text-xl font-bold text-gray-900">456</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-xs mb-1">Market Traffic</div>
              <div className="text-xl font-bold text-gray-900">321</div>
            </div>
          </div>
        </div>

        {/* Total Properties Listed */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-base text-gray-700 font-semibold mb-6">Total Properties Listed</h3>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-900">574</span>
              <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded">+4.53%</span>
            </div>
            <div className="text-sm text-gray-500">Gained <span className="text-green-500 font-medium">$978.56</span> This Month !</div>
          </div>

          <div className="text-sm font-semibold text-gray-700 mb-4">Properties</div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">Apartment</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">121</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Villa</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">101</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '83%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Warehouse</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">57</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '47%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span className="text-sm text-gray-600">Row House</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">68</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{width: '56%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Landlord */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-base text-gray-700 font-semibold mb-4">Top Landlord</h3>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=200&fit=crop" 
              alt="Property"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-base mb-1">Lahomes Group , Pvt Ltd</h4>
                <div className="text-purple-200 text-sm">Markova , USA</div>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <span className="text-base">→</span>
              </button>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300">⭐</span>
              <span className="ml-2">4.5 / 5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - 3 Cards */}
      <div className="grid grid-cols-3 gap-6">
        {/* Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base text-gray-700 font-semibold">Overview</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-600">
              <option>This Month</option>
            </select>
          </div>
          
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Conversion Rate</div>
            <div className="text-3xl font-bold text-gray-900 mb-3">78.5%</div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full" style={{width: '78.5%'}}></div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-semibold text-gray-700">New Leads</h4>
              <button className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                View All
              </button>
            </div>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-base">📧</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leads */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base text-gray-700 font-semibold">Leads</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-600">
              <option>Oman</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👥</span>
            <div>
              <div className="text-3xl font-bold text-gray-900">745</div>
              <div className="text-sm text-gray-500">(Total Leads)</div>
            </div>
          </div>

          <div className="space-y-4 mb-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇴🇲</span>
                  <span className="text-sm text-gray-600">Oman</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">423</div>
                  <div className="text-xs text-gray-500">82.05%</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '82%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇷🇺</span>
                  <span className="text-sm text-gray-600">ABCD</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">234</div>
                  <div className="text-xs text-gray-500">70.5%</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇨🇦</span>
                  <span className="text-sm text-gray-600">LORM</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">124</div>
                  <div className="text-xs text-gray-500">65.8%</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇨🇦</span>
                  <span className="text-sm text-gray-600">XYZzZ</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">321</div>
                  <div className="text-xs text-gray-500">55.8%</div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '55%'}}></div>
              </div>
            </div>
          </div>

          <button className="text-purple-600 text-sm font-semibold hover:text-purple-700">
            Add Other +
          </button>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-base text-gray-700 font-semibold">Recent Leads</h3>
              <div className="text-sm text-gray-500">190 Leads</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="text-xl">📝</span>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">Ryan G. Harris</div>
                <div className="text-xs text-gray-500 truncate">ryangharris@jourrapide.com</div>
              </div>
              <div className="text-xs text-gray-500 flex-shrink-0">May 2024</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">Michael Coch</div>
                <div className="text-xs text-gray-500 truncate">michaelbco@armyspy.com</div>
              </div>
              <div className="text-xs text-gray-500 flex-shrink-0">May 2024</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">Danielle C. Thom</div>
                <div className="text-xs text-gray-500 truncate">danielompson@dayrep.com</div>
              </div>
              <div className="text-xs text-gray-500 flex-shrink-0">May 2024</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-base">📧</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">Julia V. Quincy</div>
                <div className="text-xs text-gray-500 truncate">juliabquincy@armyspy.com</div>
              </div>
              <div className="text-xs text-gray-500 flex-shrink-0">May 2024</div>
            </div>
          </div>

          <button className="w-full py-3 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandlordDashboard;